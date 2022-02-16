import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {

    let { id } = useParams();
    let [ fetchedData, setFetchedData] = useState([]);

    let { image, name, status, species, gender, origin, location, type } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        // IIFE: immediately invoked function expression 
        (async function(){
          let data = await fetch(api)
          .then(res => res.json());
          setFetchedData(data);
        })()
      }, [api])
    
  return (
    <div className='container d-flex justify-content-center'>
      <div className='d-flex flex-column gap-3'>
        <h1 className='text-center'>
        {name === ""? "Unknown" : name}
        </h1>
        <img src={image} alt={name} className='img-fluid' />

        {/** Badge status */}
        {(() => {
            if(status === 'Dead') {
              return (
                <div className={"badge bg-danger fs-5"}>{status}</div>
              )
            } else if( status === 'Alive') {
              return (
                <div className={"badge bg-danger fs-5"}>{status}</div>
              )
            } else {
              return (
                <div className={"badge bg-danger fs-5"}>{status}</div>
              )
            }
          })()}

        <div className='content'>
          <div className=''>
            <span className='fw-bold'>Gender : </span>
            {gender === ""? "Unknown" : gender}
          </div>
    
          <div className=''>
            <span className='fw-bold'>Location : </span>
            {location? location.name : "Unknown"}
          </div>
  
          <div className=''>
            <span className='fw-bold'>Origin : </span>
            {origin? origin.name : "Unknown"}
          </div>

          <div className=''>
            <span className='fw-bold'>Type : </span>
            {type === ""? "Unknown" : type}
          </div>

          <div className=''>
            <span className='fw-bold'>Species : </span>
            {species === ""? "Unknown" : species}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails