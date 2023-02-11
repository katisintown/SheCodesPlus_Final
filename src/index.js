//Get double digits for values under 10 - necessary to display date correctly
function getDoubleDigits(digit) {
  if (digit < 10) {
    return `0${digit}`;
  } else {
    return `${digit}`;
  }
}

//Change numbers to ordinal rank of a date (e.g. 1st, 2nd, 3rd,)
function getOrdinalRank(day) {
  if (day === 1 || day === 21 || day === 31) {
    return "st";
  } else {
    if (day === 2 || day === 22) {
      return "nd";
    } else {
      if (day === 3 || day === 23) {
        return "rd";
      } else {
        return "th";
      }
    }
  }
}

//Display current date
function displayCurrentDate(response) {
  let now = new Date(response.data.timestamp * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = now.getDate();
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  let ordinalRank = getOrdinalRank(date);

  let currentDate = document.querySelector("#date");
  currentDate.innerHTML = `${day}, ${month} ${date}${ordinalRank} ${year}`;
}
