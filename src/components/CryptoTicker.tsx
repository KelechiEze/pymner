import { useEffect, useState } from "react";
import "./CryptoTicker.css";

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

const CryptoTicker = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,ripple,cardano,solana,dogecoin,polkadot,polygon-pos,chainlink&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        // If API fails, we'll use a placeholder that shows we're fetching live data
        setCryptoData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();

    // Refresh data every 30 seconds to get live prices
    const interval = setInterval(fetchCryptoData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    if (price >= 1) {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      return `$${price.toFixed(4)}`;
    }
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? '#00ff88' : '#ff4444';
  };

  // Display loading or data
  const displayData = loading ? [] : cryptoData;

  if (loading && cryptoData.length === 0) {
    return (
      <div className="crypto-ticker-wrapper">
        <div className="ticker-row">
          <div className="ticker-content">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="ticker-item loading">
                <div className="crypto-icon loading"></div>
                <span className="crypto-name loading">Loading...</span>
                <span className="crypto-change loading">+0.00%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="crypto-ticker-wrapper">
      <div className="ticker-row ticker-left">
        <div className="ticker-content">
          {[...displayData, ...displayData, ...displayData].map((crypto, idx) => (
            <div key={`left-${crypto.id}-${idx}`} className="ticker-item">
              <div className="crypto-icon">
                <img src={crypto.image} alt={crypto.name} />
              </div>
              <span className="crypto-name">{crypto.name}</span>
              <span className="crypto-price">{formatPrice(crypto.current_price)}</span>
              <span 
                className="crypto-change" 
                style={{ color: getChangeColor(crypto.price_change_percentage_24h) }}
              >
                {formatChange(crypto.price_change_percentage_24h)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="ticker-row ticker-right">
        <div className="ticker-content">
          {[...displayData, ...displayData, ...displayData].map((crypto, idx) => (
            <div key={`right-${crypto.id}-${idx}`} className="ticker-item">
              <div className="crypto-icon">
                <img src={crypto.image} alt={crypto.name} />
              </div>
              <span className="crypto-name">{crypto.name}</span>
              <span className="crypto-price">{formatPrice(crypto.current_price)}</span>
              <span 
                className="crypto-change" 
                style={{ color: getChangeColor(crypto.price_change_percentage_24h) }}
              >
                {formatChange(crypto.price_change_percentage_24h)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;