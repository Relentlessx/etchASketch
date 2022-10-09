const container = document.getElementById('divWrapper');
let divRow = document.getElementsByClassName('gridRow');
let btn = document.getElementById('canvasSize');


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

function makeCollumns(cellNum){
    for (i = 0; i < divRow.length; i++){
        for (j = 0; j < cellNum; j++){
            let newCell = document.createElement("div");
            divRow[j].appendChild(newCell).className = "gridCell";
            newCell.addEventListener('mouseover', function(){
                newCell.setAttribute('style','background-color:blue;');
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
    rowNum = prompt();
    cellNum = rowNum;
    createGrid(rowNum, cellNum);``
})


let divCell = document.getElementsByClassName('gridCell');

