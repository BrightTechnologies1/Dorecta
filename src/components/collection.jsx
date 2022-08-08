import React from 'react';
import '../styles/collection.css';
import card from '../images/bgcard.png'

function Collection() {
  return (
    <div className="collection-content">
        <div className=''>
            <h1>Collection</h1>
        </div>
        <div className=''>
            <form className='search'>
                <input type='text' placeholder='Search for collection' />
            </form>
        </div>
    </div>
  );
}

export default Collection;
