const addinator = function(value1, value2){
    if(!value2) {
        value2 = 0;
    }
    return parseFloat(value1) + parseFloat(value2);
}



module.exports = addinator;