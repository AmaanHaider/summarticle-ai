import Article from "./components/Article";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Article />
      </div>
    </main>
  );
}

export default App;
