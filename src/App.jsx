import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <StudentCard
        name="Shashi"
        course="BCA"
        year="2027"
      />

      <Counter />
    </div>
  );
}

export default App;