const wrapper = require('./wrap');
const capitalize = require('./index');


const testFuncPass = () => {
    expect(typeof capitalize).toEqual('function');
}
wrapper('helloPass', 1, testFuncPass);


const testFuncError = () => {
    expect(typeof capitalize).toEqual('Number');
}
wrapper('helloError', 2, testFuncError);



for (let i = 0; i < 10; i++) {
    wrapper('helloPass' + i, i, testFuncPass);
    wrapper('helloError' + i, i, testFuncError);

}


/* wrapper('hello1', 3, () => {
    expect(typeof capitalize).toEqual('Object');
});

wrapper('hello3', 1, () => {
    expect(typeof capitalize).toEqual('Number');
}) */