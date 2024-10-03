function calculateFibonacci() {
    const numberInput = document.getElementById('numberInput').value;
  
    // Check if the input is a valid number
    if (isNaN(numberInput) || numberInput < 1 || numberInput % 1 !== 0) {
      alert('Please enter a positive integer.');
      return;
    }
  
    const n = parseInt(numberInput);
    const fibonacciSeries = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
  
    // Display the result in the console
    console.log(`Fibonacci series up to ${n}: ${fibonacciSeries.join(', ')}`);
  
    // Display the result in the DOM
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `${n}: ${fibonacciSeries.join(', ')}`;
  }