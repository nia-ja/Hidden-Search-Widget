// Select the entire search container
const search = document.querySelector(".search");
// Select input field
const input = document.querySelector(".input");
// Select search button element
const searchBtn = document.querySelector(".btn");
// Select icon on search button element
const searchIcon = document.querySelector(".fa-search");
// Select the entire HTML document
const html = document.querySelector("html");


// Event Listeners
// Toggle active class on click
searchBtn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
})

// Remove active class from the element when clicking outside of the input and search button
html.addEventListener("click", (e) => {
    if (e.target !== input && e.target !== searchIcon && e.target !== searchBtn) {
            search.classList.remove("active");
    }
})