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
    document.getElementById("vtf-img1").style.opacity = "1";
    document.getElementById("head1").style.opacity = "1";
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
    document.getElementById('new1_min').textContent = "";
    document.getElementById('new1_small').textContent = "";
    document.getElementById('new1_close').textContent = "";
}


function vtfDiscription() {
    document.getElementById("vtf-image").style.height = "100%";
    document.getElementById("vtf-dis").style.height = "100%";
    document.getElementById("exit").style.display = "block";
    document.getElementById("vtf-dis").style.zIndex = "4";
    document.getElementById("hide").style.opacity = "1";
    document.getElementById("close-arrow").style.rotate = "45deg";
    document.getElementById("close-arrow").style.opacity = "1";
    document.getElementById("close-arrow2").style.rotate = "135deg";
    document.getElementById("owasp-exit").style.display = "none";
    document.getElementById("close-arrow2").style.opacity = "1";
}

function owaspDiscription() {
    document.getElementById("owaspdisimage").style.height = "100%";
    document.getElementById("owaspdiscon").style.height = "100%";
    document.getElementById("owaspClose").style.rotate = "135deg";
    document.getElementById("owaspClose2").style.rotate = "45deg";
    document.getElementById("owaspClose").style.opacity = "1";
    document.getElementById("owaspClose2").style.opacity = "1";
    document.getElementById("owaspImg").style.opacity = "1";
    document.getElementById("owasp-exit").style.zIndex = "4";
    document.getElementById("owasphide").style.opacity = "1";
}

function owaspExit() {
    document.getElementById("owaspdisimage").style.height = "0%";
    document.getElementById("owaspdiscon").style.height = "0%";
    document.getElementById("owaspClose2").style.rotate = "90deg";
    document.getElementById("owaspClose2").style.opacity = "0";
    document.getElementById("owaspClose").style.rotate = "0deg";
    document.getElementById("owaspClose").style.opacity = "0";
    document.getElementById("owaspImg").style.opacity = "0";
    document.getElementById("owasp-exit").style.zIndex = "-100";
    document.getElementById("owasphide").style.opacity = "0";
}


function h1Discription() {
    document.getElementById("h1-modal").style.display = "block";
}

function closeM() {
    document.getElementById("vtf-modal").style.display = "none";
    document.getElementById("owasp-modal").style.display = "none";
    document.getElementById("h1-modal").style.display = "none";
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
window.onclick = function(event) {
    var h1 = document.getElementById("h1-modal");
    if (event.target == h1) {
        h1.style.display = "none";
    }
}   


function new1_funClose() {
    document.getElementById("new1_close").textContent = "x";
}

function new1_funSmall() {
    document.getElementById("new1_small").textContent = "-";
}

function new1_funMin() {
    document.getElementById("new1_min").textContent = "+";
}

function outOWASP() {
    document.getElementById("owasp-head").style.backgroundColor = "rgb(52, 45, 45)";
}

function displayAbout() {
    document.getElementById("about-effect").style.width = "100%";
}
function closevtf() {
    document.getElementById("vtf-dis").style.height = "0%";
    document.getElementById("vtf-image").style.height = "0%";
    document.getElementById("close-arrow").style.rotate = "90deg";
    document.getElementById("close-arrow").style.opacity = "0";
    document.getElementById("close-arrow2").style.rotate = "0deg";
    document.getElementById("close-arrow2").style.opacity = "0";
    document.getElementById("hide").style.opacity = "0";
    document.getElementById("vtf-dis").style.zIndex = "-4";
    document.getElementById("vtf-img1").style.opacity = "0";
    document.getElementById("head1").style.opacity = "0";
    document.getElementById("owasp-exit").style.display = "block";
}

