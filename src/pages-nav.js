function showContentInfos() {
    hide('slides');
    deactivate_button('slides-button');
    hide('live');
    deactivate_button('live-button');
    show('content-infos');
    activate_button('infos-button');
}
function showSlides() {
    hide('live');
    deactivate_button('live-button');
    hide('content-infos');
    deactivate_button('infos-button');
    show('slides');
    activate_button('slides-button');
}
function showLive() {
    hide('slides');
    deactivate_button('slides-button');
    hide('content-infos');
    deactivate_button('infos-button');
    show('live');
    activate_button('live-button');
}

//"infos-button" "slides-button" "live-button"

function deactivate_button(id) {
    var el = document.getElementById(id);
    if (el) {
        el.classList.remove("active");
    }
}

function activate_button(id) {
    var el = document.getElementById(id);
    if (el) {
        el.classList.add("active");
    }
}

function hide(id) {
    var el = document.getElementById(id);
    if (el && el.style.visibility != 'none') {
        el.style.display = 'none';
    }
}

function show(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = null;
    }
}