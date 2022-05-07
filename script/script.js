let searchButton = document.querySelector("#search");
let searchResults = [];
const contentGrid = document.querySelector('#content');
var queryURLbase = "https://api.edamam.com/search?&app_id=4f451f51&app_key=387850cddf507fd1511ceb99baf5ce00&q=";
var userInput;
var favItems = [];
let favButton = document.querySelector("add-favorite");

// function to fetch data from the API
function sendApiRequest(queryURL) {
	fetch(queryURL)
	.then((resp) => resp.json())
	.then((data) => {
		searchResults = data.hits; 
        console.log(data);
        displayApiData();
    });
};

// Add event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
    console.log("button pressed");
    //get user input
    userInput = document.querySelector("#word").value.trim().toLowerCase();
    //add to query url 
    var searchURL = queryURLbase + userInput;
    //send request to search for user input
    sendApiRequest(searchURL);
});

// function that displays the data received from the api.
function displayApiData() {
    let allCardsDom = '';
    for (let i = 0; i<searchResults.length; i++){
        const cardTemplate = `
        <div class="card" style="width: 18rem; padding: 0">
            <img src="${searchResults[i].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${searchResults[i].recipe.label}</h5>
                <p class="card-text">Recipe Source: ${searchResults[i].recipe.source}</p>
                <p class="card-text">Cuisine Type: ${searchResults[i].recipe.cuisineType}</p>
                <a href="${searchResults[i].recipe.url}" class="btn btn-primary" style="background-color: gray; border-color:gray; margin: 2px">Click to check it out!</a>
                <a id="add-favorite" class="btn btn-primary" href="favorite2.html" style="background-color: gray; border-color:gray; margin: 2px">Add to Favorites</a>
            </div>
        </div>
        `;
        allCardsDom += cardTemplate;
    };
    contentGrid.innerHTML = allCardsDom;
};


favButton.addEventListener("click", () => {
    console.log("button pressed");
    
    
});
