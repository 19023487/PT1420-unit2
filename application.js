// alert("Hello world"); 
function processForm(){
	var name
	name = document.getElementById("name");
	message = document.getElementById("message");
	content = document.getElementById("output");
	
	//alert("Hello " + name.value + " your message is:" + message.value);

	//content.innerHTML = "Hello " + name.value + " your message is: " + message.value;
	content.innerHTML = "<div>Hello my name is " + name.value;
	
	content.innerHTML += " Chris Jackson" + message.value;
	
	
	
}	