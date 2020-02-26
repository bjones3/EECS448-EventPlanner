
/**
 * @file event.js
 * @allows event creation
 * @param {object}  - creator, eventName, time, time24, day, month, year
 * @return returns the event
 */
function createEvent(creator, eventName, time, time24, day, month, year) {

    event = { creator:   creator,
              eventName: eventName,
              time:      time,
	      time24:    time24,
              day:       day,
              month:     month,
              year:      year
            };

    return event;
};
