//Selecting elements from HTML files
const menuBtn = document.querySelectorAll(".menu");
const meals = document.querySelector(".meal-container");


// Creating arrays to store meal data
const imgs = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg"];
const mealNames = ["Buttermilk Pancakes", "Diner Double", "Godzilla Milkshake", "Country Delight", "Egg Attack", "Oreo Dream"];
const mealInfo = {"img1.jpeg": "$15.99",
"img2.jpeg": "$13.99",
"img3.jpeg": "$6.99",
"img4.jpeg": "$20.99",
"img5.jpeg": "$22.99",
"img6.jpeg": "$18.99"}
//const imgText = {img1.jpg:img1, "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"}
const mealDesc =[" deliciously buttery and fluffy with golden, crisp edges and an irresistible buttermilk flavour",
""];

// looping through imgs array and displaying images to webpage
for(let i = 0; i < imgs.length; i++){
const showImages = document.createElement("img");
const mealNameP = document.createElement("p")
const priceDisplay = document.createElement("p")
const showDescP = document.createElement("p")
showImages.setAttribute("src", "images/" + imgs[i])
const price = mealInfo[imgs[i]]
const mealName = mealNames[i]
const showDesc = mealDesc[i]

//showImages.setAttribute("alt", "imgs")
priceDisplay.textContent = price
mealNameP.textContent = mealName
showDescP.textContent = showDesc
meals.appendChild(showImages)
meals.appendChild(priceDisplay)
meals.appendChild(mealNameP)
meals.appendChild(showDescP)
}

