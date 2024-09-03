const { fetchHtmlWNPPower655 } = require('./crawl.win.number.655.js');
const { generateTicketAndCombinations } = require('./predict.win.numbers.js');
const log = console.log;
(async () => {
    let frequency = await fetchHtmlWNPPower655({fromDate: '01/05/2024', toDate: '28/7/2024', sortType: 'desc'});
    log(frequency)
    const result = generateTicketAndCombinations(frequency);
    log('Top 9 Numbers (Sorted):', result.top9Numbers);
    //log(`Total Combinations: ${result.combinations.length}`);
    //log('Combinations:', result.combinations);
})();
