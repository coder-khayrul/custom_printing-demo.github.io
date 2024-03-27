//intro preloader handler

let single_elements = document.querySelectorAll(".intro_element");
let intro_preloader = document.querySelector(".intro_preloader");
let preloader_close = document.querySelector(".intro_close");


preloader_close.addEventListener("click", () => {
    intro_preloader.classList.add("hide")
})

// Function to show single elements one by one with a delay
function showElementsWithDelay() {
    let index = 0;
    const interval = setInterval(() => {
        // Show current element
        single_elements[index].style.display = "flex";
        // Hide the previously shown element
        if (index > 0) {
            single_elements[index - 1].style.display = "none";
        }
        index++;
        // If all elements have been displayed, clear the interval
        if (index >= single_elements.length) {
            clearInterval(interval);
        }
    }, 1000); // 1 minute delay

    // Show the last element after the loop ends
    setTimeout(() => {
        single_elements[single_elements.length - 1].style.display = "flex";
    }, single_elements.length * 1000);
}


// Call the function to start showing elements after 1 minute
setTimeout(showElementsWithDelay, 0);
const intro_preloader_handler = () => {

    intro_preloader.classList.add("show");
    setTimeout(() => {
        intro_preloader.classList.remove("show");
    }, 8000);
}

// window.addEventListener("load", intro_preloader_handler);