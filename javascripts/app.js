// ======================
//Intro
// ======================
var rover = {
	direction: 'N',
	position: [0, 0],
};
console.log('Rovers direction is: ' + rover.direction);
console.log('Rovers position is: ' + rover.position);
console.log('======================');
// ======================

//Matrix 
// ======================
function createMatrix(columns, rows) {
	var matrix = [];
	for (var i = 0; i < columns; i++) {
		matrix[i] = new Array(rows);
	}
	return matrix;
}
var myGrid = createMatrix(10, 10);
console.log(myGrid);
var travelLog = [];
// ======================

//TurnRight
// ======================
function turnRight() {
	console.log('turnRight was called!');
	switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'N';
			break;
	}

	console.log(rover);
}
// ======================

//TurnLeft
// ======================
function turnLeft() {
	console.log('turnLeft was called!');

	switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'N';
			break;
	}
	console.log(rover);
}
// ======================

//Turning
// ======================
function turning() {
	switch (turn) {
		case 'left':
			turnLeft();
			break;

		case 'right':
			turnRight();
			break;
	}

	RegisterTravelLogTurn();
}
// ======================

//moveForward
// ======================
function moveForward() {
	console.log('moveForward was called');

	switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] - 1;
			break;

		case 'E':
			rover.position[1] = rover.position[1] + 1;
			break;

		case 'S':
			rover.position[0] = rover.position[0] + 1;
			break;

		case 'W':
			rover.position[1] = rover.position[1] - 1;
			break;
	}

	oops('forward');

	console.log(rover);
}
// ======================

//moveBackwards
// ======================
function moveBackwards() {
	console.log('moveBackwards was called');

	switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] + 1;
			break;

		case 'E':
			rover.position[1] = rover.position[1] - 1;
			break;

		case 'S':
			rover.position[0] = rover.position[0] - 1;
			break;

		case 'W':
			rover.position[1] = rover.position[1] + 1;
			break;
	}

	oops('backwards');

	console.log(rover);
}
// ======================

//Border
// ======================
function oops(movement) {
	if (rover.position[0] < 0 || rover.position[0] >= 10) {
		console.log('Oops! your reached the border' + movement);
		rover.position[0] = 0;
	}
	if (rover.position[1] < 0) {
		console.log('Oops! your reached the border' + movement);
		rover.position[1] = 0;
	} else {
		RegisterTravelLogMovement();
	}
}

function RegisterTravelLogMovement() {
	travelLog.push(
		'Rover moved Forward, Rovers position is: ' + rover.position
	);
}

function RegisterTravelLogTurn() {
	travelLog.push(
		'Rover turned ' +
			turn +
			'Rovers direction is: ' +
			rover.direction
	);
}
// ======================

//Input commands
// ======================
function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'b':
				moveBackwards();
				break;

			case 'f':
				moveForward();
				break;

			case 'r':
				turn = 'right';
				turning();
				break;

			case 'l':
				turn = 'left';
				turning();
				break;
		}
	}
}
// ======================

// ======================
commands('rffrfflfrff');
console.log(travelLog);
console.log(rover);
myGrid[rover.position[0]][rover.position[1]] = 'rover';
console.log(myGrid);
// ======================
//The End

