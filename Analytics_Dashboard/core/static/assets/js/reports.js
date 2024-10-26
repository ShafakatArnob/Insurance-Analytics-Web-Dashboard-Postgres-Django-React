const dataTable = document.getElementById('data-table');

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

