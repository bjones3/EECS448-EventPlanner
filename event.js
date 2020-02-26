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
