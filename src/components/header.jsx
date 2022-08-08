import React from 'react';
import '../styles/header.css';
import card from '../images/bgcard.png'

function Header() {
  return (
    <div className="header-bg">
        <div className='header-content'>
            <div className='header-context'>
                <div className='header-text'>
                    <h1>Create an avatar with your favourite NFT collection.</h1>
                    <p>With dorecta you can get more than 1m+ avater from over 200k NFT collections easily!</p>
                    <form className='search'>
                        <input type='text' placeholder='Search for collection' />
                    </form>
                </div>
                <div className='header-img'>
                    <img src={card} alt='Background Card' />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
