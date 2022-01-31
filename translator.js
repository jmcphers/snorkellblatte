const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
const snorkell = "UTMJIZPYOBQKDSAWGCXNEFRLHVutmjizpyobqkdsawgcxnefrlhv";

let translate = function() {
    let english = document.getElementById("english");
    let spoken = document.getElementById("spoken");
    let written = document.getElementById("written");
    let before = english.value;
    let after = "";
    let glyphs = "";
    let source = "";
    let dest = "";
    if (document.getElementById("r-english").checked) {
        source = snorkell;
        dest = alpha;
    } else {
        source = alpha;
        dest = snorkell;
    }
    for (let i = 0; i < before.length; i++) {
        let ch = before.charAt(i);
        let idx = source.indexOf(ch);
        if (idx >= 0) {
            after += dest.charAt(idx);
            glyphs += "<img src='img/snorkellblatte-" + ch.toLowerCase() + ".png'/>"
        } else {
            if (ch === "<") {
                glyphs += "&lt;"
            } else if (ch === ">") {
                glyphs += "&gt;"
            } else if (ch === "&") {
                glyphs += "amp;"
            } else if (ch === "\n") {
                glyphs += "<br />"
            } else if (ch === "\r") {
                glyphs += "<br />"
            } else if (ch === ' ') {
                glyphs += "&nbsp;&nbsp;&nbsp;"
            } else {
                glyphs += ch;
            }
            after += ch;
        }
    }
    written.innerHTML = glyphs;
    spoken.innerText = after;
    let full = document.getElementById("full");
    full.style.display = "none";
    after = document.getElementById("after");
    after.style.display = "block";

    // add history entry so that you can use back to return to translation page
    window.history.pushState({}, '')
}

window.addEventListener('DOMContentLoaded', (event) => {
    let btn = document.getElementById("translate");
    btn.addEventListener("click", (evt) => {
        translate();
    });
    window.addEventListener("popstate", (evt) => {
        let after = document.getElementById("after");
        after.style.display = "none";
        let full = document.getElementById("full");
        full.style.display = "flex";
    });
});
