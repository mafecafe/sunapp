import { useEffect, useState } from 'react';
import { WeatherData, fetchWeatherData } from '../services/weatherService';
import '../styles/SunshineGrid.css';

interface SunshineGridProps {
  days?: number;
}

const SunshineGrid = ({ days = 30 }: SunshineGridProps) => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchWeatherData();
        setWeatherData(data.slice(0, days));
        setError(null);
      } catch (err) {
        setError('Failed to load weather data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [days]);

  // Function to determine dot color based on sunshine hours
  const getDotColor = (hours: number): string => {
    // Scale from 0-12 hours of sunshine
    if (hours < 2) return '#6b7280'; // Gray for very low sunshine
    if (hours < 4) return '#93c5fd'; // Light blue for low sunshine
    if (hours < 6) return '#60a5fa'; // Blue for moderate sunshine
    if (hours < 8) return '#3b82f6'; // Medium blue for good sunshine
    if (hours < 10) return '#f59e0b'; // Orange for high sunshine
    return '#f97316'; // Bright orange for very high sunshine
  };

  if (loading) return <div className="loading">Loading weather data...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="sunshine-container">
      <h2>Sunshine Forecast for the Next {days} Days</h2>
      <div className="sunshine-grid">
        {weatherData.map((day, index) => (
          <div key={index} className="day-container">
            <div 
              className="sunshine-dot" 
              style={{ backgroundColor: getDotColor(day.sunshineHours) }}
              title={`${day.date}: ${day.sunshineHours.toFixed(1)} hours of sunshine`}
            />
            <div className="date-label">{new Date(day.date).getDate()}</div>
          </div>
        ))}
      </div>
      <div className="legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#6b7280' }}></span>
          <span>0-2 hours</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#93c5fd' }}></span>
          <span>2-4 hours</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#60a5fa' }}></span>
          <span>4-6 hours</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#3b82f6' }}></span>
          <span>6-8 hours</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#f59e0b' }}></span>
          <span>8-10 hours</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#f97316' }}></span>
          <span>10+ hours</span>
        </div>
      </div>
    </div>
  );
};

export default SunshineGrid; 