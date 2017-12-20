var fs = require('fs');
var arr_dir = ['../jsonPrueba/acción.json', '../jsonPrueba/comedia.json', '../jsonPrueba/drama.json',
    '../jsonPrueba/horror.json', '../jsonPrueba/mystery.json', '../jsonPrueba/thriller.json'
];
const arr_obj = [];

function colonizando() {
    return new Promise((resolve, reject) => {
        const mapeo = arr_dir.map(dir => {
            var contents = fs.readFileSync(dir, 'utf8');
            const myJSON = JSON.parse(contents);
            console.log(myJSON.length)
            return myJSON;
        })
        resolve(mapeo);
    })
}
colonizando().then(result => {
    const cleanArr = [].concat(...result)
    console.log(cleanArr)
    const
})

const gender =  "Crime | Drama | Mystery"
const gender = ["Crime", "Drama", "Mystery"]
