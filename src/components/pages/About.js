import React from 'react';
import HeaderA from '../blocks/HeaderA';
import SectionA from '../blocks/SectionA';

function About(props) {
    return (
        <>
            <HeaderA
                className='top photo-bk'
                image='https://i.imgur.com/uc8oct6.png'
            >
                <h1>What we are</h1>
                <h4>Seattle's first autonomous zone is breaking new ground.</h4>
            </HeaderA>
            <SectionA direction='left' image='https://i.imgur.com/nes4hpa.jpg'>
                <h2>Lorem Ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque viverra in augue a pulvinar. Duis malesuada eleifend
                    augue, eleifend luctus ipsum imperdiet sed. Donec mollis
                    ultricies risus, quis molestie lectus pellentesque nec.
                    Phasellus pulvinar, ante consequat scelerisque sollicitudin,
                    metus nunc molestie quam, sed lacinia mauris sem ac leo.
                    Cras placerat consequat felis, non suscipit elit consequat
                    vitae. Maecenas tincidunt urna euismod velit gravida, at
                    commodo est pulvinar. Aliquam sodales, libero varius iaculis
                    ultrices, nisl neque luctus dolor, et scelerisque nisl
                    libero quis massa.
                </p>
            </SectionA>

            <SectionA
                direction='right'
                offWhite={true}
                image='https://i.imgur.com/QcvAj9a.jpg'
            >
                <h2>Lorem Ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque viverra in augue a pulvinar. Duis malesuada eleifend
                    augue, eleifend luctus ipsum imperdiet sed. Donec mollis
                    ultricies risus, quis molestie lectus pellentesque nec.
                    Phasellus pulvinar, ante consequat scelerisque sollicitudin,
                    metus nunc molestie quam, sed lacinia mauris sem ac leo.
                    Cras placerat consequat felis, non suscipit elit consequat
                    vitae. Maecenas tincidunt urna euismod velit gravida, at
                    commodo est pulvinar. Aliquam sodales, libero varius iaculis
                    ultrices, nisl neque luctus dolor, et scelerisque nisl
                    libero quis massa.
                </p>
            </SectionA>
        </>
    );
}

export default About;
