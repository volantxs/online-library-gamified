import  {db}  from "./firebase";
import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js'
var modal = document.getElementById("modal");
var openImportModal = document.getElementById("openImportModal");
var importBookBtn = document.getElementById("addBook")
var span = document.getElementsByClassName("close")[0];
var searchInput = document.getElementById("searchBar")
var bookBtns = document.querySelectorAll(".btn-book")
var imgBtn = document.querySelectorAll(".img-shadow")
var tooltip = document.getElementById("tooltip");
var dropdown = document.getElementById("dropdownVault");
var formImport = document.getElementById("importBook");
var BookImg = '';
var BookPageCount = '';
var BookTitle = '';
var BookAuthor = '';
var BookDescription = '';


var query = ''
var URL = ''
var vault;

var themes = ['fire', 'water', 'air', 'earth']
var random_theme = themes[(Math.floor(Math.random() * themes.length))]

openImportModal.onclick = function() {
  modal.style.display = "flex";
  searchInput.focus();
}


function ImportBook(vault) {
  const chosenVault = document.getElementById(vault);
  query = searchInput.value;
  URL = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=AIzaSyBmSE_tFFrraFhotpwPc8Vc4zMFEHL9zN8';
  $.ajax({
    url: URL.toString(),
    dataType: 'json',
    success: (data) => {
      console.log("getting data from google/n" + data);
      var newBookNode = document.createElement('div')
      newBookNode.className = "col-md-2 box p-2 m-3" 
      // img element
      var newBookImg = document.createElement('img')
      try{
      BookImg = data.items[0].volumeInfo.imageLinks.smallThumbnail;
      newBookImg.src = BookImg;
      } catch(e) {
        alert("No Cover Image found for the Book");
      }
      newBookImg.className = "img-fluid mx-auto d-block rounded m-3 img-shadow"
      newBookImg.style.width ="100px";
      newBookImg.style.height ="160px";
      newBookNode.appendChild(newBookImg);
      // button element
      var newBookBtn = document.createElement('button');
      newBookBtn.className="btn btn-book"
      BookPageCount = data.items[0].volumeInfo.pageCount;
      newBookBtn.value = BookPageCount;
      BookTitle =  data.items[0].volumeInfo.title;
      newBookBtn.innerHTML = BookTitle;
      newBookBtn.id = "bookID-" + (new Date()).getTime();
      newBookBtn.name = random_theme;
      try {
      newBookBtn.onclick = (e) => {getXP(e); disableButton(e)};
      } catch(e) {
        alert(e.message + "Couldn't get the XP of the book");
      }
      try{
      newBookBtn.onmouseenter = (e) => getDescription(e);
      newBookBtn.onmouseleave = (e) => {tooltip.innerHTML = '';}
      } catch(e) {
        alert("Could't fetch the Book Info. Try Again")
      }
      newBookNode.appendChild(newBookBtn);
      chosenVault.appendChild(newBookNode);
    }
  })

  submitBookInfo(book, vault);
  document.getElementById("modal").style.display = 'none'
  document.getElementById("addedAlert").style.display = "flex"
  setTimeout(() => {
    document.getElementById("addedAlert").style.display = "none" }, 2000)
}

function submitBookInfo(BookTitle, BookAuthor, BookImg, BookPageCount, vault) {
  try {
    const docRef = addDoc(collection(db, 'imported'), {
      bookName: BookTitle,
      vaultName: vault,
      bookImg: BookImg,
      bookPageCount: BookPageCount,
      bookAuthor: BookAuthor,
    });
    alert("Added book to collection! id: " + docRef.id)
  } catch(e) {
    alert(e.message + "Couldn't send the book to cloud");
  }
}

function getDescription(e) {
  query = e.target.innerHTML;
  // alert(typeof(query))
  tooltip.innerHTML = "Loading Book Info..";
  tooltip.style.display = "block"
  URL = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=AIzaSyBmSE_tFFrraFhotpwPc8Vc4zMFEHL9zN8';
  $.ajax({
    url: URL.toString(),
    dataType: 'json',
    success: (data) => {
      BookDescription =  data.items[0].volumeInfo.description;
      BookAuthor = data.items[0].volumeInfo.authors[0];
      const getBookPages = data.items[0].volumeInfo.title;
      tooltip.innerHTML = "Author: "+  getBookAuthor + " | Pages: " + getBookPages;
      setTimeout(() => {
        try{
        tooltip.innerHTML = getBookDes;
        } catch(e) {
          tooltip.innerHTML = "Error in Loading the Book Description"
        }
    }, 6000);
  }})
}

importBookBtn.onclick = (e) => {
  vault = dropdown.options[dropdown.selectedIndex].value;
  try {
    ImportBook(vault);
    document.getElementById("modal").style.display = 'none'
    document.getElementById("addedAlert").style.display = "flex"
    setTimeout(() => {
      document.getElementById("addedAlert").style.display = "none" }, 2000)
  } catch(e) {
    alert(e.message)
  }
}

span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.addEventListener("click", () => {
  tooltip.style.display = 'none'
})
