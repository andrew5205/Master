// floodFill

// Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a
// certain color. We change the image as if we painted a canvas: a two-dimensional array of integers,
// where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of
// our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X
// dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element
// array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)!
// Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent
// via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.
// Given canvas2D of [ [3,2,3,4,3],
// [2,3,3,4,0],
// [7,3,3,5,3],
// [6,5,3,4,1],
// [1,2,3,3,3] ]
// …plus startXY of [2,2] and newColor of 1 ...
// … we examine the cells that are directly (not diagonally) adjacent to startXY, which is[2,2]. If any
// have a value of 3 (the original value at startXY), we change its value to 1 (newColor) and repeat the
// process with its directly-adjacent neighbor cells. We repeat this until the entire zone of similarly-colored
// cells is changed.
// Our canvas2D becomes: [ [3,2,1,4,3],
// [2,1,1,4,0],
// [7,1,1,5,3],
// [6,5,1,4,1],
// [1,2,1,1,1] ]







function floodFill(canvas, y, x, newColor) {
    original = canvas[y][x]; // Save the original color before changing it!
    canvas[y][x] = newColor; // Change to newColor

    if (x + 1 < canvas[y].length && canvas[y][x + 1] == original) { // Right
        floodFill(canvas, y, x + 1, newColor);
    }
    if (y + 1 < canvas.length && canvas[y + 1][x] == original) { // Down
        floodFill(canvas, y + 1, x, newColor);
    }
    if (x - 1 >= 0 && canvas[y][x - 1] == original) { // Left
        floodFill(canvas, y, x - 1, newColor);
    }
    if (y - 1 >= 0 && canvas[y - 1][x] == original) { // Up
        floodFill(canvas, y - 1, x, newColor);
    }
    return;
}

canvas = [
    [1, 1, 1, 1, 1, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 2, 2],
    [2, 2, 3, 3, 3, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 2, 2],
    [2, 2, 3, 3, 3, 1, 2, 2],
    [2, 2, 3, 3, 3, 1, 2, 2],
    [2, 2, 3, 3, 3, 1, 2, 2],
    [2, 2, 3, 3, 3, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 2, 2],
]

  // Print the Canvas

output = "";

for (var i = 0; i < canvas.length; ++i) {
    for (var j = 0; j < canvas[i].length; ++j) {
        output += canvas[i][j];
    }
    output += "\n";
}

console.log(output);

floodFill(canvas, 1, 1, 3);

output = "";

for (var i = 0; i < canvas.length; ++i) {
    for (var j = 0; j < canvas[i].length; ++j) {
        output += canvas[i][j];
    }
    output += "\n";
}

console.log(output);
