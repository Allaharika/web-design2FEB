//var va r roo
//parent element
var container=document.querySelector("#root")
//child element
var card=document.createElement("div");
card.setAttribute("id","card");
container.appendChild(card)


var image=document.createElement("img");
image.src="C:\Users\Administrator\Desktop\web-design2FEB\image"
image.alt="Image"
image.style.width="20%"
card.appendChild(image)