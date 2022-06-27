var i=0;    

function typingAboutHeader() {
    var text = "Life can be wild sometimes, so here are some wild cards about my life!";
    if(i < text.length) {
        document.getElementById("header-info").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingAboutHeader, 100);
    }
}

setTimeout(function typingAboutSubheader() {
    var text = "Click to flip.";
    if(i<text.length) {
        document.getElementById("subheader-info").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingAboutSubheader, 100);
    }
}, 8000);

typingAboutHeader();


const cards = document.querySelectorAll(".card__inner");

for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener("click", function (e) {
        cards[i].classList.toggle('is-flipped');
      });
}
