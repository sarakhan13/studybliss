/* Code for discussion board section */

function postComment() {
  //getting name and comment values

  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;

  var posted = document.createElement("div");
  posted.className = "postedComment";

  var commentDiv = document.createElement("div");
  commentDiv.className = "commented";

  var h2 = document.createElement("h2");
  var texth2 = document.createTextNode(name);
  h2.append(texth2);
  commentDiv.append(h2);

  var p = document.createElement("p");
  var textp = document.createTextNode(comment);
  p.append(textp);
  commentDiv.append(p);

  posted.append(commentDiv);

  addHere = document.getElementById("pastDiscussion");

  addHere.insertBefore(posted, addHere.firstChild);

  form.reset();
}

var form = document.getElementById("my-form");

// add an event listener to the form's submit event
form.addEventListener("submit", function (event) {
  // prevent the default form submission behavior
  event.preventDefault();
  postComment();

  // clear the form by resetting it
  form.reset();
});

/* discussion board ends */
