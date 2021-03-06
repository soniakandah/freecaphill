/*
 * Higher-Order fuctions for processing events from Google Calendar
 */
// filterByOneProperty :: String -> [{}] -> [{}]
var filterByOneProperty = function filterByOneProperty(propterty, events) {
    return events.filter(function (event) {
        return event.r[0] === propterty;
    });
}; // filterIncludesString :: [] -> String -> Bool

var filterIncludesString = function filterIncludesString(filters, str) {
    return filters[filters.length - 1].includes(str);
}; // oneTime :: String -> [{}] -> [{}]

var oneTime = function oneTime(calendar, events) {
    return events
        .filter(function (item) {
            return !item.recurrence;
        })
        .map(function (e) {
            // account for all day events and arbitrarily set time to 8am-5pm
            var start = e.start.date
                ? new Date(''.concat(e.start.date, 'T08:00:00'))
                : new Date(e.start.dateTime);
            var end = e.end.date
                ? new Date(''.concat(e.start.date, 'T05:00:00'))
                : new Date(e.end.dateTime);
            return {
                title: e.summary,
                eventType: calendar.name,
                start: start,
                end: end,
                description: e.description,
                location: e.location,
                glink: e.htmlLink,
                meta: e,
            };
        });
}; // recurring :: [{}] -> [{}]

var recurring = function recurring(events) {
    return events
        .filter(function (item) {
            return item.recurrence;
        })
        .map(function (event) {
            return {
                e: event,
                r: event.recurrence[0].split(';'),
            };
        });
}; // recurringByProperty :: [{}] -> Function -> String -> Int -> [{}]

var recurringByProperty = function recurringByProperty(
    events,
    fn,
    calendar,
    occurences,
) {
    return [].concat.apply([], events).map(function (event) {
        return fn(calendar, occurences, event);
    });
}; // removeCancelled :: [{}] -> [{}]

var removeCancelled = function removeCancelled(events) {
    return events.filter(function (item) {
        return item.status !== 'cancelled';
    });
}; // removeRecurrenceProperty :: [{}] -> [{}]

var removeRecurrenceProperty = function removeRecurrenceProperty(events) {
    return events.map(function (event) {
        return event.e;
    });
};

module.exports = {
    filterByOneProperty: filterByOneProperty,
    filterIncludesString: filterIncludesString,
    oneTime: oneTime,
    recurring: recurring,
    recurringByProperty: recurringByProperty,
    removeCancelled: removeCancelled,
    removeRecurrenceProperty: removeRecurrenceProperty,
};
