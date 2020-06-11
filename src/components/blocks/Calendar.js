import React, { useState } from 'react';
import Calendar from '../react_google_calendar';

function CalendarDisplay(props) {
    const [events, setEvents] = useState([]);
    const calConfig = {
        api_key: 'AIzaSyCwDysTidlHKoQ9Z2VQO3ga1gVEe-vxUXs',
        calendars: [
            {
                name: 'CHAZ Events',
                url: 'freecaphill%40gmail.com', // your calendar URL,
            },
        ],
        dailyRecurrence: 700,
        weeklyRecurrence: 500,
        monthlyRecurrence: 20,
    };
    return (
        <div>
            <Calendar events={events} config={calConfig} />
        </div>
    );
}

export default CalendarDisplay;
