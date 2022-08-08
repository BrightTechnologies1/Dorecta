import React from 'react';
import '../styles/collection.css';
import card from '../images/bgcard.png'
import CollectionItem from './collectionitem';

function Collection() {
  return (
    <div>
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
      <CollectionItem />
    </div>
  );
}

export default Collection;
