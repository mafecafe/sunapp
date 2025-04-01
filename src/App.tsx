import './App.css';
import SunshineGrid from './components/SunshineGrid';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>UK Sunshine Forecast</h1>
        <p>Visualization of expected sunshine hours for the next 30 days</p>
      </header>
      <main>
        <SunshineGrid />
      </main>
      <footer className="app-footer">
        <p>Data sourced from Met Office UK (simulated for demo)</p>
      </footer>
    </div>
  );
}

export default App;
