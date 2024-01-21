v11 = document.getElementById('editline11')
v12 = document.getElementById('editline12')
v13 = document.getElementById('editline13')
v21 = document.getElementById('editline21')
v22 = document.getElementById('editline22')
v23 = document.getElementById('editline23')

function editvid11(){
    v11.currentTime = 0;
    v11.requestFullscreen()
}
v11.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement === v11) {
        v11.muted = false;
    } else {
        v11.muted = true;
    }
});
function editvid12(){
    v12.currentTime = 0;
    v12.requestFullscreen()
}
v12.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement === v12) {
        v12.muted = false;
    } else {
        v12.muted = true;
    }
});
function editvid13(){
    v13.currentTime = 0;
    v13.requestFullscreen()
}
v13.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement === v13) {
        v13.muted = false;
    } else {
        v13.muted = true;
    }
});
function editvid21(){
    v21.currentTime = 0;
    v21.requestFullscreen()
}
v21.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement === v21) {
        v21.muted = false;
    } else {
        v21.muted = true;
    }
});
function editvid22(){
    v22.currentTime = 0;
    v22.requestFullscreen()
}
v22.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement === v22) {
        v22.muted = false;
    } else {
        v22.muted = true;
    }
});
function editvid23(){
    v23.currentTime = 0;
    v23.requestFullscreen()
}
v23.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement === v23) {
        v23.muted = false;
    } else {
        v23.muted = true;
    }
});