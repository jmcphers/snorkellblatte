const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
const snorkell = "UTMJIZPYOBQKDSAWGCXNEFRLHVutmjizpyobqkdsawgcxnefrlhv";

let translate = function() {
    let english = document.getElementById("english");
    let spoken = document.getElementById("spoken");
    let written = document.getElementById("written");
    let before = english.value;
    let after = "";
    let glyphs = "";
    for (let i = 0; i < before.length; i++) {
        let ch = before.charAt(i);
        let idx = alpha.indexOf(ch);
        if (idx >= 0) {
            after += snorkell.charAt(idx);
            glyphs += "<img src='img/snorkellblatte-" + ch.toLowerCase() + ".png'/>"
        } else {
            if (ch === "<") {
                glyphs += "&lt;"
            }
            else if (ch === ">") {
                glyphs += "&gt;"
            }
            else if (ch === "&") {
                glyphs += "amp;"
            }
            else if (ch === ' ') {
                glyphs += "&nbsp;&nbsp;&nbsp;"
            } else {
                glyphs += ch;
            }
            after += ch;
        }
    }
    written.innerHTML = glyphs;
    spoken.innerText = after;
}

window.addEventListener('DOMContentLoaded', (event) => {
    let english = document.getElementById("english");
    english.addEventListener('keyup', (ev) => {
        translate();
    });
    english.addEventListener('change', (ev) => {
        translate();
    });
});