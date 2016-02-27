$(document).ready(function() {
gridWidth = 2;
gridHeight = 1;
countX = 1;
countY = 1;
originalWidth = 996;
originalHeight = 996;
newWidth = (996 - (2+2*gridWidth))/(gridWidth);
newHeight = (996 - (2+2*gridHeight))/(gridHeight);




$("div.wrapper").append("<div class='grid'></div>");

$(".grid").height(newHeight);
$(".grid").width(newWidth);

});