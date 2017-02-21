var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
window.onload = function () {
    var canvas = document.getElementById("app");
    var context2D = canvas.getContext("2d");
    var DEG = Math.PI / 180;
     /* cxt.fillStyle = "#FF0000";
    cxt.fillRect(0, 0, 150, 75);
    var cxt = c.getContext("2d");
    var grd = cxt.createLinearGradient(50, 50, 175, 50);
    grd.addColorStop(0, "#FF0000");
    grd.addColorStop(1, "#00FF00");
    cxt.fillStyle = grd;
    cxt.fillRect(0, 90, 175, 50);*/
    var stage = new DisplayObjectContainer();
    var img = new Bitmap();
    img.src = "image.jpg";
    img.scaleX = 0.5;
    img.transY = 10;
    img.alpha = 0.1;
    img.rotation = 45;
    var tf1 = new TextField();
    tf1.text = "Hello";
    tf1.transX = 0;
    tf1.alpha = 1;
    var tf2 = new TextField();
    tf2.text = "Hello";
    tf2.transX = 100;
    tf2.transY = 20;
    stage.addChild(img);
    stage.addChild(tf1);
    stage.addChild(tf2);
    //context2D.setTransform(1, 0, 0, 1, 0, 0);
    //stage.removechild(tf1);
    //context2D.save();
    setInterval(function () {
     
        context2D.setTransform(1, 0, 0, 1, 0, 0);
        context2D.clearRect(0, 0, canvas.width, canvas.height);
        tf1.transY++;
        img.transX++;
        stage.draw(context2D);
    }, 60);
    console.log(canvas);
};
var DisplayObject = (function () {
    function DisplayObject() {
        this.transX = 0;
        this.transY = 0;
        this.alpha = 1;
        this.globalAppha = 1;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;
    }
    DisplayObject.prototype.draw = function (context2D) {
        context2D.save();
        if (this.parent) {
            this.globalAppha = this.parent.globalAppha * this.alpha;
        }
        else {
            this.globalAppha = this.alpha;
        }
        context2D.globalAlpha = this.globalAppha;
        this.setMatrix();
        context2D.setTransform(this.globalMatrix.a, this.globalMatrix.b, this.globalMatrix.c, this.globalMatrix.d, this.globalMatrix.tx, this.globalMatrix.ty);
        this.render(context2D);
    };
    DisplayObject.prototype.render = function (context2D) {
    };
    DisplayObject.prototype.setMatrix = function () {
        this.localMatrix = new math.Matrix();
        this.localMatrix.updateFromDisplayObject(this.transX, this.transY, this.scaleX, this.scaleY, this.rotation);
        if (this.parent) {
            this.globalMatrix = math.matrixAppendMatrix(this.localMatrix, this.parent.globalMatrix);
        }
        else {
            this.globalMatrix = new math.Matrix(1, 0, 0, 1, 0, 0);
        }
    };
    return DisplayObject;
}());
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        var _this = _super.call(this) || this;
        //texture: string;
        _this._src = "";
        _this.isLoaded = false;
        _this.image = document.createElement('img');
        return _this;
        // this.image.src = ad;
        //this.isLoade = false;
    }
    Object.defineProperty(Bitmap.prototype, "src", {
        set: function (value) {
            this._src = value;
            this.isLoaded = false;
        },
        enumerable: true,
        configurable: true
    });
    Bitmap.prototype.render = function (context2D) {
        var _this = this;
        context2D.globalAlpha = this.alpha;
        if (this.isLoaded) {
            context2D.drawImage(this.image, 0, 0);
        }
        else {
            this.image.src = this._src;
            this.image.onload = function () {
                context2D.drawImage(_this.image, 0, 0);
                _this.isLoaded = true;
            };
        }
    };
    return Bitmap;
}(DisplayObject));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = "";
        _this.font = "Arial";
        _this.size = "40";
        return _this;
    }
    TextField.prototype.render = function (context2D) {
        context2D.font = this.size + "px " + this.font;
        context2D.fillText(this.text, 0, 0);
    };
    return TextField;
}(DisplayObject));
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.array = [];
        return _this;
    }
    DisplayObjectContainer.prototype.render = function (context2D) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var Drawable = _a[_i];
            Drawable.draw(context2D);
        }
    };
    DisplayObjectContainer.prototype.addChild = function (child) {
        if (this.array.indexOf(child) == -1) {
            this.array.push(child);
            child.parent = this;
        }
    };
    DisplayObjectContainer.prototype.removechild = function (child) {
        var index = this.array.indexOf(child);
        if (index > -1) {
            this.array.splice(index, 1);
        }
    };
    DisplayObjectContainer.prototype.removeall = function () {
        this.array = [];
    };
    return DisplayObjectContainer;
}(DisplayObject));
var Graphics = (function () {
    function Graphics() {
    }
    return Graphics;
}());
var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shape.prototype.draw = function (context2D) {
        context2D.fillRect(0, 0, 0, 0);
    };
    return Shape;
}(DisplayObject));
//# sourceMappingURL=main.js.map