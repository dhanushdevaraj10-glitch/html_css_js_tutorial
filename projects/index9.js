var popupoverlay =document.querySelector(".overlay");
var popupbox =document.querySelector(".popup-box");
var popupbutton =document.getElementById("add-popup");

function openpopup(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
}
popupbutton.addEventListener("click", openpopup);


var closebutton =document.getElementById("cancelBook");

closebutton.addEventListener("click", function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
});

var cointainer=document.querySelector(".container");
var addbook=document.getElementById("addBook");
var booktitle=document.getElementById("title");
var bookauthor=document.getElementById("author");
var bookdescription=document.getElementById("description");

addbook.addEventListener("click", function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class", "Book-conainer");
    div.innerHTML=`<h2>${booktitle.value}</h2>
                   <h5>${bookauthor.value}</h5>
                   <p>${bookdescription.value}</p>
                   <button onclick="deletebook(event)">Delete</button>`;
    cointainer.appendChild(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";
});

function deletebook(event)
{
    event.target.parentElement.remove()
}
