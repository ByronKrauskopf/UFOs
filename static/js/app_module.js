//import  data from data.js
const tableData = data;

//Reference the HTML table using D3
var tbody = d3.select('tbody');

//build function for table creation
function buildTable(data) {
    //clear table of any existing data
    tbody.html('');
    //loop through each object in the data
    data.forEach((dataRow) => {
        //append a row to the table body for each object
        let row = tbody.append('tr');
        //loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
            }
        );
    });
}

//function for date filtering
function handleClick() {
    //obtain datetime value form the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;
    //filter using date if value entered in filter
    if (date) {
        //apply filter to table data and retain only rows where data matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //rebuild table with filtered values
    buildTable(filteredData);
}

//event to listen for the form button
d3.selectAll('#filter-btn').on('click', handleClick);

//build table when page loads
buildTable(tableData);
