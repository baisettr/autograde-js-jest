module.exports = function wrap(desc, score, testFunc) {
    let ques = { desc, score };
    let tesDesc = JSON.stringify(ques);
    return test(tesDesc, testFunc);
}
