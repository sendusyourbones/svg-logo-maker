// Shape class constructor
class Shape {
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

// Circle class constructor, inherits from Shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

// Triangle class constructor, inherits from Shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
    // Triangles need different y value for text
    renderText() {
        return `<text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

// Square class constructor, inherits from Shape
class Square extends Shape {
    render() {
        return `<rect x="75" y="35" width="150" height="150" fill="${this.shapeColor}" />`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};
