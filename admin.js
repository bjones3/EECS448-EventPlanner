//enter name
//chose mode
//load correct html

//TODO - The monthly calendar needs to be updated to include buttons and/or
//       dropdown lists to select month and year.
//TODO - The monthly calendar needs to be updated so that days are valid for
//       each particular month, and so days properly align with the days of the
//       week.


//TEST ARRAY OF OBJECTS
let jsonArray = [
{
    "creator": "Michael",
    "eventName": "Superbowl",
    "time":
    [
        undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined,
        ["Michael"], ["Michael"], ["Michael"], ["Michael"], ["Michael"], ["Michael"],
    ],
    "day": 20,
    "month": 2,
    "year": 2020
},
{
    "creator": "Brian",
    "eventName": "Meeting",
    "time":
    [
        undefined, undefined, undefined, undefined, undefined, undefined,
        ["Brian"], ["Brian", "Michael"], ["Brian", "Michael"], ["Brian", "Michael"], ["Brian"], ["Brian"]
    ],
    "day": 20,
    "month": 2,
    "year": 2020
},
{
    "creator": "Michael",
    "eventName": "Party",
    "time":
    [
        undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined,
        ["Michael"], ["Michael"], ["Michael"], ["Michael"], ["Michael"], ["Michael"],
        undefined, undefined, undefined, undefined, undefined, undefined,
        ["Michael"], ["Michael"], ["Michael"], ["Michael"], ["Michael"], ["Michael"]
    ],
    "day": 20,
    "month": 2,
    "year": 2020
}
]

window.addEventListener('DOMContentLoaded', (event) => {
    let time = [];
    let day = 20;
    let month = 2;
    let year = 2020;
    let leapYear = false;

    let yearSelection = document.getElementById("year");
    let choices = [2020];
    for(let i = 0; i < 201; i++){
	choices = choices.concat(choices[i]+1);
	let cho = choices[i];
	let child = document.createElement("option");
	child.textContent = cho;
	child.value = cho;
	yearSelection.appendChild(child);
    }

  

    document.getElementById("month").onchange = function(){
	let month = document.getElementById("month");
	document.getElementById("pickedMonth").value = month.options[month.selectedIndex].text;
	if(document.getElementById("pickedMonth").value === "January" || document.getElementById("pickedMonth").value === "March"
	   || document.getElementById("pickedMonth").value === "May" || document.getElementById("pickedMonth").value === "July"
           || document.getElementById("pickedMonth").value === "August" || document.getElementById("pickedMonth").value === "October"
           || document.getElementById("pickedMonth").value === "December")
	   {
		document.getElementById("tbl31").style.display = "table";
		document.getElementById("tbl30").style.display = "none";
		document.getElementById("tbl29").style.display = "none";
		document.getElementById("tbl28").style.display = "none";
	   }
	else if(document.getElementById("pickedMonth").value === "April" || document.getElementById("pickedMonth").value === "June"
		|| document.getElementById("pickedMonth").value === "September" || document.getElementById("pickedMonth").value === "November")
	   {
	 	document.getElementById("tbl31").style.display = "none";
		document.getElementById("tbl30").style.display = "table";
		document.getElementById("tbl29").style.display = "none";
		document.getElementById("tbl28").style.display = "none";
	   }
	else if(leapYear == true)
	   {
		document.getElementById("tbl31").style.display = "none";
		document.getElementById("tbl30").style.display = "none";
		document.getElementById("tbl29").style.display = "table";
		document.getElementById("tbl28").style.display = "none";
	   }
	else
	   {
		document.getElementById("tbl31").style.display = "none";
		document.getElementById("tbl30").style.display = "none";
		document.getElementById("tbl29").style.display = "none";
		document.getElementById("tbl28").style.display = "table";
	   }
	}
    document.getElementById("year").onchange = function(){
	let year = document.getElementById("year");
	document.getElementById("pickedYear").value = year.options[year.selectedIndex].text;
	//is leap year
	if((((document.getElementById("pickedYear").value % 4) == 0) && ((document.getElementById("pickedYear").value % 100) != 0))
	     || ((document.getElementById("pickedYear").value % 400) == 0))
	  {
	    leapYear = true;
	    if(document.getElementById("pickedMonth").value === "February")
	    {
		document.getElementById("tbl31").style.display = "none";
		document.getElementById("tbl30").style.display = "none";
		document.getElementById("tbl29").style.display = "table";
		document.getElementById("tbl28").style.display = "none";
	    }
	  }
	//not leap year
	else
	  {
	    leapYear = false;
	    if(document.getElementById("pickedMonth").value === "February")
	    {
		document.getElementById("tbl31").style.display = "none";
		document.getElementById("tbl30").style.display = "none";
		document.getElementById("tbl29").style.display = "none";
		document.getElementById("tbl28").style.display = "table";
	    }
	  }
	}

    //takes user from Index.js
	//var user = window.localStorage.getItem('user');
	// set creator to user variable from Index.js
    let creator = window.localStorage.getItem('user');
    let eventName = document.querySelector("#eventName");
    document.querySelector("#creator").innerHTML += creator;

    //TODO - Read in json file. Convert JSON to array of objects -> jsonArray variable

    //EVENT LISTENERS
    window.onclick = e => {
        let element = e.target;
        if (element.className == "day")
        {
            if (day != element.innerHTML)
            {
                day = element.innerHTML;
                updateTimesTable();
                for (days of document.getElementsByClassName("day"))
                    days.style.backgroundColor = "";
                element.style.backgroundColor = "lightgreen";
            }
        }
        else if (element.className == "time" || element.className == "time24")
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
                if (element.style.backgroundColor != "lightblue")
                {
                    time[timeIndex] = [creator];
                    element.style.backgroundColor = "lightgreen";
                }
            }
        }
    };
    document.getElementById("btnAddEvent").addEventListener("click", function() {
        newEvent = createEvent(creator, eventName.value, time, day, month, year);

 

        jsonArray.push(newEvent);
        updateTimesTable();
        displayEventData();
        time = [];


        //TODO - Either add newEvent to JSON File, maybe put a function for
        //       doing so, in the event.js file, or completely write over file
        //       with jsonArray
    });

    //Toggles between 12 hour and 24 hour mode
    document.getElementById("toggleTime").addEventListener("click", function(button){
	if(document.getElementById("tblTimes").style.display === "none")
	{
		document.getElementById("tblTimes").style.display = "table";
		document.getElementById("tblTimes24").style.display = "none";
		document.getElementById("12hour").style.display = "inline";
		document.getElementById("24hour").style.display = "none";
	}
	else
	{
		document.getElementById("tblTimes").style.display = "none";
		document.getElementById("tblTimes24").style.display = "table";
		document.getElementById("12hour").style.display = "none";
		document.getElementById("24hour").style.display = "inline";
	}
    });


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
    };

    function clearTimesTable() {
        for (let time of document.getElementsByClassName("time"))
        {
            time.innerHTML = "";
            time.style.backgroundColor = "";
        }
	for (let time24 of document.getElementsByClassName("time24"))
        {
            time24.innerHTML = "";
            time24.style.backgroundColor = "";
        }
    }

    function updateTimesTable() {
        let tableTimes = document.querySelector("#tblTimes");
	let tableTimes24 = document.querySelector("#tblTimes24");

        clearTimesTable();
        for (eventObject of jsonArray)
        {
            if (eventObject.day == day && eventObject.month == month && eventObject.year == year)
            {
                for  (i in eventObject.time)
                {
                    if (eventObject.time[i])
                    {
                        let timeElement = tableTimes.rows[i % 3 + 1].cells[Math.floor(i / 3) + 1];
			let timeElement24 = tableTimes24.rows[i % 3 + 1].cells[Math.floor(i / 3) + 1];
                        timeElement.style.backgroundColor = "lightblue";
                        timeElement.innerHTML = eventObject.eventName;
                        timeElement.innerHTML += "\n";
                        timeElement.innerHTML += eventObject.time[i];
			timeElement24.style.backgroundColor = "lightblue";
                        timeElement24.innerHTML = eventObject.eventName;
                        timeElement24.innerHTML += "\n";
                        timeElement24.innerHTML += eventObject.time[i];
                    }
                }
            }
        }
    };

    function displayEventData() {
        document.getElementById("display").innerHTML = "User " + creator +
        " has created the event " + eventName.value + " on " + month + "/" +
        day + "/" + year + " at times " + timeToStringArray(time);
    };
});
