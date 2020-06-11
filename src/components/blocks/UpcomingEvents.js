import React, { useState, useEffect } from 'react';
import moment from 'moment';

function UpcomingEvents(props) {
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        async function getEvents() {
            let res = await fetch(
                'https://www.googleapis.com/calendar/v3/calendars/freecaphill%40gmail.com/events?maxResults=5&orderBy=startTime&singleEvents=true&key=AIzaSyCwDysTidlHKoQ9Z2VQO3ga1gVEe-vxUXs',
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );

            let json = await res.json();
            setUpcoming(json.items);
        }

        getEvents();
    }, []);

    let renderedEvents = [];

    for (let i = 0; i < upcoming.length; i++) {
        let data = upcoming[i];
        let length = moment(data.end.dateTime).diff(
            moment(data.start.dateTime),
            'hours',
            true,
        );

        let decimal = parseFloat(length) - Math.floor(parseFloat(length));

        length = parseInt(length);

        if (length === 1) length += ' hr ';
        else if (length === 0) length = '';
        else if (length > 1) length += ' hrs ';

        if (decimal > 0) {
            length += Math.floor(decimal * 60) + ' min';
        }

        let html = (
            <a key={i} href={data.htmlLink} className='event'>
                <div className='date-time'>
                    <div className='content'>
                        <span className='date'>
                            {moment(data.start.dateTime).calendar()}
                        </span>
                        <span className='length'>{length}</span>
                    </div>
                </div>

                <h3 className='title'>{data.summary}</h3>
                <p className='summary'>
                    {data.description.length > 100
                        ? data.description.substring(0, 99) + '...'
                        : data.description}
                </p>
            </a>
        );
        renderedEvents.push(html);
    }

    return <div className='upcoming-events'>{renderedEvents}</div>;
}

export default UpcomingEvents;
