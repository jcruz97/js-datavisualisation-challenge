let ajaxRequest = new XMLHttpRequest();

ajaxRequest.addEventListener("load", function() {
    if (this.status == 200) {

        let response = JSON.parse(this.responseText);
        
        for (let elements of response){
            let crimeData = [];
            crimeData.push(elements);
            console.log(crimeData);

        }
        
    }
});

ajaxRequest.open("GET","https://canvasjs.com/services/data/datapoints.php");
ajaxRequest.send();