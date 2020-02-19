function createEvent(creator, eventName, time, day, month, year) {

    event = { creator:   creator,
              eventName: eventName,
              time:      time,
              day:       day,
              month:     month,
              year:      year
            };

    return event;
};
