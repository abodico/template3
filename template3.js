let nums = document.querySelectorAll(".stats .nums");
let stats = document.querySelector(".stats");
let started = false;
function count(el) {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == el.dataset.goal)
        { clearInterval(counter); }
    },( 2000/goal) );
};
let skills = document.querySelector(".our-skills");
let mySpans = document.querySelectorAll(".progress span");
    window.onscroll = function () {
        if (window.scrollY >=( stats.offsetTop-200) && !(started)) {
            started = true;
            document.querySelectorAll(".stats .nums").forEach(num => { count(num); });
        };
        if (window.scrollY >= skills.offsetTop - 100)
        {
            mySpans.forEach(el => {
                el.style.width = el.dataset.width;
            });
        }
    };