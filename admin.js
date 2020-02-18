//enter name
//chose mode
//load correct html

//TODO - The monthly calendar needs to be updated to include buttons and/or
//       dropdown lists to select month and year.
//TODO - The monthly calendar needs to be updated so that days are valid for
//       each particular month, and so days properly align with the days of the
//       week.

window.addEventListener('DOMContentLoaded', (event) => {
    let time = [];
    let day = 99;
    let month = 99;
    let year = 9999;

    //TODO - the creator variable's value should be obtained from another part
    //       of our program, and not found from the admin HTML page as we should
    //       already know it before loading this page.
    let creator = "Bob";
    document.querySelector("#creator").innerHTML += creator;
    let eventName = document.querySelector("#eventName");

    window.onclick = e => {
        let element = e.target;
        if (element.className == "day")
        {
            day = element.innerHTML;
            for (days of document.getElementsByClassName("day"))
                days.style.backgroundColor = "";
            element.style.backgroundColor = "lightgreen";
        }
        else if (element.className == "time")
        {
            let row = element.closest("tr").rowIndex;
            let column = element.cellIndex;
            let timeIndex = column * 3 + row - 4;

            if (time[timeIndex])
            {
                time[timeIndex] = undefined;
                element.style.backgroundColor = "";
            }
            else
            {
                time[timeIndex] = [creator];
                element.style.backgroundColor = "lightgreen";
            }
        }
    };

    document.getElementById("btnAddEvent").addEventListener("click", function() {
        newEvent = createEvent(creator, eventName.value, time, day, month, year);
        displayEventData();

        //TOTO - add newEvent to JSON File, maybe put a function for doing so
        //       in the event.js file
    });

    eventName.addEventListener("input", displayEventData);

    function timeToStringArray(time) {
        let strArray = [];

        for (i in time)
        {
            if (time[i])
            {
                let row = i % 3;
                let column = Math.floor(i / 3);
                let timeString = "";

                if (column >= 0 && column <= 6)
                    timeString += (column + 5);
                else
                    timeString += (column + 6);
                timeString += ":" + (row * 20);
                if (row == 0)
                    timeString += 0;
                strArray.push(timeString);
            }
        }
        return (strArray);
    }

    function displayEventData() {
        document.getElementById("display").innerHTML = "User " + creator +
        " has created the event " + eventName.value + " on " + month + "/" +
        day + "/" + year + " at times " + timeToStringArray(time);
    };
});
