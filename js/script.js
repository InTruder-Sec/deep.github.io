function displayVtf() {
    document.getElementById("vtf-head").style.transition = "background 1s ease";
    document.getElementById("vtf-head").style.backgroundColor = "red";
}


function displayOwasp() {
    document.getElementById("owasp-head").style.transition = "background 1s ease";
    document.getElementById("owasp-head").style.backgroundColor = "blue";
}

function displayhacker() {
    document.getElementById("h1-head").style.transition = "background 1s ease";
    document.getElementById("h1-head").style.backgroundColor = "purple";
}

function out() {
    document.getElementById("vtf-head").style.transition = "background 1s ease";
    document.getElementById("vtf-head").style.backgroundColor = "rgb(52, 45, 45)";
    document.getElementById("owasp-head").style.transition = "background 1s ease";
    document.getElementById("owasp-head").style.backgroundColor = "rgb(52, 45, 45)";
    document.getElementById("h1-head").style.transition = "background 1s ease";
    document.getElementById("h1-head").style.backgroundColor = "rgb(52, 45, 45)";
}

function funClose() {
    document.getElementById("close").textContent = "x";
}

function funSmall() {
    document.getElementById("small").textContent = "-";
}

function funMin() {
    document.getElementById("min").textContent = "+";
}
function new_funClose() {
    document.getElementById("new_close").textContent = "x";
}

function new_funSmall() {
    document.getElementById("new_small").textContent = "-";
}

function new_funMin() {
    document.getElementById("new_min").textContent = "+";
}

function remove() {
    document.getElementById('close').textContent = "";
    document.getElementById('small').textContent = "";
    document.getElementById('min').textContent = "";
    document.getElementById('new_min').textContent = "";
    document.getElementById('new_small').textContent = "";
    document.getElementById('new_close').textContent = "";
}


function vtfDiscription() {
    document.getElementById("vtf-modal").style.display = "block";
}

function owaspDiscription() {
    document.getElementById("owasp-modal").style.display = "block";
}

function closeM() {
    document.getElementById("vtf-modal").style.display = "none";
    document.getElementById("owasp-modal").style.display = "none";
}

window.onclick = function(event) {
    const vtff = document.getElementsByClassName("vtf-modal");
    if (event.target == vtff) {
        vtff.style.display = "none";
    }
}

window.onclick = function(event) {
    var owasp = document.getElementById("owasp-modal");
    if (event.target == owasp) {
        owasp.style.display = "none";
    }
}     
