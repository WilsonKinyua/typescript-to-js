"use strict";
exports.__esModule = true;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var colorRed = 0;
var colorBlue = 1;
var colorYellow = 2;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 1] = "Blue";
    color[color["Green"] = 2] = "Green";
})(color || (color = {}));
var backgroundColor = color.Green;
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternative = message.endsWith('c');
//=============================normal function
var log = function (message) {
    console.log(message);
};
//=============================arrow function
var doLog = function (message) {
    console.log(message);
};
var drawPoint = function (point) {
};
drawPoint({
    x: 1,
    y: 3
});
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x, 'Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var x = point.X;
point.X = 10;
point.draw();
var point = new Point(1, 2);
point.draw();
//===============The facebook functionality quiz =========
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
var x = component.onClick();
// console.log(x);
