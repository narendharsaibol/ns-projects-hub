console.log("NS Projects Hub Loaded");
function scrollToEEE(){
    document.getElementById("eee").scrollIntoView({
        behavior:"smooth"
    });
}

function scrollToCS(){
    document.getElementById("cs").scrollIntoView({
        behavior:"smooth"
    });
}
window.addEventListener("scroll", reveal);

function reveal(){

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        section.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");
        }
    });
}
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const speed = 100;

        const increment =
        target / speed;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText =
            target + "+";
        }
    };

    updateCounter();
});
for(let i = 0; i < 40; i++){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.animationDuration =
    (10 + Math.random() * 10) + "s";

    particle.style.animationDelay =
    Math.random() * 5 + "s";

    document
    .getElementById("particles")
    .appendChild(particle);
}
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"
    });
});
window.addEventListener("scroll", () => {

    let scrollTop =
    document.documentElement.scrollTop;

    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
    .style.width = progress + "%";
});
const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const searchText =
    searchInput.value.toLowerCase();

    const cards =
    document.querySelectorAll(".searchable");

    cards.forEach(card => {

        const text =
        card.innerText.toLowerCase();

        if(text.includes(searchText)){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }

    });

});