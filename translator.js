const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
const snorkell = "UTMJIZPXOBQKDSAWGCXNEFRLHVutmjizpxobqkdsawgcxnefrlhv";

let translate = function() {
    let english = document.getElementById("english");
    let spoken = document.getElementById("spoken");
    let before = english.value;
    let after = "";
    for (let i = 0; i <= before.length; i++) {
        let ch = before.charAt(i);
        let idx = alpha.indexOf(ch);
        if (idx > 0) {
            after += snorkell.charAt(idx);
        } else {
            after += ch;
        }
    }
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