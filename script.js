const mainBox = document.querySelector(".main-box");
const tyBox = document.querySelector(".ty-box");
const submitButton = document.getElementById("submit");
const ratingSpan = document.getElementById("rating-span");
const rates = document.querySelectorAll(".number");

submitButton.addEventListener("click", submitRate);

function submitRate(){
    tyBox.classList.remove("hidden");
    mainBox.style.display = "none";
}

rates.forEach((rate) => {
    rate.addEventListener("click", addRatingSpan);

    function addRatingSpan(){
        ratingSpan.innerHTML = rate.innerHTML;
    }
})
