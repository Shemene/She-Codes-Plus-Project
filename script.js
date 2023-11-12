// display the current date and time using JavaScript: Tuesday
document.addEventListener("DOMContentLoaded", function () {
  let now = new Date();

  let listItem = document.querySelector("#date");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()]; // return a value between 0-6 for the day
  let hours = now.getHours(); //get hours
  let minutes = now.getMinutes(); // get minutes
  let amOrPm = hours >= 12 ? "PM" : "AM"; //am or pm

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let formattedTime = `${day}  ${hours}:${minutes} ${amOrPm}`;
  listItem.innerHTML = `${formattedTime}`;
});

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#search-city");
  let searchInput = document.querySelector("#search-input");
  let cityHeading = document.querySelector("#city");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    cityHeading.innerHTML = `${searchInput.value}`;
  });
});
