const totalViewChart = document.getElementById('total-views-chart');
const revenueChart = document.getElementById('revenue-chart');
const subscriberCountChart = document.getElementById('subscriber-count-chart');
const trafficSourcesChart = document.getElementById('traffic-sources-chart');
const dataTable = document.getElementById('data-table');


fetch('/api/total-views')
.then(res => res.json())
.then(data => {
    const estimatedTotalViewChart = new Chart(totalViewChart, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: '# of Votes',
                data: data.data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
})


const estimatedRevenueChart = new Chart(revenueChart, {
    type: 'line',
    data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
            label: '# of Votes',
            data: [545, 512, 897, 974, 464, 347],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

const estimatedSubscriberCountChart = new Chart(subscriberCountChart, {
    type: 'line',
    data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
            label: '# of Votes',
            data: [545, 512, 897, 974, 464, 347],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

const estimatedTrafficSourcesChart = new Chart(trafficSourcesChart, {
    type: 'pie',
    data: {
        labels: ['Youtube', 'Facebook', 'Snapchat', 'Google', 'Firefox', 'Opera'],
        datasets: [{
            label: '# share',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

//simple-data-table
const myDataTable = new simpleDatatables.DataTable(dataTable, {
    searchable: true,
    fixedHeight: true,
    data: {
        headings: ["Video Title", "Published Date", "Views Count"],
    }
});

myDataTable.rows.add([
    ["top 10 best movies of 2021", "2021-08-12", "12545"],
    ["top 10 best songs of 2021", "2021-09-12", "32545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
    ["top 10 best arts of 2021", "2021-08-12", "22545"],
]);

