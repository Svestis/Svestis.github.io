function monthDiff(d) {
    var months;
    var today = new Date();
    months = (today.getFullYear() - d.getFullYear()) * 12;
    months -= d.getMonth();
    months += today.getMonth();
    return months <= 0 ? 0 : months;
}

function years() {
    var d = new Date('01' + 'September 2014');
    first = d.getFullYear();

    second = new Date().getFullYear();

    arr = Array();
    for (i = first; i <= second; i++) arr.push(i);
    console.log(arr);
}

// Bar Chart Main Page
Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.legend.display = false;


var canvasElement = document.getElementById("chart-cont").getContext('2d');

var config = {
    type: "bar",
    data: {
        labels: ["Data Management", "Data Analysis", "Data Viz", "Python", "SQL"],
        datasets: [{
            data: [Math.round((monthDiff(new Date(2016, 10, 31)) / 12) * 2) / 2, Math.round((monthDiff(new Date(2016, 10, 31)) / 12) * 2) / 2, Math.round((monthDiff(new Date(2016, 10, 31)) / 12) * 2) / 2, Math.round((monthDiff(new Date(2015, 6, 30)) / 12) * 2) / 2, Math.round((monthDiff(new Date(2017, 12, 31)) / 12) * 2) / 2],
            backgroundColor: ['rgb(220,233,255)', 'rgb(184, 201, 238)', 'rgb(207,255,242)', 'rgb(255,231,232)', 'rgb(255,249,203)'],
            borderColor: ['rgb(88,155,229)', 'rgb(80, 100, 137)', 'rgb(73,207,180)', 'rgb(255,132,144)', 'rgb(250,235,0)'],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'top',
                offset: 5
            }
        }],
    },
    plugins: [ChartDataLabels],
    options: {
        gridlines: {
            display: false,
        },
        scales: {
            yAxis: {
                display: false,
                ticks: {
                    display: false,
                },
            },
        },
        plugins: {
            subtitle: {
                display: true,
                text: 'years of experience',
                padding: 10
            },
        },
    }
};

var chart = new Chart(canvasElement, config);

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});