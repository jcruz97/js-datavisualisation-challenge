function canvasPlacement(table, chart){

    let tableNest = document.querySelector(table);
    
    let chartCanvas = document.createElement("canvas");
    chartCanvas.setAttribute("id", chart);
    chartCanvas.setAttribute( "width", "850");
    chartCanvas.setAttribute("height","650");
    tableNest.before(chartCanvas);
  
}

canvasPlacement("#table2", "chartOne");


function BuildChart(labels, values){
    
    var ctx = document.getElementById("chartOne").getContext('2d');

    var newChart = new Chart(ctx, {
        type: "bar",
        data: {
        labels: labels, // Our labels
        datasets: [{
            label: labels, // Name the series
            data: values, // Our values
            }]
        },

        options: {
            responsive: false, 
        }

    });
    return newChart;
    
}




