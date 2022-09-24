import "./App.css";
import { Footer } from "./components/index";
import { PublicRoute } from "./routes/public-routes/public-route";
function App() {
  return (
    <div className="App">
      <PublicRoute />
      <Footer />
    </div>
  );
}

export default App;
