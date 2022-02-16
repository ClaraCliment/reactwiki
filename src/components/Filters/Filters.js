import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setPageNumber, setStatus, setGender, setSpecies}) => {

  // réinitialiser tous les filtres
  let clear = () => {
    setPageNumber(1); 
    setStatus(""); 
    setGender(""); 
    setSpecies(""); 
    window.location.reload(false);
  }

  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
      <div 
        style={{cursor: "pointer"}} 
        onClick={clear}
        className='text-center text-primary text-decoration-underline mb-4'>
          Clear filters
      </div>

      {/** Accordeon avec filtres */}
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />

      </div>

    </div>
  )
}

export default Filters