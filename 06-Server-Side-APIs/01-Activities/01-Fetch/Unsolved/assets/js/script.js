// Write a fetch request to the Giphy API
// Then log the response in the console
let giphyAPI = "https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN";

		function setup(){

			fetch(giphyAPI)
			.then(response => {
				return response.json();
			})
			.then(json => {
				createImg(json.data[0].images.original.url);
			})
			.catch(err => console.log(err));

		}
      