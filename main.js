//Listen for form submit
document.getElementById('myform').addEventListener("submit", saveBookmark);
// Save Bookmark
function saveBookmark(e) {
    //Get form values
    var siteName= document.getElementById('siteName').value;
    var siteUrl=document.getElementById('siteUrl').value;
   
var bookmark= { 
name: siteName,

	url: siteUrl
}


//Test if bookmark is null
if(localStorage.getItem('bookmarks')=== null) {
	
	var bookmarks=[];
	// Add to array
	bookmarks.push(bookmark);
	//set to local storage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
} else{
// get bookmarks from localStorage

	var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
} { 
bookmarks.push(bookmark);
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    e.preventDefault();
}

function fetchBookmarks() {
	var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
	
	var bookmarksResults= document.getElementById('bookmarksResults');
	

	bookmarksResults.innerHTML='';
	for (var i = 0; i < bookmarks.length; i++) {
  // code to be executed
  var name= bookmarks[i].name;
var url = bookmarks[i].url;

bookmarksResults.innerHTML += '<div class="well">' +
  '<h3>' + name +
  '<a class="btn btn-default" target="_blank" href="' + url + '"> Visit</a>' +
  '<a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" target="_blank" href="#"> Delete</a>' +
  '</h3>' +
  '</div>';

	}
	// body...
}
