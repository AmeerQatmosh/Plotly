// Sample data
var dates = ['2024-07-01', '2024-07-02', '2024-07-03'];
var values = [10, 15, 20];
var ids = ['id1', 'id2', 'id3'];

var data = [{
    x: dates,
    y: values,
    text: ids,  // Custom data (IDs)
    type: 'bar'
}];

var layout = {
    title: 'Bar Chart with Click Events',
    xaxis: { title: 'Date' },
    yaxis: { title: 'Value' }
};

Plotly.newPlot('chart', data, layout);


var chart = document.getElementById('chart');

chart.on('plotly_click', function(data) {
    if(data.points) {
        var point = data.points[0];
        var date = point.x;
        var value = point.y;
        var id = point.text; // Custom data (ID)

        console.log('Clicked on bar with date:', date);
        console.log('Value:', value);
        console.log('ID:', id);
    }
});



  