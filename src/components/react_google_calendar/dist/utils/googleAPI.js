Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var Promise = _interopRequireWildcard(require('bluebird'));

var _algorithms = require('./algorithms');

var _functions = require('./functions');

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc =
                        Object.defineProperty && Object.getOwnPropertyDescriptor
                            ? Object.getOwnPropertyDescriptor(obj, key)
                            : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}

/* eslint-disable-line no-extend-native */ Object.defineProperty(
    Array.prototype,
    'flat',
    {
        value: function value() {
            var depth =
                arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 1;
            return this.reduce(function (flat, toFlatten) {
                return flat.concat(
                    Array.isArray(toFlatten) && depth - 1
                        ? toFlatten.flat(depth - 1)
                        : toFlatten,
                );
            }, []);
        },
    },
);
var _default = {
    /*
     * Get events from all calendars specified and created specified number of recurring events
     */
    getAllCalendars: function getAllCalendars(config) {
        return Promise.map(config.calendars, function (calendar) {
            // get each calendar
            return fetch(
                'https://content.googleapis.com/calendar/v3/calendars/'
                    .concat(calendar.url, '/events?key=')
                    .concat(config.api_key),
            )
                .then(function (res) {
                    return res.json();
                })
                .then(function (res) {
                    var items = res.items;
                    var events = (0, _functions.removeCancelled)(items);
                    var oneTimeEvents = (0, _functions.oneTime)(
                        calendar,
                        events,
                    );
                    var recurringEvents = (0, _functions.recurring)(events);
                    var daily = (0, _functions.filterByOneProperty)(
                        'RRULE:FREQ=DAILY',
                        recurringEvents,
                    );
                    var recurringDaily = (0, _functions.recurringByProperty)(
                        (0, _functions.removeRecurrenceProperty)(daily),
                        _algorithms.handleDaily,
                        calendar,
                        config.dailyRecurrence,
                    ).flat();
                    var weekly = (0, _functions.filterByOneProperty)(
                        'RRULE:FREQ=WEEKLY',
                        recurringEvents,
                    );
                    var recurringWeekly = (0, _functions.recurringByProperty)(
                        (0, _functions.removeRecurrenceProperty)(weekly),
                        _algorithms.handleWeekly,
                        calendar,
                        config.weeklyRecurrence,
                    ).flat();
                    var monthly = (0, _functions.filterByOneProperty)(
                        'RRULE:FREQ=MONTHLY',
                        recurringEvents,
                    ); // dateOfMonth will have only one item in the array, so this will verify "RRULE:FREQ=MONTHLY"

                    var dateOfMonth = monthly.filter(function (item) {
                        return (0,
                        _functions.filterIncludesString)(item.r, 'TH');
                    }); // however, dayOfMonth will have two items in the array
                    // the second item will be like "BYDAY=1FR"

                    var dayOfMonth = monthly.filter(function (item) {
                        return !(0,
                        _functions.filterIncludesString)(item.r, 'TH');
                    });
                    var recurringDateOfMonth = (0,
                    _functions.recurringByProperty)(
                        (0, _functions.removeRecurrenceProperty)(dateOfMonth),
                        _algorithms.handleDateOfMonth,
                        calendar,
                        config.monthlyRecurrence,
                    ).flat();
                    var recurringDayOfMonth = (0,
                    _functions.recurringByProperty)(
                        (0, _functions.removeRecurrenceProperty)(dayOfMonth),
                        _algorithms.handleDayOfMonth,
                        calendar,
                        config.monthlyRecurrence,
                    ).flat();
                    var allEvents = [].concat(
                        oneTimeEvents,
                        recurringDaily,
                        recurringWeekly,
                        recurringDateOfMonth,
                        recurringDayOfMonth,
                    );
                    return allEvents.flat();
                });
        }).then(function (allEvents) {
            return [].concat.apply([], allEvents);
        });
    },
};
exports.default = _default;
