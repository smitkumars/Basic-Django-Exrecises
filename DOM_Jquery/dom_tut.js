head1=document.querySelector("#head1")

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

function changeHeaderColor(){
  colorInput = getRandomColor()
  head1.style.color = colorInput;
}

// Now perform the action over intervals (milliseocnds):
setInterval("changeHeaderColor()",500);


var special = document.querySelector("#special")
var specialA = document.querySelector("a")

specialA.getAttribute("href")

specialA.setAttribute("href","https://www.amazon.com")

var head2=document.querySelector("#head2")
var head3=document.querySelector("#head3")
var head4=document.querySelector("#head4")

head2.addEventListener('mouseover',function(){
    head2.textContent="Mouse currently over";
    head2.style.color="red";})

head2.addEventListener('mouseout',function(){
   head2.textContent="Hello world";
   head2.style.color="blue";})

head3.addEventListener('click',function(){
    head3.textContent="Clicked on";
    head3.style.color="green";
})

head4.addEventListener('dblclick',function(){
  head4.textContent="double clicked";
  head4.style.color="red";
})
