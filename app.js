const options = {
  method: "GET",
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
      let webLink = race.competition.name.replace("Grand Prix", "");
      const time = `${new Date(race.date).toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}`;
      const completed = () => {
        if (race.status === "Completed") {
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

const btn = document.querySelector(".switch-btn");
const f1 = document.querySelector(".f1");
const motogp = document.querySelector(".motogp");

btn.addEventListener("click", function () {
  btn.classList.toggle("slide");

  if (
    document.body.style.backgroundImage !==
    `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./img/pic2.jpg")`
  ) {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./img/pic2.jpg") `;
    motogp.classList.add("largeFont");
    f1.classList.remove("largeFont");
    document.querySelector("ul").classList.remove("green");
    document.querySelector("ul").classList.add("red");
  } else {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./img/pic1.jpg")`;
    motogp.classList.remove("largeFont");
    f1.classList.add("largeFont");
    document.querySelector("ul").classList.remove("red");
    document.querySelector("ul").classList.add("green");
  }
});

function getTimestampInSeconds() {
  return Math.floor(Date.now() / 1000);
}

console.log(getTimestampInSeconds());
const uncompletedRaces = document.querySelector(".uncompleted");

// Next GP countdown timer
let countDownDate = new Date("Apr 30, 2023 12:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    "     " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
