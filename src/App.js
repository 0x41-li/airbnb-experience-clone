import Header from "./components/Header";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";

import "./app.css";

export default function App() {
  return (
    <div className="layout">
      <Header />
      <Hero />
      <Experiences />
    </div>
  );
}
