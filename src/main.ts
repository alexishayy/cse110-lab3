import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();

// create our shape
const rx = 80; //radius x
const ry = 40; //radius y
const tipSize = 12;
const tipWidth = 14;

const lemonX = stage.width() * .75;
const lemonY = stage.height() * .25;

const lemonGroup = new Konva.Group({
    x: lemonX,
    y: lemonY,
    draggable: true
});

const lemonBody = new Konva.Ellipse({
  x: 0,
  y: 0,
  radiusX: rx,
  radiusY: ry,
  fill: 'yellow',
  stroke: 'yellow',
  strokeWidth: 4
});

const leftTip = new Konva.Line({
    points: [
        -rx, -tipWidth /2,
        -rx - tipSize, 0,
        -rx, tipWidth /2
    ],
    fill: "yellow",
    stroke: "yellow",
    strokeWidth: 4,
    closed: true
});

const rightTip = new Konva.Line({
    points: [
        rx, -tipWidth /2,
        rx + tipSize, 0,
        rx, tipWidth /2
    ],
    fill: "yellow",
    stroke: "yellow",
    strokeWidth: 4,
    closed: true
});



// add the shape to the layer
lemonGroup.add(lemonBody);
lemonGroup.add(leftTip);
lemonGroup.add(rightTip);

// add the layer to the stage
layer.add(lemonGroup);
stage.add(layer);

lemonGroup.on('mouseover', () => {
    stage.container().style.cursor = 'pointer';
});

lemonGroup.on('mouseout', () => {
    stage.container().style.cursor = 'default';
});

const normal = 1;
const bigger = 1.1;

lemonGroup.on('mousedown touchstart', () => {
    lemonGroup.to({
        scaleX: bigger,
        scaleY: bigger,
        duration: 0.1,
    });
});

lemonGroup.on('mouseup touchen dragend', () => {
    lemonGroup.to({
        scaleX: normal,
        scaleY: normal,
        duration: 0.1,
    });
});