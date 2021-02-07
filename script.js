async function getItems(){
    const inputAreaText = document.getElementById("input-area").value;
    const apiKey = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputAreaText}`);
    const apiData = await apiKey.json();
    if(inputAreaText == apiData){
        alert("please insert a proper name");
    }else{
        // turned object into an array to use foreach
        // took help from w3schools
        Object.keys(apiData).forEach(data => {
            const foodItems = apiData[data];
            if(foodItems == null){
                alert("please insert a proper name");
            }else{
                foodItems.forEach(foodItem => {
                    const listContainer = document.getElementById("list-container");
                    const listItem = `
                    <li class="list-item" onclick="showDetails()">
                        <img class="food-img" src="${foodItem.strMealThumb}">
                        <h2>${foodItem.strMeal}</h2>
                    </li>`;
                    listContainer.innerHTML += listItem;
                    document.getElementById("input-area").value = "";
                })
            }
        }); 
    }
}

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", getItems);

async function showDetails(){
    const inputAreaText = document.getElementById("input-area").value;
    const apiKey = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputAreaText}`);
    const apiData = await apiKey.json();
    Object.keys(apiData).forEach(data =>{
        const foodItems = apiData[data];
        foodItems.forEach(foodItem => {
            const detailsContainer = document.getElementById("detailBox");
            detailsContainer.style.left = "0px";
            const detailItems = `
                <p>${foodItem.strIngredient1} ${foodItem.strMeasure1}</p>
                <p>${foodItem.strIngredient2} ${foodItem.strMeasure2}</p>
                <p>${foodItem.strIngredient3} ${foodItem.strMeasure3}</p>
                <p>${foodItem.strIngredient4} ${foodItem.strMeasure4}</p>
                <p>${foodItem.strIngredient5} ${foodItem.strMeasure5}</p>
                <p>${foodItem.strIngredient6} ${foodItem.strMeasure6}</p>
                <p>${foodItem.strIngredient7} ${foodItem.strMeasure7}</p>
                <p>${foodItem.strIngredient8} ${foodItem.strMeasure8}</p>
            `;
            detailsContainer.innerHTML += detailItems;
        })
    })
}

