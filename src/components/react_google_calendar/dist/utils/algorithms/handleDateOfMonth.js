var moment = require('moment');
/*
 * Handles events that occure the same date of every month
 * (e.g. the 1st, the 8th)
 */
// handleDateOfMonth :: String -> Int -> {} -> [{}]

var handleDateOfMonth = function handleDateOfMonth(calendar, recurrence, e) {
    var start = e.start.date ? moment(e.start.date) : moment(e.start.dateTime);
    var end = e.end.date ? moment(e.start.date) : moment(e.end.dateTime);
    var reoccurringEvents = [
        {
            eventType: calendar.name,
            creator: e.creator,
            end: end._d,
            gLink: e.htmlLink,
            description: e.description,
            location: e.location,
            start: start._d,
            title: e.summary,
            meta: e,
        },
    ];
    var add = 1;

    while (recurrence > 0) {
        var reoccurringEvent = {
            eventType: calendar.name,
            creator: e.creator,
            end: end.clone().add(add, 'months')._d,
            gLink: e.htmlLink,
            description: e.description,
            location: e.location,
            start: start.clone().add(add, 'months')._d,
            title: e.summary,
            meta: e,
        };
        reoccurringEvents.push(reoccurringEvent);
        recurrence--;
        add++;
    }

    return reoccurringEvents;
};

module.exports = handleDateOfMonth;
