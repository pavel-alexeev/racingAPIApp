// API call for racing schedule
const options = {
  method: "GET",
  cache: "force-cache",
  headers: {
    "X-RapidAPI-Key": "ec84f86810msh1f3da5bddba85bfp1888e6jsn272661a372e6",
    "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
  },
};

fetch(
  "https://api-formula-1.p.rapidapi.com/races?type=race&timezone=Europe%2FLondon&season=2023",
  options
)
  .then((response) => response.json())
  .then((data) =>
    data.response.forEach((race) => {
      let raceTrack;
      const time = `${new Date(race.date).toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}`;
      const completed = () => {
        if (race.status === "Completed" || race.status === "Cancelled") {
          raceTrack = `<li>${race.competition.name}<br>${time}</li>`;
          document
            .querySelector(".completed-sub")
            .insertAdjacentHTML("beforeend", raceTrack);
        } else {
          raceTrack = `<li>${race.competition.name}<br>${time}</li>`;
          document
            .querySelector(".uncompleted-sub")
            .insertAdjacentHTML("beforeend", raceTrack);
        }
      };

      completed();
    })
  )
  .catch((err) => console.error(err));

// Dynamic footer year
const date = document.getElementById("date");
date.appendChild(document.createTextNode(new Date().getFullYear()));

// Button toggle
const btn = document.querySelector(".switch-btn");
const f1 = document.querySelector(".f1");
const motogp = document.querySelector(".motogp");
const lists = document.querySelector(".lists");
const subText = document.querySelector(".subText");
const timer = document.querySelector(".timer");

btn.addEventListener("click", function () {
  btn.classList.toggle("slide");

  if (
    document.body.style.backgroundImage !==
    `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./img/pic2.jpg")`
  ) {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./img/pic2.jpg") `;
    motogp.classList.add("largeFont");
    f1.classList.remove("largeFont");
    subText.style.display = "block";
    lists.style.display = "none";
    timer.style.display = "none";
  } else {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./img/pic1.jpg")`;
    motogp.classList.remove("largeFont");
    f1.classList.add("largeFont");
    subText.style.display = "none";
    timer.style.display = "block";
    const mediaQuery = window.matchMedia("(max-width: 850px)");
    if (mediaQuery.matches) {
      lists.style.display = "block";
    } else {
      lists.style.display = "grid";
    }
  }
});

// Next GP countdown timer
let countDownDate = new Date("May 28, 2023 14:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    "     " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  document.getElementById("mobileTimer").innerHTML =
    "     " + days + " days | " + hours + " hours | " + minutes + " minutes";
}, 1000);
