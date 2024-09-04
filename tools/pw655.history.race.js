const fs = require('fs');
let histories =  JSON.parse(fs.readFileSync('./pw655.history2.json', 'utf8'));
// let jsonRace = {
//     "1":{
//         "07/01/2020":0,
//         "03/01/2020":1,
//     },
//     "2":{
//         "07/01/2020":0,
//         "07/03/2020":2,
//     }
// }
let jsonRace = {};
for(let i = 1; i<55; i++){
    jsonRace[i] = {};
    histories.forEach(history => {
        let date = history['date'].split(',')[1].trim();
        jsonRace[i][date] = history[i]
    });
}

fs.writeFileSync('./pw655.history.race.json', JSON.stringify(jsonRace, null, 2));
console.log('JSON file saved successfully.');
