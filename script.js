const container = document.getElementById('divWrapper');
let divRow = document.getElementsByClassName('gridRow');
let divCell = document.getElementsByClassName('gridCell');

function createGrid(rowNum, cellNum){
    makeRows(rowNum);
    makeCollumns(cellNum);
}

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
            divRow[j].appendChild(newCell).className = "gridCell"
        }
    }
}

createGrid(16, 16)