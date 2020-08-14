let tableOneId = document.getElementById("table1");
let jsonOne = []; // First row needs to be headers 
let headersOne =[];

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

    
function yearData(year){
    let values = jsonOne.map(function (element) {
        return element[year];
    });
    console.log(values);
}

{
    label : labels,
    data : values,
    backgroundColor: "#003399",
}





let firstChart = chartOne(labelsOne, "chartOne");

console.log(jsonOne);  
console.log(labelsOne);
yearData("2002");
yearData("2003");
yearData("2004");
yearData("2005");
yearData("2006");
yearData("2007");
yearData("2008");
yearData("2009");
yearData("2010");
yearData("2011");
yearData("2012");






