
//2019-10-12T11:27:43.692Z

module.exports.run = timeF => {

    var time = String(timeF);

    var dateArray = time.split('T');
    var date = dateArray[0].split('-');

    var year = date[0];
    var month = date[1];
    var day = date[2];

    return(`${day}/${month} ${year}`);
    // 12/10 2019
}
