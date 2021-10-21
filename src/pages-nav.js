function showContentInfos() {
    hide('slides');
    hide('live');
    show('content-infos');
}
function showSlides() {
    hide('live');
    hide('content-infos');
    show('slides');
}
function showLive() {
    hide('slides');
    hide('content-infos');
    show('live');
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