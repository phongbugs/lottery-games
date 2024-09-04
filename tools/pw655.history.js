const cheerio = require('cheerio');
const fs = require('fs');
let html =  fs.readFileSync('./pw655.history.html', 'utf8');
const $ = cheerio.load(html);
const result = [];
const result2 = [];
const counts = {};
for (let i = 1; i <= 55; i++) {
    counts[i] = 0;
}
let title = `T,Date,N1,N2,N3,N4,N5,N6,N7,Jackpot1,Jackpot2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55\n`
fs.appendFileSync('./pw655.history.csv', title);
const rows = $('tbody tr');
console.log(rows.length);
for (let i = rows.length - 1; i >= 0; i--) {
    const element = rows.eq(i);
    const date = element.find('td:nth-child(1)').text().trim();
    const numbers = element.find('td:nth-child(2) span.home-mini-whiteball').map((i, el) => $(el).text()).get();
    const jackpot1 = element.find('td:nth-child(3)').text().trim().split('≈')[0];
    const jackpot2 = element.find('td:nth-child(4)').text().trim().split('≈')[0];
    numbers.forEach((number, index) => {
        //console.log(+number)
        if(index < 6 )
            counts[+number] = counts[+number] + 1;
        else console.log('Error:', index)
    });
    //console.log(numbers.length)
    let count = Object.values(counts).join(',');
    console.log(numbers.join(','))
    //const csvRow = `${date},${numbers.join(',')},${jackpot1},${jackpot2},${count}\n`;
    //fs.appendFileSync('./pw655.history.csv', csvRow);
    result.push({ date, numbers, jackpot1, jackpot2, count});
    result2.push({ date, numbers, jackpot1, jackpot2, ...counts});

}

fs.writeFileSync('./pw655.history.json', JSON.stringify(result, null, 2));
fs.writeFileSync('./pw655.history2.json', JSON.stringify(result2, null, 2));
console.log('JSON file saved successfully.');
