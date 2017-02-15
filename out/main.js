window.onload = function () {
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    cxt.fillStyle = "#FF0000";
    cxt.fillRect(0, 0, 150, 75);
    var cxt = c.getContext("2d");
    var grd = cxt.createLinearGradient(50, 50, 175, 50);
    grd.addColorStop(0, "#FF0000");
    grd.addColorStop(1, "#00FF00");
    cxt.fillStyle = grd;
    cxt.fillRect(0, 90, 175, 50);
};
