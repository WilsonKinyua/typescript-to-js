function doSomething() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doSomething();

let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1,2,3,4,5];
const colorRed = 0;
const  colorBlue = 1;
const  colorYellow = 2;

enum color {
    Red,
    Blue,
    Green
}
let backgroundColor = color.Green;


let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternative = (message as string).endsWith('c');


//=============================normal function
let log = function (message) {
    console.log(message);
}

//=============================arrow function
let doLog = (message) => {
    console.log(message);
}

interface Point {
    x: number,
    y: number
}
let drawPoint = (point: Point) => {

}

drawPoint({
    x: 1,
    y: 3
});

class Point {
    constructor(private x?: number, private y?: number) {
    }
    draw ()  {
        console.log('X: ' + this.x, 'Y: ' + this.y);
    }
    get X() {
        return this.x;
    }
    set X(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0');
        this.x = value;
    }
}
let point = new Point(1,2);
let x = point.X;
point.X = 10;
point.draw();

import { Point } from './module';
let point = new Point(1,2);
point.draw();



//===============The facebook functionality quiz =========

import { LikeComponent } from "./like.component";

let component = new LikeComponent(10, true);
let x = component.onClick();
// console.log(x);
