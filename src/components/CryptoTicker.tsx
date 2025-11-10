import { useEffect } from "react";
import { Coins } from "lucide-react";
import "./CryptoTicker.css";

const cryptoData = [
  { name: "RuneToken", change: "+$0.462", icon: "RT" },
  { name: "MysticHash", change: "+$0.462", icon: "MH" },
  { name: "PhantomLedger", change: "+$0.462", icon: "PL" },
  { name: "MirageCoin", change: "+$0.462", icon: "MC" },
  { name: "VeilToken", change: "+$0.462", icon: "VT" },
];

const CryptoTicker = () => {
  return (
    <div className="crypto-ticker-wrapper">
      <div className="ticker-row ticker-left">
        <div className="ticker-content">
          {[...cryptoData, ...cryptoData, ...cryptoData].map((crypto, idx) => (
            <div key={idx} className="ticker-item">
              <div className="crypto-icon">
                <Coins size={20} />
              </div>
              <span className="crypto-name">{crypto.name}</span>
              <span className="crypto-change">{crypto.change}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="ticker-row ticker-right">
        <div className="ticker-content">
          {[...cryptoData, ...cryptoData, ...cryptoData].map((crypto, idx) => (
            <div key={idx} className="ticker-item">
              <div className="crypto-icon">
                <Coins size={20} />
              </div>
              <span className="crypto-name">{crypto.name}</span>
              <span className="crypto-change">{crypto.change}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;
