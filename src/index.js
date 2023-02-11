//Get double digits for values under 10 - necessary to display date correctly
let currentDate = new Date();
let date = document.querySelector("#date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[currentDate.getDay()];
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  date.innerHTML = `${day} </br> ${hours} : 0${minutes}`;
} else {
  date.innerHTML = `${day} </br> ${hours} : ${minutes}`;
}
