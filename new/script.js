let today = new Date();
let current_month = today.getMonth();
let current_year = today.getFullYear();

let prev_month_btn = document.querySelector(".prev-month");
let next_month_btn = document.querySelector(".next-month");
let month_undo_btn = document.querySelector(".month-undo");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

prev_month_btn.addEventListener("click", function(e){
  e.preventDefault();
  if(current_month === 0){
    current_year = current_year - 1;
  }
  if(current_month === 0){
    current_month = 11;
  }else{
    current_month = current_month - 1;
  }
  generate_calendar(current_month, current_year);
});

next_month_btn.addEventListener("click", function(e){
  e.preventDefault();
  if(current_month == 11){
    current_year ++;
  }
  if(current_month < 11){
    current_month ++;
  }else{
    current_month = 0;
  }
  generate_calendar(current_month, current_year);
});

month_undo_btn.addEventListener("click", function(e){
  current_month = today.getMonth();
  current_year = today.getFullYear();
  generate_calendar(current_month, current_year);
});

generate_calendar(current_month, current_year);

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function generate_calendar(month, year){
  let first_day = (new Date(year, month)).getDay();
  
  console.log(first_day);
  
  let calendar_body = document.querySelector("#calendarBody");
  let picked_month_span = document.querySelector(".picked-month");
  let picked_year_span = document.querySelector(".picked-year");
  
  calendar_body.innerHTML = "";
  
  picked_month_span.innerHTML = "";
  picked_month_span.innerHTML = months[month];
  
  picked_year_span.innerHTML = "";
  picked_year_span.innerHTML = year;
  
  let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < first_day) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }

            else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("active-day");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        calendar_body.appendChild(row); // appending each row into calendar body.
    }
}

let cardElement = document.querySelector(".card");
let edit_icon = document.querySelector(".edit");

edit_icon.addEventListener("click", flip);

function flip(){
  cardElement.classList.toggle("flipped")
}

function startTime() {
    var weekday = new Array();
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var y = today.getFullYear();
    var wd = weekday[today.getDay()];
    var mt = month[today.getMonth()];
  
    m = checkTime(m);
    s = checkTime(s);
                    document.getElementById('date').innerHTML =
    d;
 document.getElementById('day').innerHTML =
    wd;
 document.getElementById('month').innerHTML =
    mt + "-" + y;
    
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
