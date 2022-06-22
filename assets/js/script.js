var recipeTitleEl = document.getElementById("title");
var ingredientEl = document.getElementById("ingredient");
var addIngredientEl = document.getElementById("add-ingredient");
var addInstructionsEl = document.getElementById("add-instructions");
var newRecipeEl = document.getElementById("new-recipe");
var savedRecipeEl = document.getElementById("saved-recipes");
var recipeCard;

function createNewRecipe() {
    recipeCard = document.createElement("div");
    savedRecipeEl.append(recipeCard);
    recipeCard.setAttribute("class", "col-sm-12 col-md-6 col-lg-4 card card-block");
}

function addIngredient() {

    
    var recipeTitle = document.createElement("h2");
    recipeCard.append(recipeTitle);
    recipeTitle.setAttribute("class", "card-title");
    recipeTitle.textContent = recipeTitleEl;

    var ingredientList = document.createElement("ul");
    recipeCard.append(ingredientList);

    var newIngredient = document.createElement("li");
    ingredientList.append(newIngredient);
    ingredientElList.textContent = ingredientEl;

    var instructions = document.createElement("p");
    recipeCard.append(instructions);
}


newRecipeEl.addEventListener("click", createNewRecipe);
addEl.addEventListener("click", addIngredient);

// The user enters their ingredient into the form and clicks Add.
// The ingredient is added to the recipe (a list).
// The user creates a new recipe.