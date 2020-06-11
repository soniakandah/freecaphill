import React from 'react';

function SectionA(props) {
    let classes = 'theme-01 ' + props.className + ' ' + props.direction + ' ';
    if (props.offWhite) classes += 'off-white';

    return (
        <section className={classes}>
            <div className='container'>
                <div className='content'>{props.children}</div>
                <div
                    className='hero'
                    style={{
                        backgroundImage: `url(${props.image})`,
                    }}
                ></div>
            </div>
        </section>
    );
}

export default SectionA;
