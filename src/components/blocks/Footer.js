import React from 'react';
import '../../styles/css/all.min.css';

function Footer(props) {
    return (
        <footer>
            <div className='container'>
                <a
                    href='https://twitter.com/freeCapHill'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <span className='fab fa-twitter'></span>
                </a>
                <a
                    href='https://www.reddit.com/r/freeCapHill/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <span className='fab fa-reddit-alien'></span>
                </a>
                <a
                    href='mailto:freecaphill@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <span className='fas fa-calendar-alt'></span>
                </a>
                <a
                    href='mailto:freecaphill@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <span className='fas fa-envelope'></span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
