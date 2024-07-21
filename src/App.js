import Header from './components/Header';
import TodoHeader from './components/TodoHeader';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/todo" element={<TodoHeader />} />
      </Routes>
    </Router>
  );
}

export default App;
