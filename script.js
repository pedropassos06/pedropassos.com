var i=0;
var text;
text = "Hi! I am Pedro Passos.";

function typingHeader() {
    if(i<text.length) {
        document.getElementById("welcome-message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingHeader, 100);
    }
}