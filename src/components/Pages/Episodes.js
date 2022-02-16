import React, { useState, useEffect} from 'react';
import Cards from '../Cards/Cards';
import InputGroup from '../Filters/Category/InputGroup';

const Episodes = () => {

  let [id, setID] = useState(1);
  let [ results, setResults] = useState([]);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  let [ info, setInfo] = useState([]);
  let { name, air_date } = info;

  useEffect(() => {
    // IIFE: immediately invoked function expression 
    (async function(){
      let data = await fetch(api)
      .then(res => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then(res => res.json())
        } )
        )
      setResults(a);
    })()
  }, [api])

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center mb-3'>Episode name: <span className='text-primary'>{name === ""? "Unknown" : name}</span></h1>
        <h5 className='text-center mb-3'>Air date: {air_date === ""? "Unknown" : air_date}</h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12 mb-4'>
          <div className='text-center fw-bold fs-4 mb-2'>Pick episode</div>
          <InputGroup total={51} name="Episode" setID={setID}/>
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards results={results} page="/episodes/" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes