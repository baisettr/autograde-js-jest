const read = require('read-directory');
const jsonfile = require('jsonfile');

const file = './source/inputQueries.json'

function readQueries() {
    return new Promise((resolve, reject) => {
        read('./source/sqlfiles', function (err, contents) {
            //console.log(contents);
            jsonfile.writeFile(file, contents)
                .then(res => resolve(true))
                .catch(error => reject(error));
        })
    })
}

readQueries().then((e) => console.log('success')).catch((e) => console.log(e));