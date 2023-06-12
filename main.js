//Selecting elements from HTML files
const menuBtn = document.querySelectorAll(".menu");
const meals = document.querySelector(".meal-container");
const showMeals = document.querySelector("#showMeals")
const basketItems = document.querySelector(".dropdown-menu")
const pay = document.querySelector("payButton")
showMeals.addEventListener("click", displayAll)

// Creating arrays to store meal data
const imgs = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg"];
const imgText = ["Image of buttermilk Pancakes", "Image of diner Double", "Image of godzilla Milkshake", "Image of country Delight", "Image of egg Attack", "Image of oreo Dream"]
const mealNames = ["Buttermilk Pancakes", "Diner Double", "Godzilla Milkshake", "Country Delight", "Egg Attack", "Oreo Dream"];
const mealInfo = [
 "$15.99",
 "$13.99",
"$6.99",
"$20.99",
"$22.99",
"$18.99"]
const mealDesc =[
"Deliciously buttery and fluffy with golden, crisp edges and an irresistible buttermilk flavour",
"Good old fashioned hamburger, no fancy toppings, no exotic meat or bun, just the best juicy burger you’ve been craving",
"The premium milkshake that shakes your day off... Comes in various flavours of your choice",
"Full English breakfasts contain: sausages, back bacon, eggs, tomatoes, mushrooms, fried bread, and beans",
"Fried egg, thickly-cut bacon and cheddar cheese smothered over your famous single or double all-beef patties",
"Blended Cream cheese and Hot Fudge Oreo in a milkshake, sounds like a dream"
];

let meal1 = []
let meal2 = []
let meal3 = []
let meal4 = []
let meal5 = []
let meal6 = []
// looping through imgs array and displaying images to webpage
function itemsToBasket(e){
    e.preventDefault;
    const styles = e.currentTarget.classList
    if (styles.contains("additem0")){
        const basketList = document.createElement("li")
        basketList.setAttribute ("class", "lists")
        basketList.innerHTML += "Buttermilk Pancakes"
        basketItems.appendChild(basketList)
        console.log(basketList)
    }
    else if (styles.contains("additem1")){
        const basketList = document.createElement("li")
        basketList.setAttribute ("class", "lists")
        basketList.innerHTML += "Diner Double"
        basketItems.appendChild(basketList)
        console.log(basketList)
    }
    else if (styles.contains("additem2")){
        const basketList = document.createElement("li")
        basketList.setAttribute ("class", "lists")
        basketList.innerHTML += "Godzilla Milkshake"
        basketItems.appendChild(basketList)
        console.log(basketList)
    }
    else if (styles.contains("additem3")){
        const basketList = document.createElement("li")
        basketList.setAttribute ("class", "lists")
        basketList.innerHTML += "Country Delight"
        basketItems.appendChild(basketList)
        console.log(basketList)
    }
    else if (styles.contains("additem4")){
        const basketList = document.createElement("li")
        basketList.setAttribute ("class", "lists")
        basketList.innerHTML += "Egg Attack"
        basketItems.appendChild(basketList)
        console.log(basketList)
    }
    else {
        const basketList = document.createElement("li")
        basketList.setAttribute ("class", "lists")
        basketList.innerHTML += "Oreo Dream"
        basketItems.appendChild(basketList)
        console.log(basketList)
    }

}
function displayAll(){
    showMeals.style.visibility ="hidden"
    meals.innerHTML = ""
    for(let i = 0; i < imgs.length; i++){
    const infoSec = document.createElement("section")
    infoSec.setAttribute("class", "infoSection")
    const mealNameP = document.createElement("p")
    const priceDisplay = document.createElement("p")
    const showDescP = document.createElement("p")
    const addbtn = document.createElement("button")
    addbtn.setAttribute("class", "additem" + `${i}`)
    addbtn.innerHTML = "+"
    console.log(addbtn)
    
    const showImages = document.createElement("img");
    showImages.setAttribute("src", "images/" + imgs[i])
    showImages.setAttribute("alt", `${imgText[i]}`)
    const price = mealInfo[i]
    const mealName = mealNames[i]
    const showDesc = mealDesc[i]
    
    priceDisplay.textContent = price
    mealNameP.textContent = mealName
    showDescP.textContent = showDesc
    
    
    infoSec.appendChild(showImages)
    infoSec.appendChild(mealNameP)
    infoSec.appendChild(priceDisplay)
    infoSec.appendChild(showDescP)
    infoSec.appendChild(addbtn)
    meals.appendChild(infoSec)
    
    
  addbtn.addEventListener("click", itemsToBasket) 
  //pay.addEventListener("click", function(){basketItems.removeChild(basketList)})
    
}}

    function displayBreakFast(){
        showMeals.style.visibility ="hidden"
        meals.innerHTML = ""
        for(let i = 0; i < 4; i++){
        if (i == 0 || i == 3) {
        const infoSec = document.createElement("section")
        infoSec.setAttribute("class", "infoSection")
        const mealNameP = document.createElement("p")
        const priceDisplay = document.createElement("p")
        const showDescP = document.createElement("p")
        const addbtn = document.createElement("button")
    addbtn.setAttribute("class", "additem" + `${i}`)
    addbtn.innerHTML = "+"
      
        const showImages = document.createElement("img");
        showImages.setAttribute("src", "images/" + imgs[i])
        showImages.setAttribute("alt", `${imgText[i]}`)
        console.log(showImages)
        const price = mealInfo[i]
        const mealName = mealNames[i]
        const showDesc = mealDesc[i]
        console.log(price)
        priceDisplay.textContent = price
        mealNameP.textContent = mealName
        showDescP.textContent = showDesc
        
        
        infoSec.appendChild(showImages)
        infoSec.appendChild(mealNameP)
        infoSec.appendChild(priceDisplay)
        infoSec.appendChild(showDescP)
        infoSec.appendChild(addbtn)
        meals.appendChild(infoSec)
     
        addbtn.addEventListener("click", itemsToBasket) 
        
        
        }}}

        function displayLunch(){
            showMeals.style.visibility ="hidden"
            meals.innerHTML = ""
            for(let i = 0; i < imgs.length; i++){
            if (i == 1 || i == 4){
            const infoSec = document.createElement("section")
            infoSec.setAttribute("class", "infoSection")
            const mealNameP = document.createElement("p")
            const priceDisplay = document.createElement("p")
            const showDescP = document.createElement("p")
            const addbtn = document.createElement("button")
    addbtn.setAttribute("class", "additem" + `${i}`)
    addbtn.innerHTML = "+" 

            const showImages = document.createElement("img");
            showImages.setAttribute("src", "images/" + imgs[i])
            showImages.setAttribute("alt", `${imgText[i]}`)
            const price = mealInfo[i]
            const mealName = mealNames[i]
            const showDesc = mealDesc[i]
            
            priceDisplay.textContent = price
            mealNameP.textContent = mealName
            showDescP.textContent = showDesc
            
            
            infoSec.appendChild(showImages)
            infoSec.appendChild(mealNameP)
            infoSec.appendChild(priceDisplay)
            infoSec.appendChild(showDescP)
            infoSec.appendChild(addbtn)
            meals.appendChild(infoSec)
            
            addbtn.addEventListener("click", itemsToBasket) 
            
            
            }}}

            function displayShakes(){
                showMeals.style.visibility ="hidden"
                meals.innerHTML = ""
                for(let i = 0; i < imgs.length; i++){
                    if (i == 2 || i == 5){
                const infoSec = document.createElement("section")
                infoSec.setAttribute("class", "infoSection")
                const mealNameP = document.createElement("p")
                const priceDisplay = document.createElement("p")
                const showDescP = document.createElement("p")
                const addbtn = document.createElement("button")
    addbtn.setAttribute("class", "additem" + `${i}`)
    addbtn.innerHTML = "+"
                
                const showImages = document.createElement("img");
                showImages.setAttribute("src", "images/" + imgs[i])
                showImages.setAttribute("alt", `${imgText[i]}`)
                const price = mealInfo[i]
                const mealName = mealNames[i]
                const showDesc = mealDesc[i]
                
                priceDisplay.textContent = price
                mealNameP.textContent = mealName
                showDescP.textContent = showDesc
                
                
                infoSec.appendChild(showImages)
                infoSec.appendChild(mealNameP)
                infoSec.appendChild(priceDisplay)
                infoSec.appendChild(showDescP)
                infoSec.appendChild(addbtn)
                meals.appendChild(infoSec)
                
                addbtn.addEventListener("click", itemsToBasket) 
                
                
                }}}
    



menuBtn.forEach(function(btn){
btn.addEventListener("click", function(e){
    e.preventDefault;
    const styles = e.currentTarget.classList
    if (styles.contains("all")){
       return displayAll()
    } else if (
        styles.contains("breakfast")){
           return displayBreakFast()       
    }

    else if (
        styles.contains("lunch")){
           return displayLunch()       
    }
    else {return displayShakes() }
})
}
    
);

