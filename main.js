//Selecting elements from HTML files
const menuBtn = document.querySelectorAll(".menu");
const meals = document.querySelector(".meal-container");


// Creating arrays to store meal data
const imgs = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg"];
const imgText = ["Image of buttermilk Pancakes", "Image of diner Double", "Image of godzilla Milkshake", "Image of country Delight", "Image of egg Attack", "Image of oreo Dream"]
const mealNames = ["Buttermilk Pancakes", "Diner Double", "Godzilla Milkshake", "Country Delight", "Egg Attack", "Oreo Dream"];
const mealInfo = {
"img1.jpeg": "$15.99",
"img2.jpeg": "$13.99",
"img3.jpeg": "$6.99",
"img4.jpeg": "$20.99",
"img5.jpeg": "$22.99",
"img6.jpeg": "$18.99"}
const mealDesc =[
"Deliciously buttery and fluffy with golden, crisp edges and an irresistible buttermilk flavour",
"Good old fashioned hamburger, no fancy toppings, no exotic meat or bun, just the best juicy burger you’ve been craving",
"The premium milkshake that shakes your day off... Comes in various flavours of your choice",
"Full English breakfasts contain: sausages, back bacon, eggs, tomatoes, mushrooms, fried bread, and beans",
"Fried egg, thickly-cut bacon and cheddar cheese smothered over your famous single or double all-beef patties",
"Blended Cream cheese and Hot Fudge Oreo in a milkshake, sounds like a dream"
];

// looping through imgs array and displaying images to webpage
for(let i = 0; i < imgs.length; i++){
const infoSec = document.createElement("section")
infoSec.setAttribute("class", "infoSection")
const mealNameP = document.createElement("p")
const priceDisplay = document.createElement("p")
const showDescP = document.createElement("p")

const showImages = document.createElement("img");
showImages.setAttribute("src", "images/" + imgs[i])
showImages.setAttribute("alt", `${imgText[i]}`)
const price = mealInfo[imgs[i]]
const mealName = mealNames[i]
const showDesc = mealDesc[i]

priceDisplay.textContent = price
mealNameP.textContent = mealName
showDescP.textContent = showDesc

infoSec.appendChild(showImages)
infoSec.appendChild(mealNameP)
infoSec.appendChild(priceDisplay)
infoSec.appendChild(showDescP)

meals.appendChild(infoSec)
}

