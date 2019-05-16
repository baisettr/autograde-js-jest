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
        let testExecutionError = results.testResults[0]["testExecError"] ? results.testResults[0]["testExecError"].message : "";
        const testRes = results.testResults[0]["testResults"];
        let totalScore = 0;
        const testOutput = testRes.map(r => {
            let title = JSON.parse(r.title);
            totalScore += r.status === "passed" ? title.score : 0;

            const individual = {
                score: r.status === "passed" ? title.score : 0,
                max_score: title.score,
                desc: title.desc,
                output: r.status
            }
            return individual
        });


        //console.log(res);
        const finalOutput = {
            score: totalScore,
            testExecutionError,
            execution_time: new Date().getTime() - results.startTime,
            tests: testOutput
        }
        fs.writeFile('./results/results.json', JSON.stringify(finalOutput))
    }
}

module.exports = MyCustomReporter;


//--outputFile=data.json --json --noStackTrace

/* let ref = {
    "score": 44.0, // optional, but required if not on each test case below. Overrides total of tests if specified.
    "execution_time": 136, // optional, seconds
    "output": "Text relevant to the entire submission", // optional
    "visibility": "after_due_date", // Optional visibility setting
    "stdout_visibility": "visible", // Optional stdout visibility setting
    "extra_data": {}, // Optional extra data to be stored
    "tests": // Optional, but required if no top-level score
        [
            {
                "score": 2.0, // optional, but required if not on top level submission
                "max_score": 2.0, // optional
                "name": "Your name here", // optional
                "number": "1.1", // optional (will just be numbered in order of array if no number given)
                "output": "Giant multiline string that will be placed in a <pre> tag and collapsed by default", // optional
                "tags": ["tag1", "tag2", "tag3"], // optional
                "visibility": "visible", // Optional visibility setting
                "extra_data": {} // Optional extra data to be stored
            },
            // and more test cases...
        ],
    "leaderboard": // Optional, will set up leaderboards for these values
        [
            { "name": "Accuracy", "value": .926 },
            { "name": "Time", "value": 15.1, "order": "asc" },
            { "name": "Stars", "value": "*****" }
        ]
}

let prev = {
    "created_at": "2018-07-01T14:22:32.365935-07:00", // Submission time
    "assignment": { // Assignment details
        "due_date": "2018-07-31T23:00:00.000000-07:00",
        "group_size": 4, // Maximum group size, or null if not set
        "group_submission": true, // Whether group submission is allowed
        "id": 25828, // Gradescope assignment ID
        "late_due_date": null, // Late due date, if set
        "release_date": "2018-07-02T00:00:00.000000-07:00",
        "title": "Programming Assignment 1",
        "total_points": "20.0" // Total point value, including any manual grading portion
    },
    "users": [
        {
            "email": "student@example.com",
            "id": 1234,
            "name": "Student User"
        }, // Multiple users will be listed in the case of group submissions
    ],
    "previous_submissions": [
        {
            "submission_time": "2017-04-06T14:24:48.087023-07:00",// previous submission time
            "score": 0.0, // Previous submission score
            "results": {} // Previous submission results object
        },
    ]
} */