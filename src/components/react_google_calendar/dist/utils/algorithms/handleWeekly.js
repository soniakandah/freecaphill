var moment = require('moment');
/*
 * Handles events that occur the same day of every week
 * (e.g. every Monday)
 */
// handleWeekly :: String -> Int -> {} -> [{}]

var handleWeekly = function handleWeekly(calendar, recurrence, e) {
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
            end: end.clone().add(add, 'week')._d,
            gLink: e.htmlLink,
            description: e.description,
            location: e.location,
            start: start.clone().add(add, 'week')._d,
            title: e.summary,
            meta: e,
        };
        reoccurringEvents.push(reoccurringEvent);
        recurrence--;
        add++;
    }

    return reoccurringEvents;
};

module.exports = handleWeekly;
