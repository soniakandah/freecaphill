import React from 'react';

function HeaderA(props) {
    return (
        <section
            className={props.className}
            style={{
                backgroundImage: `url(${props.image})`,
            }}
        >
            <div className='container'>{props.children}</div>
        </section>
    );
}

export default HeaderA;
