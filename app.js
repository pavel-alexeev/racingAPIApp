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
      const completed = () => {
        if (race.status === "Completed") {
          raceTrack = `<li class="completed">${race.competition.name}</li>`;
        } else {
          raceTrack = `<li>${race.competition.name}</li>`;
        }
      };

      completed();
      const time = `${new Date(race.date).toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}`;
      //   const status = race.status;

      document.querySelector("ul").insertAdjacentHTML("beforeend", raceTrack);
      document.querySelector("ul").insertAdjacentHTML("beforeend", time);
      //   document.querySelector("ul").insertAdjacentHTML("beforeend", status);
    })
  )
  .catch((err) => console.error(err));

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
