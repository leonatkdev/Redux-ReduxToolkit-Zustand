import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import ClassicRedux from './components/pages/ClassicRedux'
import ReduxToolkit from './components/pages/ReduxToolkit'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/redux">ClassicRedux</Link>
        <Link to="/reduxToolkit">ReduxToolkit</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/redux" element={<ClassicRedux />} />
        <Route path="/reduxToolkit" element={<ReduxToolkit />} />
      </Routes>
    </Router>
  );
}


export default App;