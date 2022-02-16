import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = ({results, page}) => {

  let display;

  if(results){
    display = results.map((result) => {
      let { id, image, name, location, status} = result;
      return (
        <Link 
          style={{textDecoration:"none"}}
          to={`${page}${id}`}
          key={id} 
          className='col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark'>
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt={name} className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px"}} className='content'>
              <div className='fs-4 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className='fs-6'>Last location</div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
          {/** Badge status */}
          {(() => {
            if(status === 'Dead') {
              return (
                <div className={`badge bg-danger position-absolute ${styles.badge}`}>{status}</div>
              )
            } else if( status === 'Alive') {
              return (
                <div className={`badge bg-success position-absolute ${styles.badge}`}>{status}</div>
              )
            } else {
              return (
                <div className={`badge bg-secondary position-absolute ${styles.badge}`}>{status}</div>
              )
            }
          })()}
        </Link>
      )
    })
  } else {
    display = "No characters found 😑";
  }

  return (
    <>{display}</>
  )
}

export default Cards