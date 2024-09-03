// Vietlott Power 6/55 simulation with customizable number of players, detailed results, and financial statistics

const generateRandomNumbers = (count, max) => {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const checkWinning = (playerNumbers, winningNumbers, bonusNumber) => {
    let matchCount = 0;
    for (let num of playerNumbers) {
        if (winningNumbers.includes(num)) {
            matchCount++;
        }
    }
    const matchedBonus = playerNumbers.includes(bonusNumber);
    return { matchCount, matchedBonus };
};

const simulateGame = (numPlayers) => {
    const ticketPrice = 10000; // Giá mỗi vé là 10k
    const prizeJackpot1 = 30000000000; // 30 tỷ đồng cho Jackpot 1
    const prizeJackpot2 = 3000000000; // 3 tỷ đồng cho Jackpot 2
    const prizeMatch5 = 40000000; // 40 triệu đồng cho match 5
    const prizeMatch4 = 500000; // 500 nghìn đồng cho match 4
    const prizeMatch3 = 50000; // 50 nghìn đồng cho match 3

    const winningNumbers = generateRandomNumbers(6, 55);
    const bonusNumber = generateRandomNumbers(1, 55)[0];

    console.log('Winning Numbers: ', winningNumbers);
    console.log('Bonus Number: ', bonusNumber);

    const playerResults = {
        jackpot1: [],
        jackpot2: [],
        match5PlusBonus: [],
        match5: [],
        match4: 0,
        match3: 0,
        match2: 0,
        match1: 0,
        match0: 0
    };

    const prizeResults = {
        jackpot1: 0,
        jackpot2: 0,
        match5PlusBonus: 0,
        match5: 0,
        match4: 0,
        match3: 0
    };

    for (let i = 0; i < numPlayers; i++) {
        const playerNumbers = generateRandomNumbers(6, 55);
        const { matchCount, matchedBonus } = checkWinning(playerNumbers, winningNumbers, bonusNumber);

        if (matchCount === 6) {
            playerResults.jackpot1.push(playerNumbers);
            prizeResults.jackpot1 += prizeJackpot1;
        } else if (matchCount === 5 && matchedBonus) {
            playerResults.jackpot2.push(playerNumbers);
            prizeResults.jackpot2 += prizeJackpot2;
        } else if (matchCount === 5) {
            playerResults.match5.push(playerNumbers);
            prizeResults.match5 += prizeMatch5;
        } else if (matchCount === 4) {
            playerResults.match4++;
            prizeResults.match4 += prizeMatch4;
        } else if (matchCount === 3) {
            playerResults.match3++;
            prizeResults.match3 += prizeMatch3;
        } else if (matchCount === 2) {
            playerResults.match2++;
        } else if (matchCount === 1) {
            playerResults.match1++;
        } else {
            playerResults.match0++;
        }
    }

    const totalRevenue = numPlayers * ticketPrice;
    const totalPayout = prizeResults.jackpot1 +
                        prizeResults.jackpot2 +
                        prizeResults.match5 +
                        prizeResults.match4 +
                        prizeResults.match3;

    const profitOrLoss = totalRevenue - totalPayout;

    console.log('Results: ', playerResults);
    console.log('Prize Money Results: ', prizeResults);
    console.log('Total Revenue: ', totalRevenue.toLocaleString(), 'VND');
    console.log('Total Payout: ', totalPayout.toLocaleString(), 'VND');
    console.log('Profit or Loss: ', profitOrLoss.toLocaleString(), 'VND');
};

// Run the simulation with 1 million players
simulateGame(1000000);
