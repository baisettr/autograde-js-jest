function checkValidScore(score) {
    if (score === undefined || typeof score !== 'number' || isNaN(score)) return false;
    return true;
}
function checkValidDesc(desc) {
    let alphaNumeric = /^[a-z0-9 _-]+$/i;   //alphaNumeric = /^([a-zA-Z0-9 _-]+)$/
    return alphaNumeric.test(desc);
}

module.exports = function wrap(desc, score, testFunc) {
    if (!checkValidDesc(desc)) {
        throw new Error("Invalid Description, Use only alphanumeric, spaces, - , _");
    };
    if (!checkValidScore(score)) {
        throw new Error("Invalid Score, Should be a number");
    };
    let ques = { desc, score };
    let tesDesc = JSON.stringify(ques);
    return test(tesDesc, testFunc);
}


