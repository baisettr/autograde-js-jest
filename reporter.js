const fs = require('fs');
class MyCustomReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(contexts, results) {
        /* console.log('GlobalConfig: ', this._globalConfig);
        console.log('Options: ', this._options);
        console.log('Contexts', contexts); */
        //console.log('Results', results.testResults[0]["testResults"]);
        const testRes = results.testResults[0]["testResults"];

        const res = testRes.map(r => {
            let title = JSON.parse(r.title);
            return { desc: title.desc, score: title.score, status: r.status }

        });

        console.log(res);
        fs.writeFile('./results.json', JSON.stringify(res))
    }
}

module.exports = MyCustomReporter;


//--outputFile=data.json --json --noStackTrace