// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ec84f86810msh1f3da5bddba85bfp1888e6jsn272661a372e6",
//     "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://api-formula-1.p.rapidapi.com/races?type=race&timezone=Europe%2FLondon&season=2023",
//   options
// )
//   .then((response) => response.json())
//   .then((data) =>
//     data.response.forEach((race) => {
//       let raceTrack;
//       let webLink = race.competition.name.replace("Grand Prix", "");
//       const time = `${new Date(race.date).toLocaleString("en-GB", {
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//       })}`;
//       const completed = () => {
//         if (race.status === "Completed") {
//           raceTrack = `<a href=""><li class="completed">${race.competition.name}<br>${time}</li></a>`;
//           document
//             .querySelector(".completed ul")
//             .insertAdjacentHTML("beforeend", raceTrack);
//         } else {
//           raceTrack = `<a href=""><li>${race.competition.name}<br>${time}</li></a>`;
//           document
//             .querySelector(".uncompleted ul")
//             .insertAdjacentHTML("beforeend", raceTrack);
//         }
//       };
//       console.log(webLink);
//       completed();

//       //   const status = race.status;

//       // document.querySelector("ul").insertAdjacentHTML("beforeend", time);
//       //   document.querySelector("ul").insertAdjacentHTML("beforeend", status);
//     })
//   )
//   .catch((err) => console.error(err));

// Dynamic footer year
const date = document.getElementById("date");
date.appendChild(document.createTextNode(new Date().getFullYear()));

const btn = document.querySelector(".switch-btn");
// const body = document.getElementsByTagName("body");
const cont2 = document.querySelector(".container-2");
const hidden = document.querySelector(".hidden");
const mainContainer = document.querySelector(".main-container");
const f1 = document.querySelector(".f1");
const motogp = document.querySelector(".motogp");
const largeFont = document.getElementsByClassName("largeFont");
const container = document.querySelector("container");
const container2 = document.querySelector("container-2");

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

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ec84f86810msh1f3da5bddba85bfp1888e6jsn272661a372e6",
//     "X-RapidAPI-Host": "motorsportapi.p.rapidapi.com",
//   },
// };

// fetch("https://motorsportapi.p.rapidapi.com/api/motorsport/categories", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response.categories[11]))
//   .catch((err) => console.error(err));
