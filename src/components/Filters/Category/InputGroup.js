import React from 'react'

const InputGroup = ( { total, setID, name } ) => {

  return (
    <div className="input-group mb-3">
        <select 
            className="form-select" 
            id={name}
            onChange={(e) => { setID(e.target.value)}}
            >
            <option value={1}>Choose...</option>

            { [...Array(total).keys()].map((x) => {
                return (<option key={x+1} value={x+1}>{name} - {x+1}</option>)
            }) }
        </select>
    </div>
  )
}

export default InputGroup