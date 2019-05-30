const fs = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const run = async () => {
    const res = await readFileAsync('../source/initial.sql')
    let r = res.toString().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, ' ')
    console.log(r)
}

run()
fs.readFile('../source/initial.sql', (err, res) => {
    let r = res.toString().replace(/(\r\n|\n|\r)/gm, " ")
        .replace(/\s+/g, ' ')
    console.log(err, typeof r)
})

//console.log(JSON.stringify(initialSql));