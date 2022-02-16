import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './components/Pages/Episodes';
import Location from './components/Pages/Location';
import CardDetails from './components/Cards/CardDetails';


function App(){
  return (
    <Router>
    <div className='App'>
      <Navbar />
    </div>

    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/:id" element={ <CardDetails />} />

      <Route path="/episodes" element={ <Episodes />} />
      <Route path="/episodes/:id" element={ <CardDetails />} />

      <Route path="/location" element={ <Location />} />
      <Route path="/location/:id" element={ <CardDetails />} />
    </Routes>
  </Router>
  )
}

const Home = ()  => {

  let [pageNumber, setPageNumber] = useState(1);
  let [ search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] =  useState("");

  console.log(pageNumber);
  let [ fetchedData, setFetchedData] = useState([]);
  // destructure 
  // info will be used for pagination and results for the cards details 
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    // IIFE: immediately invoked function expression 
    (async function(){
      let data = await fetch(api)
      .then(res => res.json());
      setFetchedData(data);
    })()
  }, [api])


  return (
    <div className="App">    
        <h1 className='text-center mb-3'>Characters</h1>
        {/** Search bar */}
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        
        {/** Partie filtres & cards */}
        <div className="container">
          <div className="row">
              <Filters 
                setStatus={setStatus} 
                setPageNumber={setPageNumber} 
                setGender={setGender} 
                setSpecies={setSpecies} />

            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards results={results} page="/" />
                {/* <div className="col-4">Card</div>
                <div className="col-4">Card</div> */}
              </div>
            </div>
          </div>
        </div>

        {/** Ici va la pagination */}
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
    </div>
  );
}

export default App;
