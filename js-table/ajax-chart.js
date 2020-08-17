let ajaxRequest = new XMLHttpRequest();


/*This is our main ajax request to have the data from the JSON file for the chart*/

ajaxRequest.addEventListener("load", function() {

    if (this.status == 200) {

        let response = JSON.parse(this.responseText);
        
        let labelsJax = response.map(function (e){
            return e[0];
        });

        let valuesJax = response.map(function (e){
            return e[1];
        });

        chartJax(labelsJax, valuesJax);

    }
});

/*The most important part as the request is called and then send to the page, without it the chart won't work*/
ajaxRequest.open("GET","https://canvasjs.com/services/data/datapoints.php");
ajaxRequest.send();


function chartJax(labels, values){

let ctx = document.getElementById("chartAjax").getContext("2d");

let ajChart = new Chart(ctx, {

    type: "line",
    data: {

        labels: labels, // Our labels
        datasets: [
            {
            label: "Raw Data", // Name the series
            data: values, // Our values
            backgroundColor: "#FFCC00", 
            },
         ]

        },

    options: {
        responsive: false,
        title:{
            display: true,
            text: "Some JSON data"
        } 
    }

});
}

function fetchdata(){
    $.ajax({
     url: 'fetch_details.php',
     type: 'post',
     success: function(data){
      // Perform operation on return value
      alert(data);
     },
     complete:function(data){
      setTimeout(fetchdata,5000);
     }
    });
   }
   
   $(document).ready(function(){
    setTimeout(fetchdata,5000);
   });