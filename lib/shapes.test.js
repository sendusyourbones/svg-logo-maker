const shapes = require('./shapes');
const Triangle = shapes.Triangle;
const Square = shapes.Square;
const Circle = shapes.Circle;

describe('shapes', () => {
    // Test that a circle is rendered correctly given a particular color
    describe('Circle', () => {
        it('should return <circle cx="150" cy="100" r="80" fill="blue" /> when color is set to blue', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
    // Test that a triangle is rendered correctly given a particular color
    describe('Triangle', () => {
        it('should return <polygon points="150, 18 244, 182 56, 182" fill="blue" /> when color is set to blue', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    // Test that a square is rendered correctly given a particular color
    describe('Square', () => {
        it('should return <rect x="75" y="35" width="150" height="150" fill="blue" /> when color is set to blue', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="75" y="35" width="150" height="150" fill="blue" />');
        });
    });
});
