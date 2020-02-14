//enter name
//chose mode
//load correct html

window.addEventListener('DOMContentLoaded', (event) => {
    let day = "-1";
    let days = document.getElementsByClassName("day");
    let time = "-1";
    let times = document.getElementsByClassName("time");
    let userName = document.getElementById("userName");
    let eventName = document.getElementById("eventName");

    window.onclick = e => {
        if (e.target.className == "day")
        {
            day = e.target.innerHTML;
            for (let i = 0; i < days.length; i++)
            {
          	     days[i].style.backgroundColor = "";
            }
            e.target.style.backgroundColor = "green";
        }
        else if (e.target.className == "time")
        {
            time = e.target.previousElementSibling.innerHTML;
            if (e.target.style.backgroundColor != "green")
                e.target.style.backgroundColor = "green";
            else
                e.target.style.backgroundColor = "";
        }
    };

    document.getElementById("btn").addEventListener("click", function() {
      if (day != "-1" && time != "-1")
      	displayEvent();
    });
    
    userName.addEventListener("input", displayEvent);
    eventName.addEventListener("input", displayEvent);

    function displayEvent() {
        document.getElementById("display").innerHTML = "The user " + userName.value + " has created the event " + eventName.value + " on day " + day + " at time " + time;
    };
});
