const container = document.getElementById('divWrapper');
let divRow = document.getElementsByClassName('gridRow');
let btn = document.getElementById('canvasSize');
let btnReset = document.getElementById('resetButton');


// Clear HTML (to clear container)

function clearInner(){
    container.innerHTML = "";
}

// 

function createGrid(rowNum, cellNum){
    clearInner();
    makeRows(rowNum);
    makeCollumns(cellNum);
}

// Functions for making Rows and Collumns

function makeRows(rowNum){
    for(x = 0; x < rowNum; x++){
        let row = document.createElement('div');
        container.appendChild(row).className = "gridRow";
    }
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let color = random_rgba();

function makeCollumns(cellNum){
    for (i = 0; i < divRow.length; i++){
        for (j = 0; j < cellNum; j++){
            let newCell = document.createElement("div");
            divRow[j].appendChild(newCell).className = "gridCell";
            newCell.addEventListener('mouseover', function(){
                newCell.style.backgroundColor = color;
            })
        }
    }
}

// Create default 16x16 grid

let rowNumber = 16;
let cellNumber = 16;
let rowNum = rowNumber;
let cellNum = cellNumber;

createGrid(rowNum, cellNum);

// Create a grid defined by user input

btn.addEventListener('click', function(){
    rowNum = prompt('Set your canvas size! (numbers up to 100)');
    cellNum = rowNum;
    createGrid(rowNum, cellNum);``
})

btnReset.addEventListener('click', function(){
    location.reload();
})

let divCell = document.getElementsByClassName('gridCell');

