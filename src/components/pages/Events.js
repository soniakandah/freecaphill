import React from 'react';
import HeaderA from '../blocks/HeaderA';
import Section from '../blocks/Section';
import UpcomingEvents from '../blocks/UpcomingEvents';

function Events(props) {
    return (
        <>
            <HeaderA
                className='top photo-bk'
                image='https://i.imgur.com/ACpZI96.png'
            >
                <h1>Community Events</h1>
                <h4>Become a part of our movement.</h4>
            </HeaderA>

            <Section>
                <p>
                    To help facilitate the creation and management of events,
                    CHAZ has it's own{' '}
                    <a
                        href='https://calendar.google.com/calendar/embed?src=freecaphill%40gmail.com&ctz=America%2FLos_Angeles'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        Google Calendar
                    </a>
                    . This should be the most up-to-date source of information
                    of organized events by the CHAZ people. Want to contribute
                    an event? Send an email to{' '}
                    <a
                        href='mailto:freecaphill@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        freeCapHill@gmail.com
                    </a>{' '}
                    to be added as an event creator.
                </p>
                <a
                    href='https://calendar.google.com/calendar/embed?src=freecaphill%40gmail.com&ctz=America%2FLos_Angeles'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='btn'
                >
                    See Our Calendar
                </a>
                <p className='spacer-m'></p>
                <h2>Upcoming Events</h2>
                <UpcomingEvents />
            </Section>
        </>
    );
}
export default Events;
