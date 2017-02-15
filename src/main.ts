

window.onload = () => {
    var c=document.getElementById("myCanvas") as HTMLCanvasElement;
var cxt=c.getContext("2d");
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75);




var cxt=c.getContext("2d");
var grd=cxt.createLinearGradient(50,50,175,50);
grd.addColorStop(0,"#FF0000");
grd.addColorStop(1,"#00FF00");
cxt.fillStyle=grd;
cxt.fillRect(0,90,175,50);




var ctx=c.getContext("2d");

ctx.font="20px Georgia";
ctx.fillText("央增",175,100);

ctx.font="30px Verdana";
// 创建渐变
var gradient=ctx.createLinearGradient(150,90,c.width,0);
//gradient.addColorStop("0","magenta");
//gradient.addColorStop("0.5","blue");
//gradient.addColorStop("1.0","red");
// 用渐变填色
ctx.fillStyle=gradient;
ctx.fillText("14081161",10,90);


var cxt=c.getContext("2d");
var img=new Image()
img.src="longmao.png"
cxt.drawImage(img,0,0)
//图片不会加上去

};