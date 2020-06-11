import React from 'react';
import HeaderA from '../blocks/HeaderA';
import Reddit from '../blocks/Reddit';
import Section from '../blocks/Section';

function Contribute(props) {
    return (
        <>
            <HeaderA
                className='top photo-bk'
                image='https://i.imgur.com/pJWeg3C.png'
            >
                <h1>Support our community</h1>
                <h4>Find out how you can help.</h4>
            </HeaderA>
            <Section>
                <p>
                    We're embarking on a journey like never before, and we need
                    the entire community to come together to make that happen.
                    You can help us by donating much needed funding and
                    supplies, or by answering specific requests posted on our
                    forum.{' '}
                </p>
                <a className='btn' href='/'>
                    Donate Money
                </a>
                <p className='spacer-m'></p>
                <h2>Current Requests</h2>
                <div className='reddit-container'>
                    <Reddit
                        query='?q=flair%3Arequest&restrict_sr=5'
                        content='search.json'
                    />
                </div>
            </Section>
        </>
    );
}

export default Contribute;
