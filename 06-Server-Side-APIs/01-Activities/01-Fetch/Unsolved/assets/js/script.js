// Write a fetch request to the Giphy API
// Then log the response in the console


            fetch("https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN")
            .then(response => response.json())
            .then(data => console.log(data));

		
      