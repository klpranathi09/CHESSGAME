const button = document.getElementById("btn");
button.addEventListener('click', play());
var queen = {
    position: {
        row: 0,
        column: 0
    },
    direction: 'S'
};



function moveQueen(direction, steps) {
    var temp;
    var temp1;

    switch (direction) {
        case 'S':
            temp = queen.position.row + steps;
            if (temp > 8 || temp < 0) {
                console.log("Out of Boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.row = temp;
            }
            break;
        case 'N':
            temp = queen.position.row - steps;
            if (temp > 8 || temp < 0) {
                console.log("Out of Boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.row = temp;
            }
            break;
        case 'E':
            temp = queen.position.column + steps;
            if (temp > 8 || temp < 0) {
                console.log("Out of Boundary");
                document.write("Out of Boundary");
            } else {
                queen.position.column = temp;
            }

            case 'W':
                temp = queen.position.column - steps;
                if (temp > 8 || temp < 0) {
                    console.log("Out of Boundary");
                    document.write("Out of Boundary");
                } else {
                    queen.position.column = temp;
                }
                break;
            case 'NE':
                temp = queen.position.row - steps;
                temp1 = queen.position.column + steps;
                if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
                    console.log("Out of Boundary");
                    document.write("Out of Boundary");
                } else {
                    queen.position.row = temp;
                    queen.position.column = temp1;

                }
                break;

            case 'NW':
                temp = queen.position.row - steps;
                temp1 = queen.position.column - steps;
                if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
                    console.log("Out of Boundary");
                    document.write("Out of Boundary");
                } else {
                    queen.position.row = temp;
                    queen.position.column = temp1;

                }
                break;
            case 'SE':
                temp = queen.position.row + steps;
                temp1 = queen.position.column + steps;
                if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
                    console.log("Out of Boundary");
                    document.write("Out of Boundary");
                } else {
                    queen.position.row = temp;
                    queen.position.column = temp1;

                }
                break;
            case 'SW':
                temp = queen.position.row + steps;
                temp1 = queen.position.column - steps;
                if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
                    console.log("Out of Boundary");
                    document.write("Out of Boundary");
                } else {
                    queen.position.row = temp;
                    queen.position.column = temp1;

                }
                break;
            default:
                document.write("Invalid Input");

    }

    function play() {
        var value = document.getElementById("pos").value;
        var input = value.split(" ");
        input.array.forEach(num => {
            let number = Number(num.slice(num.length - 1));
            let dir = num.slice(0, num.length - 1);
            moveQueen(direction, steps);

        });
        console.log("Queen current position is " + board[queen.position.row, queen.position.column]);
    }


}