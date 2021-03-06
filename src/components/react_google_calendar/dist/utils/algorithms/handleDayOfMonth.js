var moment = require('moment');
/*
 * Handles events that occur the same day of the month
 * (e.g. first Friday, last Monday)
 */
// handleDayOfMonth :: String -> Int -> {} -> [{}]

var handleDayOfMonth = function handleDayOfMonth(calendar, recurrence, e) {
    var start = e.start.date ? moment(e.start.date) : moment(e.start.dateTime);
    var end = e.end.date ? moment(e.start.date) : moment(e.end.dateTime);
    var date = start.date();
    var counter;

    if (date <= 7) {
        counter = 1;
    } else if (date > 7 && date <= 14) {
        counter = 7;
    } else if (date > 14 && date <= 21) {
        counter = 14;
    } else if (date > 21 && date <= 28) {
        counter = 21;
    } else {
        counter = 28;
    }

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

    while (recurrence > 0) {
        var tempCounter = counter; // Using variables 'recurrence' and 'tempCounter' doesn't work with Moment

        var nextStart = new Date(
            start.year(),
            start.month() + recurrence,
            tempCounter,
            start.hour(),
            start.minutes(),
        );
        var nextEnd = new Date(
            end.year(),
            end.month() + recurrence,
            tempCounter,
            end.hour(),
            end.minutes(),
        );

        while (tempCounter < 31) {
            var isEqual = nextStart.getDay() === start.day();

            if (isEqual) {
                var reoccurringEvent = {
                    eventType: calendar.name,
                    creator: e.creator,
                    end: nextEnd,
                    gLink: e.htmlLink,
                    description: e.description,
                    location: e.location,
                    start: nextStart,
                    title: e.summary,
                    meta: e,
                };
                reoccurringEvents.push(reoccurringEvent);
                tempCounter = counter;
                break;
            }

            nextStart = new Date(
                start.year(),
                start.month() + recurrence,
                tempCounter,
                start.hour(),
                start.minutes(),
            );
            nextEnd = new Date(
                end.year(),
                end.month() + recurrence,
                tempCounter,
                end.hour(),
                end.minutes(),
            );
            tempCounter++;
        }

        recurrence--;
    }

    return reoccurringEvents;
};

module.exports = handleDayOfMonth;
