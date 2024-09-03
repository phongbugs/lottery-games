const cheerio = require('cheerio');

async function fetchHtmlWNPPower655({fromDate, toDate, sortType}) {
    try {
        const url = `https://vietlott.vn/vi/choi/power-6-55/thong-ke-so-trung?fromdate=${fromDate}&todate=${toDate}&sorttype=${sortType}&nocatche=1`;
        console.log('Fetching data from:', url);
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);
        const result = {};
        $('.choi_thongke_kq_boloc_nd').each((index, element) => {
            const boTron = $(element).find('.bo_tron').text().trim();
            const value = $(element).find('p').last().text().trim();
            result[boTron] = parseInt(value, 10);
        });

        // Convert the object to an array of [key, value] pairs
        //const entries = Object.entries(result);

        // Sort the entries array by the values in descending order
        //entries.sort((a, b) => b[1] - a[1]);

        // Convert the sorted array back to an object
        //const sortedData = Object.fromEntries(entries);

        return result;

        
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = {fetchHtmlWNPPower655}
