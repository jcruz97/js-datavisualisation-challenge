function canvasPlacement(table, chart){

    let tableNest = document.querySelector(table);
    
    let chartCanvas = document.createElement("canvas");
    chartCanvas.setAttribute("id", chart);
    chartCanvas.setAttribute( "width", "850");
    chartCanvas.setAttribute("height","650");
    tableNest.before(chartCanvas);
  
}

canvasPlacement("#table1", "chartOne")
canvasPlacement("#table2", "chartTwo");


function BuildChart(labels, valuesOne, valuesTwo, numberOfChart){
    
    var ctx = document.getElementById(numberOfChart).getContext('2d');

    var newChart = new Chart(ctx, {

        type: "bar",
        data: {

        labels: labels, // Our labels
        datasets: [
            {
            label: "2007–09", // Name the series
            data: valuesOne, // Our values
            backgroundColor: "#FFCC00", 
            },

            {
            label : "2010–12",
            data : valuesTwo,
            backgroundColor: "#003399",
            }
         ]

        },

        options: {
            responsive: false,
            title:{
                display: true,
                text: "Prison population, in average per 100,000 inhabitants in each E.U country"
            } 
        }

    });
    return newChart;
    
}




