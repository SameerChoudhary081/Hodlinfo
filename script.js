// Fetch ticker data from the backend API
const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/tickers');
      const data = await response.json();

  
      if (data && data.length > 0) {
        updateTable(data);

        updateBestPrice(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Update the table with the ticker data
  const updateTable = (tickers) => {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Clear existing data
  
    tickers.forEach((ticker, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${ticker.name}</td>
        <td>₹ ${ticker.last}</td>
        <td>₹ ${ticker.buy} / ₹ ${ticker.sell}</td>
        <td>${ticker.volume}</td>
        <td>${ticker.base_unit}</td>
      `;
      tableBody.appendChild(row);
    });
  };
  
  // Update the best price to trade
  const updateBestPrice = (tickers) => {
    // Calculate the average last traded price
    const bestPrice = tickers.reduce((acc, curr) => acc + parseFloat(curr.last), 0) / tickers.length;
    document.getElementById('best-price').textContent = `₹ ${bestPrice.toFixed(2)}`;
  };
  
  // Fetch data on page load
  fetchData();
  