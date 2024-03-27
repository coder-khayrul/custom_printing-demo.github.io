//intro preloader handler

let single_elements = document.querySelectorAll(".intro_element");
let intro_preloader = document.querySelector(".intro_preloader");
let preloader_close = document.querySelector(".intro_close");

//preloader handler function


preloader_close.addEventListener("click", () => {
    intro_preloader.classList.add("hide")
})

// Function to show single elements one by one 
function showElementsWithDelay() {
    let index = 0;
    const interval = setInterval(() => {
   
        single_elements[index].style.display = "flex";
   
        if (index > 0) {
            single_elements[index - 1].style.display = "none";
        }
        index++;
      
        if (index >= single_elements.length) {
            clearInterval(interval);
        }
    }, 1000); 


    setTimeout(() => {
        single_elements[single_elements.length - 1].style.display = "flex";
    }, single_elements.length * 1000);
}


setTimeout(showElementsWithDelay, 0);
const intro_preloader_handler = () => {

    intro_preloader.classList.add("show");
    setTimeout(() => {
        intro_preloader.classList.remove("show");
    }, 15000);
}
window.addEventListener("load", intro_preloader_handler)
