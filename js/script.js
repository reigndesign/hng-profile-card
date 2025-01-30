function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function formatTime(date) {
    var hours   = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
    var minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()

    return hours + ':' + minutes
}