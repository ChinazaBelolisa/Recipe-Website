let searchbutton = document.querySelector("#search");
let breakfastGrid = document.querySelector("#breakfast-grid");
let breakfast = "";


 

searchbutton.addEventListener("click", ()=>{
    console.log("button pressed")
    var searchInput = document.querySelector("#search-input").value.trim().toLowerCase();
    sendRequest(searchInput)
})

async function sendRequest(search){
    let APP_ID = "4b648fd5";
    let APP_KEY = "f82a6b4f6e78af5624f3ffdc9723f9c6";
    let query_URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=`;
    let API_URL = query_URL + search
    // console.log(API_URL);
    // fetch(API_URL).then(response => response.json())
    // .then(data => console.log(data));
    let response = await fetch(API_URL);
    // console.log(response)
    console.log("he");
    let data = await response.json();
    breakfast = data.hits;
    APIData();
}

function APIData(){
    let allCard = '';
    for(var i= 0; i< breakfast.length;i++)
    {
        console.log(breakfast[i].recipe.mealType)
        if (breakfast[i].recipe.mealType == "lunch/dinner")
        {
            const cardTemplate =
            `<div class="col">
                    <div class="card">
                        <img src="${breakfast[i].recipe.image}"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${breakfast[i].recipe.label}</h5> <br>
                            <p class="card-text"><a href="${breakfast[i].recipe.url}">${breakfast[i].recipe.url}</a></p>
                        </div>
                    </div>
            </div>`;
            allCard += cardTemplate;
        }
    
    };
    breakfastGrid.innerHTML = allCard;
    
};