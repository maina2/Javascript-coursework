// Currency exchange rates (mocked for simplicity)
const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, INR: 74.5, JPY: 110.0 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, INR: 87.7, JPY: 129.5 },
    GBP: { USD: 1.33, EUR: 1.14, GBP: 1, INR: 100.0, JPY: 147.2 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.01, INR: 1, JPY: 1.47 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, INR: 0.68, JPY: 1 },
};

// DOM Elements
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertButton = document.getElementById('convert-button');
const resultDiv = document.getElementById('result');

// Convert currency function
function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount.';
        return;
    }

    const rate = exchangeRates[from][to];
    const convertedAmount = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
}

// Event listener for convert button
convertButton.addEventListener('click', convertCurrency);
