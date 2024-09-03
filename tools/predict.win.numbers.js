/**
 * Generate all combinations of 6 numbers from the top 9 most frequent numbers
 * @param {Object} frequency - An object where keys are numbers and values are their frequencies
 * @returns {Object} - An object containing top 9 numbers and all possible 6-number combinations
 */
const generateTicketAndCombinations = (frequency) => {
    // Function to generate combinations
    const getCombinations = (arr, size) => {
      const result = [];
    
      const combine = (prefix, start, size) => {
        if (size === 0) {
          result.push(prefix);
          return;
        }
    
        for (let i = start; i <= arr.length - size; i++) {
          combine(prefix.concat(arr[i]), i + 1, size - 1);
        }
      };
    
      combine([], 0, size);
      return result;
    };
  
    // Function to generate high frequency numbers
    const generateHighFrequencyNumbers = (freq) => {
      const entries = Object.entries(freq);
      //entries.sort((a, b) => b[1] - a[1]); // Sort by frequency, highest first
      entries.sort((a, b) => a[1] - b[1]); // Sort by frequency, highest first
      const top9Numbers = entries.slice(0, 9).map(entry => entry[0]);
      return top9Numbers.sort((a, b) => a - b); // Sort numbers in ascending order
    };
  
    // Generate top 9 numbers and combinations
    const top9Numbers = generateHighFrequencyNumbers(frequency);
    const combinations = getCombinations(top9Numbers, 6);
  
    return {
      top9Numbers,
      combinations
    };
  };
  
  // Example usage
  const frequency = {
    from_2020_to_2024: {
      "01": 80, "02": 65, "03": 76, "04": 70, "05": 74, "06": 75, "07": 66, "08": 79, "09": 70,
      "10": 69, "11": 79, "12": 87, "13": 82, "14": 73, "15": 62, "16": 60, "17": 66, "18": 80,
      "19": 80, "20": 79, "21": 72, "22": 84, "23": 78, "24": 76, "25": 82, "26": 62, "27": 76,
      "28": 65, "29": 73, "30": 71, "31": 66, "32": 83, "33": 81, "34": 84, "35": 70, "36": 70,
      "37": 58, "38": 79, "39": 69, "40": 71, "41": 83, "42": 70, "43": 89, "44": 81, "45": 70,
      "46": 79, "47": 89, "48": 80, "49": 74, "50": 64, "51": 89, "52": 82, "53": 77, "54": 75,
      "55": 72
    },
    from_2024:{"10":9,"11":5,"12":16,"13":18,"14":5,"15":4,"16":6,"17":8,"18":12,"19":8,"20":13,"21":12,"22":10,"23":9,"24":4,"25":13,"26":8,"27":13,"28":3,"29":6,"30":5,"31":9,"32":11,"33":10,"34":12,"35":11,"36":9,"37":6,"38":16,"39":10,"40":16,"41":9,"42":10,"43":13,"44":7,"45":7,"46":13,"47":8,"48":7,"49":12,"50":6,"51":12,"52":15,"53":9,"54":13,"55":14,"01":15,"08":15,"07":11,"06":9,"02":8,"03":8,"05":7,"04":5,"09":4},
    from_2010_to_2024: {
            "01": 167,
            "02": 156,
            "03": 154,
            "04": 179,
            "05": 176,
            "06": 166,
            "07": 176,
            "08": 158,
            "09": 158,
            "10": 181,
            "11": 168,
            "12": 151,
            "13": 167,
            "14": 151,
            "15": 150,
            "16": 170,
            "17": 150,
            "18": 166,
            "19": 185,
            "20": 168,
            "21": 163,
            "22": 169,
            "23": 164,
            "24": 181,
            "25": 173,
            "26": 158,
            "27": 170,
            "28": 162,
            "29": 158,
            "30": 176,
            "31": 158,
            "32": 151,
            "33": 164,
            "34": 155,
            "35": 169,
            "36": 148,
            "37": 176,
            "38": 145,
            "39": 156,
            "40": 165,
            "41": 166,
            "42": 145,
            "43": 155,
            "44": 180,
            "45": 158
        }
    }

  
  // const result = generateTicketAndCombinations(frequency.from_2010_to_2024);
  // console.log('Top 9 Numbers (Sorted):', result.top9Numbers);
  // console.log(`Total Combinations: ${result.combinations.length}`);
  // console.log('Combinations:', result.combinations);

module.exports = {generateTicketAndCombinations, frequency}
  