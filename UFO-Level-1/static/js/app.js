// Assign the data from data.js
var ufoData = data;

/* Assign Search button (Id) and form (Classes) from html 
    - Listen to the event on webpage
*/

var search_button = d3.select("#filter-btn");
search_button.on('click', filterTable);

function filterTable(){
    var date=d3.select('#datetime').property('value');
    var city=d3.select('#select-city').property('value');

    var filterCase = 0
    date != "" && city == ""? console.log("Null"): console.log("NOt Null: ",date);
    city == "" ? console.log("Null"): console.log("NOt Null: ",city);

    var filteredData=ufoData;

    if (date != "" && city == "-Select City-") {
        filteredData=filteredData.filter(data=>data.datetime==date);
        showTable(filteredData);
    } else if (date != "" && city != "-Select City-") {
        console.log("date not null and city is : ", city);
        filteredData=filteredData.filter(data=>data.datetime==date && data.city==city);
        showTable(filteredData);

    };
    
};
/* Show filter data in html
    - Select table body
    - Clear table body in html
    - for each data[i] - add table row
    - Add each table row[i] - add data
*/
function showTable(data) {
    var tbody=d3.select('tbody');
    tbody.html('');
    data.forEach(i=>{
        // <tr>
        //  <td>datetime</td>
        //  <td>city</td>
        // </tr>
        var row=tbody.append('tr');
        // row return <tr>...</tr>
        var values=Object.values(i);
        values.forEach(value=>{
            var cell=row.append('td');
            cell.text(value);
        });
    });
};

showTable(ufoData);

/* Dropdown Functions
    - Collect data for dropdown list
    - Assign unique value into dropdown list
    - Embeded int html
*/

function onlyUnique(value, index, self){
    return self.indexOf(value) === index;
};

function cityCollection(data){
    
    var cities = data.map(d=> d.city);
    var cityDropdown = cities.filter(onlyUnique);
    var selectCity = d3.select('#select-city');

    cityDropdown.forEach(i=>{
        var cell = selectCity.append('option');
        // console.log("Print Cell: ",cell)
        cell.text(i);
    });
};
function stateCollection(data){
    
    var states = data.map(d=> d.state);
    var stateDropdown = states.filter(onlyUnique);
    var selectState = d3.select('#select-state');

    stateDropdown.forEach(i=>{
        var cell = selectState.append('option');
        cell.text(i);
    });
};

function countryCollection(data){
    
    var countries = data.map(d=> d.country);
    var countryDropdown = countries.filter(onlyUnique);
    var selectCountry = d3.select('#select-country');

    countryDropdown.forEach(i=>{
        var cell = selectCountry.append('option');
        cell.text(i);
    });
};

function shapeCollection(data){
    
    var shapes = data.map(d=> d.shape);
    var shapeDropdown = shapes.filter(onlyUnique);
    var selectShape = d3.select('#select-shape');

    shapeDropdown.forEach(i=>{
        var cell = selectShape.append('option');
        cell.text(i);
    });
};
   
cityCollection(ufoData);
stateCollection(ufoData);
countryCollection(ufoData);
shapeCollection(ufoData);


