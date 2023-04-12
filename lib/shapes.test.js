const shapes = require('./shapes');
const Triangle = shapes.Triangle;
const Square = shapes.Square;
const Circle = shapes.Circle;

describe('shapes', () => {
    // Test that a circle is rendered correctly given a particular color
    describe('render Circle', () => {
        it('should return <circle cx="150" cy="100" r="80" fill="blue" /> when color is set to blue', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
    // Test that a triangle is rendered correctly given a particular color
    describe('render Triangle', () => {
        it('should return <polygon points="150, 18 244, 182 56, 182" fill="blue" /> when color is set to blue', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    // Test that a square is rendered correctly given a particular color
    describe('render Square', () => {
        it('should return <rect x="75" y="35" width="150" height="150" fill="blue" /> when color is set to blue', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="75" y="35" width="150" height="150" fill="blue" />');
        });
    });
    // Test that the Circle text is rendered correctly given a particular text color and text
    describe('render Circle text', () => {
        it('should return <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text> when shape is Circle, text color is white, and text is SVG', () => {
            const shape = new Circle();
            shape.setTextColor("white");
            shape.setText("SVG");
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });
    });
    // Test that the Triangle text is rendered correctly given a particular text color and text
    describe('render Triangle text', () => {
        it('should return <text x="150" y="170" font-size="60" text-anchor="middle" fill="white">SVG</text> when shape is Triangle, text color is white, and text is SVG', () => {
            const shape = new Triangle();
            shape.setTextColor("white");
            shape.setText("SVG");
            expect(shape.renderText()).toEqual('<text x="150" y="170" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });
    });
    // Test that the Square text is rendered correctly given a particular text color and text
    describe('render Square text', () => {
        it('should return <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text> when shape is Circle, text color is white, and text is SVG', () => {
            const shape = new Square();
            shape.setTextColor("white");
            shape.setText("SVG");
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });
    });
});
