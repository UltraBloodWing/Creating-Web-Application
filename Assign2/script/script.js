
// ------------between pages

var manukaList = [["Manuka Honey 30+", "RM30.00"], ["Manuka Honey 100+", "RM40.00"], ["Manuka Honey 500+", "RM50.00"], ["Manuka Honey 900+", "RM60.00"],
				["Pollen", "RM80.00"]];
var honeycombList = [["Organic Honeycomb", "RM35.00"], ["Natural Honeycomb", "RM30.00"], ["Honeycomb in Berringa Honey", "RM60.00"],
				["Honeycomb in Natural Beachworth Honey" , "RM60.00"],["Manuka Honeycomb Chocolate", "RM15.00"],
				["Magnum Honeycomb Crunch", "RM25.00"], ["Honeycomb Snack", "RM5.00"],["Honeycomb Sugar", "RM2.00"]]; 
var creamyHoneyList = [["Creamy Honey with Apricot", "RM40.00"], ["Creamy Honey with Blueberry", "RM40.00"], ["Creamy Honey with Cranberry", "RM40.00"],
				["Creamy Honey with Lemonandmint", "RM40.00"],["Creamy Honey with Chocolate", "RM40.00"], ["Creamy Honey with Strawberry", "RM40.00"],
				["Creamy Honey with Ginger and Lemongrass", "RM40.00"],["Creamy Honey Classic", "RM40.00"]];
var honeyCocoaList = [["Cocononut Honey Cocoa Bar", "RM47.50"], ["Dutch Honey Cocoa Bar", "RM47.50"], ["Ginger Cardamom Honey Cocoa Bar", "RM47.50"], 
				["Mayanspice Honey Cocoa Bar", "RM47.50"], ["Nibs Coffee Honey Cocoa Bar", "RM47.50"], ["Oregon Peppermint Honey Cocoa Bar", "RM47.50"]];

var state = [["Johor"],["Kedah"],["Kelantan"],["Kuala Lumpur"],["Labuan"],["Melaka"],["Negeri Sembilan"],["Pahang"],["Penang"],
			["Perak"],["Perlis"],["Putrajaya"],["Selangor"],["Sabah"],["Sarawak"],["Terengganu"]];
			
var navbarProduct = [["Manuka Honey & Pollen","product1.html"],["Honey Comb","product2.html"],["Creamy Honey","product3.html"],["Honey Cocoa","product4.html"]];
var navbarAboutme = [["Masrur Rahman Zahin","aboutme1.html"],["Syn Khai Ong","aboutme2.html"],["Wei Ting Yong","aboutme3.html"],["Ibrahim Naah Ahmed","aboutme4.html"]];


var mainList = [];


function createMainList(){
	
	for (var i = 0; i < manukaList.length; i++){
		mainList.push(manukaList[i]);	
	}
	for (var i = 0; i < honeycombList.length; i++){
		mainList.push(honeycombList[i]);
	}
	for (var i = 0; i < creamyHoneyList.length; i++){
		mainList.push(creamyHoneyList[i]);
	}
	for (var i = 0; i < honeyCocoaList.length; i++){
		mainList.push(honeyCocoaList[i]);
	}
}


function setItemNamePrice(){
	
	var currPage = location.href.split("/").slice(-1);
	var itemName = document.getElementsByClassName("itemname");
	var price = document.getElementsByClassName("price");
	var arr;
	
	if (location.href.split("/").slice(-1) == 'product1.html')
		arr = manukaList;
	if (location.href.split("/").slice(-1) == 'product2.html')
		arr = honeycombList;
	if (location.href.split("/").slice(-1) == 'product3.html')
		arr = creamyHoneyList;
	if (location.href.split("/").slice(-1) == 'product4.html')
		arr = honeyCocoaList;
	
	for(var i = 0; i < arr.length; i++){
		itemName[i].innerHTML = arr[i][0];
		price[i].innerHTML= arr[i][1];
	}	 	
}

function transferData() {
	var itemName;
	var itemPrice;
	
	var index;
	
	var itemButton = document.getElementsByClassName('item-button');
	for(var i = 0; i < itemButton.length; i++){
		if(itemButton[i].getElementsByTagName('button')[0] == this)
			index = i;
	}  
	
	if (location.href.split("/").slice(-1) == 'product1.html'){
		itemName = manukaList[index][0];
		itemPrice = manukaList[index][1];
	}
	if (location.href.split("/").slice(-1) == 'product2.html'){
		itemName = honeycombList[index][0];
		itemPrice = honeycombList[index][1];
	}
	if (location.href.split("/").slice(-1) == 'product3.html'){
		itemName = creamyHoneyList[index][0];
		itemPrice = creamyHoneyList[index][1];
	}
	if (location.href.split("/").slice(-1) == 'product4.html'){
		itemName = honeyCocoaList[index][0];
		itemPrice = honeyCocoaList[index][1];
	}

	localStorage.setItem("itemName", itemName);
	localStorage.setItem("itemPrice", itemPrice);
	location.href = "enquiry.html";
	
	for (var i = 0; i < mainList.length; i++){
		if(mainList[i][0] == itemName){
			localStorage.setItem("productID", i);
			break;
		}
	}
}

function checkClick(){

	var itemButton = document.getElementsByClassName('item-button');

	for(var i = 0; i < itemButton.length; i++){
		itemButton[i].getElementsByTagName('button')[0].addEventListener("click", transferData);
	}  
}


function productList(){
	
	var products = document.getElementById("product"); 
	
	products.innerHTML = "";
	
	for(var i = 0; i < mainList.length; i++) {
		var opt = mainList[i][0];
	products.innerHTML += "<option>"+opt+"</option>";
	}
}
			
			
	// ---------------------------------------------------------------------	
			
function stateList(){
	var select = document.getElementById("state");
	
	for(var i = 0; i < state.length; i++){
		var opt = state[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}			

function populateNavBar(){
	
	var dropDown = document.getElementsByClassName("dropdown-content");
	
	for(var i = 0; i < navbarAboutme.length; i++){
		var opt = navbarAboutme[i];
		var el = document.createElement('a');
		el.setAttribute('href', navbarAboutme[i][1]);
		el.innerHTML = navbarAboutme[i][0];
		
		dropDown[	1].appendChild(el);
	}
	for(var i = 0; i < navbarProduct.length; i++){
		var opt = navbarProduct[i];
		var el = document.createElement('a');
		el.setAttribute('href', navbarProduct[i][1]);
		el.innerHTML = navbarProduct[i][0];
		
		dropDown[0].appendChild(el);
	}
}	

function transferWithin(){
	var select = document.getElementById("product");
	document.getElementById("Price").innerHTML= mainList[select.selectedIndex][1];
	document.getElementById("Subject").innerHTML=mainList[select.selectedIndex][0];
	
}

function pushEnhancementToNav(){
	var nav = document.getElementsByTagName('nav');
	
	var enhance = document.createElement('a');
	
	enhance.setAttribute('href', 'enhancements2.html');
	enhance.innerHTML = "Enhancements";
	nav[0].appendChild(enhance);
}

//-----------------------------------------------------------------------------------------

function validateForm()
{

	var isAllOk = true; 
	var errMsg = "";
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var street = document.getElementById("street").value;
	var city = document.getElementById("city").value;
	var postcode = document.getElementById("postcode").value;
	var phone = document.getElementById("phone").value;
	var duration = document.getElementById("duration").value;
	
	//Name
	
	if(fname == "")
		errMsg += "Please enter your first name\n";
	else if(!isNaN(fname))
			errMsg += "Name cannot have numbers\n";
	else if(fname.length > 25)
		errMsg += "Name cannot exceed more than 25 characters/n";
	
	
	if(lname == "")
		errMsg += "Please enter your last name\n";
	else if(!isNaN(lname))
		errMsg += "Last Name cannot have numbers\n";
	else if( lname > 25)
		errMsg += "Last Name cannot exceed more than 25 characters\n";
		
	//E-mail
	
	var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(email.match(regex)){
	errMsg = "";
	}
	else{
	errMsg += "Please enter a valid E-mail address\n";
	}
	
	//Street
	
	if(street == ""){
		errMsg += "Please enter your Street Address\n";
	}
	
	//City
	
	if(city == ""){
		errMsg += "Please enter your City\n";
	}
	
	
	//postcode
	
	if(postcode == "")
		errMsg += "Please enter your Postcode\n";
	else if (isNaN(postcode))
		errMsg += "Postcode cannot have letters or symbols\n"
	
	
	//phone
	
	if(phone == "")
		errMsg += "Please enter your phone number\n";
	else if (isNaN(phone))
		errMsg += "Phone number cannot have letters or symbols\n"
	
	
	//rental duration
	
	if(duration == "")
		errMsg += "Please enter your rental duration\n";
	else if (isNaN(duration))
		errMsg += "Rental duration cannot have letters or symbols\n"
	else if (duration > 0)
		errMsg += "Rental duration cannot be less than zero\n"
	
	
	//End Result
	
	if(errMsg != ""){
	isAllOk = false;
	alert(errMsg);
	}
	
	return isAllOk;
}
function initialise()
{
	var enquiry_form = document.getElementById("enquiry-form");
	enquiry_form.onsubmit = validateForm;
}	


function init(){
	populateNavBar();
	pushEnhancementToNav();
	createMainList();
	if((location.href.split("/").slice(-1)).toString().slice(0, 7) == "product"){
		checkClick();
		setItemNamePrice();
	}
	
	if (location.href.split("/").slice(-1) == "enquiry.html"){
		document.getElementById("Subject").innerHTML=localStorage.getItem("itemName");
		document.getElementById("Price").innerHTML=localStorage.getItem("itemPrice");
		document.getElementById("product").addEventListener("click", transferWithin);
		productList();
		document.getElementById("product").selectedIndex = localStorage.getItem("productID");
		stateList();
		initialise();
		
	}
}


window.addEventListener('load', init);