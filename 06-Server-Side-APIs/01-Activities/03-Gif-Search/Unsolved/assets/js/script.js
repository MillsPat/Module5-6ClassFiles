// Create a function called `myFunction()`
// YOUR CODE HERE
var searchTerm = document.getElementById("searchTerm") 


const myFunction = function() {
var input = searchTerm.value 
fetch('https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'

)
// Create a variable that will use `document.querySelector()` to target the `id` of the input 
// Use `.value` to capture the value of the input and store it in the variable
// YOUR CODE HERE
// Make a `fetch` request concatenating that variable to the query URL
// Remember to add your API key at the end
// YOUR CODE HERE
// 



.then(function(response) {
  return response.json();
})
.then(function(response) {
  var responseContainerEl = document.querySelector("#response-container")
  responseContainerEl.innerHTML = ""
  console.log(response.data[0]);
  responseelement.appendChild(responseContainerEl)

  
  // Create a variable that will select the <div> where the GIF will be displayed
  // YOUR CODE HERE
  //
  // Empty out the <div> before we append a GIF to it
  // YOUR CODE HERE
  //
  var gifImg = document.createElement('img');
  gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
  // Append 'gifImg' to the <div>
  // YOUR CODE HERE
  //
})
}