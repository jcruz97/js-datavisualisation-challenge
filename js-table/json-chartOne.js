let tableOneId = document.getElementById("table1");
let jsonOne = []; // First row needs to be headers 
let headersOne =[];

let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

for (let i = 0; i < tableOneId.rows[1].cells.length; i++) {
  headersOne[i] = tableOneId.rows[1].cells[i].innerHTML.toLowerCase();
}

for (let i = 2; i < tableOneId.rows.length; i++) {

    let tableRow = tableOneId.rows[i];
    let rowData = {};

    for (let j = 1; j < tableRow.cells.length; j++) {
      rowData[headersOne[j]] = tableRow.cells[j].innerHTML.replace(/\s+/g," ").replace(/<br>/g,"");
    }

    jsonOne.push(rowData);
}


let labelsOne = jsonOne.map(function (element) {
    element["country"] = element[""];
    return element.country;
});

  /*let values = jsonOne[0];
  let valuesOne = Object.values(values);
  valuesOne.splice(11, 2);*/
  
for (let i=0; i<jsonOne.length; i++){
  return jsonOne[i];
}
  

  
  
  /*for (let element in jsonOne){
    let values = jsonOne[element];
    let valuesOne = Object.values(values);

    console.log(valuesOne);
  }*/

//console.log(jsonOne[0]);

let firstChart = chartOne("chartOne");






