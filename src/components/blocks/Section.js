import React from 'react';

function Section(props) {
    return (
        <section className={props.className}>
            <div className='container'>
                <div className='content'>{props.children}</div>
            </div>
        </section>
    );
}

export default Section;
