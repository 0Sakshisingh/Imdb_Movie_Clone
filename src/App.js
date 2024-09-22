
import './App.css';
import Header from './component/Header.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './page/home/Home.js';
import MovieList from './component/MovieList.js';
import MovieDetail from './component/MovieDetail.js';
function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route> 
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*"element={<h1>error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
