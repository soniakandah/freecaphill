import React from 'react';
import HeaderA from '../blocks/HeaderA';
import SectionA from '../blocks/SectionA';

function FrontPage(props) {
    return (
        <>
            <HeaderA
                className='top photo-bk'
                image='https://i.imgur.com/ySzeydZ.png'
            >
                <h1 className='width-70'>Capitol Hill Autonomous Zone</h1>
                <h4>A community built by the people, for the people.</h4>
            </HeaderA>

            <SectionA direction='left' image='https://i.imgur.com/nes4hpa.jpg'>
                <h2>What We Are</h2>
                <p>
                    The Capitol Hill Autonomous Zone, also known as CHAZ or Free
                    Capitol Hill, is a self-declared international community and
                    commune of around 300 residents. We're defining a new idea
                    of the future, one where we put people over profit. We hope
                    to create a neighborhood beyond policing and incarceration.
                    We hope to create a culture that is fundamentally
                    anti-racist and communal.
                </p>
            </SectionA>

            <SectionA
                direction='right'
                offWhite={true}
                image='https://i.imgur.com/QcvAj9a.jpg'
            >
                <h2>What We're Not</h2>
                <p>
                    Despite what the rumor mill creates, CHAZ is not a place for
                    anarchy. We're here to have an open dialog and to hear the
                    voices of the people. This is a revolutionary time, and
                    drastic change is crucial. We want to work within the
                    community to find practical ways to bring about this change.
                    And to do this, we need to work <i>with</i> the governments
                    of Seattle and Washington. If you want to see a list of our
                    current demands for governmental reform, you can read about
                    them{' '}
                    <a
                        rel='noopener noreferrer'
                        href='https://medium.com/@seattleblmanon3/the-demands-of-the-collective-black-voices-at-free-capitol-hill-to-the-government-of-seattle-ddaee51d3e47'
                        target='_blank'
                    >
                        here
                    </a>
                    .
                </p>
            </SectionA>
        </>
    );
}

export default FrontPage;
