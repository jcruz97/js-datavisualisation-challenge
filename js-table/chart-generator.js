/*This function does what his name means, it selects a specific place in the DOM then create the canvas for our chart*/
function canvasPlacement(table, chart){

    let tableNest = document.querySelector(table);
    
    let chartCanvas = document.createElement("canvas");
    chartCanvas.setAttribute("id", chart);
    chartCanvas.setAttribute( "width", "850");
    chartCanvas.setAttribute("height","650");
    tableNest.before(chartCanvas);
  
}

canvasPlacement("#bodyContent", "chartAjax");
canvasPlacement("#table1", "chartOne"); // Canvas for the first line chart
canvasPlacement("#table2", "chartTwo"); // Canvas for the second bar chart


function chartOne(numberOfChart){
    
    var ctx = document.getElementById(numberOfChart).getContext("2d");

    var newChart = new Chart(ctx, {

        type: "line",
        data: {

        labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012], // Our labels
        datasets: [
            {
            label : "Belgium",
            data : [1,2,3,3],
            backgroundColor: 'yellow',
            borderColor:'blue'
            }
         ]
        },

        options: {
            responsive: false,
            title:{
                display: true,
                text: "Offences recorded in each country per year"
            } 
        }

    });
    return newChart;
    
}

/*We placed our two table charts under these functions for more readability*/

function chartTwo(labels, valuesOne, valuesTwo, numberOfChart){
    
    var ctx = document.getElementById(numberOfChart).getContext("2d");

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