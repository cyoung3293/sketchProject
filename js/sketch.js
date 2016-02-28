$(document).ready(function() {

gridWidth = prompt("Please enter grid width.", "16");
gridHeight = prompt("Please enter grid height.", "16");

countX = 1;
countY = 1;

newWidth = (500 - (2+2*gridWidth))/(gridWidth);
newHeight = (500 - (2+2*gridHeight))/(gridHeight);

initializer = [];
while (countY <= (gridHeight-1)) {
	if (countY === 1) {
	initializer.push("<div class='clear'></div><div class='initializer grid top'></div><div class='clear'></div>")
	countY += 1;
     }
     else {
     	initializer.push("<div class='initializer grid'></div><div class='clear'></div>")
	countY += 1;
     }
}
$.each(initializer, function(i, val) {
	$("div.wrapper").append(val)
})

row = [];
while (countX <= (gridWidth-1)) {
	row.push("<div class='grid'></div>");
	countX += 1;
}




$.each(row, function(i, val) {
	$("div.initializer").after(val);
});

$(".grid").height(newHeight);
$(".grid").width(newWidth);


$(".grid").mouseenter(function() {
	$(this).css("background-color","red");
});



});