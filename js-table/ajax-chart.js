let ajaxRequest = new XMLHttpRequest();

ajaxRequest.addEventListener("load", function() {
    if (this.status == 200) {

        let response = JSON.parse(this.responseText);
        
        let labels = response.map(function (e){
            return e[0];
        });

        let values = response.map(function (e){
            return e[1];
        });


        ajaxChart(labels, values, "chartAjax");
    }
});

ajaxRequest.open("GET","https://canvasjs.com/services/data/datapoints.php");
ajaxRequest.send();

