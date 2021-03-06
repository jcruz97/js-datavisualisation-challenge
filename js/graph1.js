//Canvas creation with attributes
let canvas = document.createElement('canvas');
canvas.setAttribute("id", "canvas");
canvas.setAttribute("width", 1000);
canvas.setAttribute("height", 500);

//Fetching table1 from the DOM
let table1 = document.getElementById('table1');

//Positioning the Canvas before the table
table1.before(canvas); 

//Chart creation in de canvas
createChart();
function randomColor(){
    return Math.floor(Math.random()*256)
}

function createChart(){
    let ctx = document.getElementById('canvas').getContext('2d');
    let labelValue= [];
    let datasetsValue = [];
        for (let i = 1; i < table1.rows.length; i++) {
        let country = {
            label:table1.rows[i].cells[1].textContent,
            borderColor: `rgb(${randomColor()},${randomColor()},${randomColor()})`,
            borderWidth: 2,
            hidden: i>4,
            data:[]
        }
        for (let j = 1; j < table1.rows[i].cells.length; j++) {
            if (i==1){
                labelValue.push(table1.rows[i].cells[j].textContent);
            }else {
                if(j>1){
            country.data.push(table1.rows[i].cells[j].textContent.replace(",","."));   
            }
        }
        }
        if (i>1){
        datasetsValue.push(country);
        }
    }

    let data = {
        //x value : year
        labels : labelValue,
        // y value : Offences recorded by the police in thousands
        datasets :datasetsValue
       
    };
    let options ={};
    
    // chart configuration
    let config = {
        type: 'line',
        data: data,
        options: options
    }
    // instanciating graph1
    let graph1 = new Chart (ctx, config);
    console.log(datasetsValue);
}