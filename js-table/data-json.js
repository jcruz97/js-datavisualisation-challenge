
let table = document.getElementById("table2");
let json = []; // First row needs to be headers 
let headers =[];

for (let i = 0; i < table.rows[0].cells.length; i++) {
  headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /g,"");
}

// Go through cells 
  for (let i = 1; i < table.rows.length; i++) {

    let tableRow = table.rows[i];
    let rowData = {};

    for (let j = 1; j < tableRow.cells.length; j++) {
      rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }

    json.push(rowData);
    

  }

  console.log(json);    

// Map JSON values back to label array
let labels = json.map(function (element) {
    return element.country;
  });

    console.log(labels);
  
// Map JSON values back to values array
  let values = json.map(function (element) {
    return element["2007–09"];
  });

    console.log(values); 

let secondChart = BuildChart(labels, values);

