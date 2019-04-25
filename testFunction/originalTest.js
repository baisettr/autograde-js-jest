const capitalize = require('./index');
//console.log(test('xx', (a, b) => expect(true)));

let ques = { desc: "Capitalize is a function", score: 2 };

let tesDesc = JSON.stringify(ques);

test(tesDesc, () => {
  expect(typeof capitalize).toEqual('function');
});

ques = { desc: "capitalizes the first letter of every word in a sentence", score: 3 };
tesDesc = JSON.stringify(ques);

test(tesDesc, () => {
  expect(capitalize('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});


ques = { desc: "capitalizes the first letter", score: 3 };
tesDesc = JSON.stringify(ques);

test(tesDesc, () => {
  expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});

const wrap = (desc, score, testFunc) => {
  let ques = { desc, score };
  let tesDesc = JSON.stringify(ques);
  return test(tesDesc, testFunc);
}

const testFunc1 = () => {
  expect(typeof capitalize).toEqual('function');
}

wrap('hello', 2, testFunc1);
/* console.log(process.env.score);
let score = 2;
score = 3;
test(`capitalizes the first letter. Points: ${score}`, () => {
  expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
}); */
