let searchButton = document.querySelector("#search");
let searchResults = [];
const contentGrid = document.querySelector('#content');
// let text = document.querySelector("#word").value;

var queryURLbase = "https://api.edamam.com/search?&app_id=4f451f51&app_key=387850cddf507fd1511ceb99baf5ce00&from=0&to=9&q=";

var userInput;
var from=0;
var to=9;

function testAjax(queryURL) {
	fetch(queryURL)
	.then((resp) => resp.json())
	.then((data) => {
		searchResults = data.hits;
        useApiData(data);
    });
};
// Add event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
    console.log("button pressed");
    userInput = document.querySelector("#word").value.trim().toLowerCase();
    var searchURL = queryURLbase + userInput;
    testAjax(searchURL);
});

// an asynchronous function to fetch data from the API
// async function sendApiRequest() {
//     let APP_ID = "4f451f51";
//     let API_KEY = "387850cddf507fd1511ceb99baf5ce00";
//     let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
//     console.log(response);
//     let data = await response.json()
//     console.log(data);
//     superHeros = data.hits;
//     useApiData(data);
// }

// function that displays the data received from the api.
function useApiData(data) {
    let allCardsDom = '';
    for (let i = 0; i<searchResults.length; i++){
        const cardTemplate = `
        <div class="card" style="width: 18rem; padding: 0">
            <img src="${searchResults[i].recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${searchResults[i].recipe.label}</h5>
                <p class="card-text">Recipe Source: ${searchResults[i].recipe.source}</p>
                <p class="card-text">Cuisine Type: ${searchResults[i].recipe.cuisineType}</p>
                <a href="${searchResults[i].recipe.url}" class="btn btn-primary">Click to check it out!</a>
            </div>
        </div>
        `;
        allCardsDom += cardTemplate;
    };
    contentGrid.innerHTML = allCardsDom;
};