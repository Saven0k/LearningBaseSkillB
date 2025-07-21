function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  addFilm(film);
}

const title = document.querySelector('.title')
const genre = document.querySelector('.genre')
const year = document.querySelector('.year')
const bool = document.querySelector('.bool')

document.querySelector(".inputs").querySelectorAll('.input').forEach(input => {
  input.addEventListener('change', () => {
    console.log("aaa")
    filterFunc(input.value)
  })
})

const filterFunc = () => {
  console.log(1);

  setTimeout(() => {
    if (title.value.length > 0) {
      filterFilm("title", title.value)
      genre.value = ''
      year.value = ''
      bool.value = 'true'
      title.value = ''
      return;
    }
    if (genre.value.length > 0) {
      filterFilm("genre", genre.value)
      title.value = ''
      year.value = ''
      bool.value = 'true'
      genre.value = ''
      return;
    }
    if (year.value.length > 0) {
      filterFilm("releaseYear", year.value)
      genre.value = ''
      title.value = ''
      bool.value = 'true'
      year.value = ''
      return;
    }
    if (bool.value.length > 0) {
      filterFilm("isWatched", bool.value)
      genre.value = ''
      year.value = ''
      title.value = ''
      bool.value = 'true'
      return;
    }
  }, 1000)
}


async function filterFilm(pol, params) {
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: `ovikdevil@gmail.com`,
    },
    body: JSON.stringify({ // Данные передаем в `body`
      title: title.value || "null",
      genre: genre.value || "null",
      releaseYear: year.value || "null",
      isWatched: bool.value || true, // Лучше использовать true/false вместо "Да"/"Нет"
    }),
  });
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td><button class="deleteFIlm" onclick="deleteFilm(film.id)">Удалить</button></td>
    `;
    filmTableBody.appendChild(row);
  });
}

async function deleteFilm(filmId) {
  const films = await fetch(`https://sb-film.skillbox.cc/films/${filmId}`, {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  renderTable();
}

async function deleteAllFilms() {
  const films = await fetch(`https://sb-film.skillbox.cc/films`, {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  renderTable();
}

async function addFilm(film) {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  // films.push(film);
  // localStorage.setItem("films", JSON.stringify(films));

  // console.log(film);
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "ovikdevil@gmail.com",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

async function renderTable() {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td><button class="deleteFIlm" onclick="deleteFilm(${film.id})">Удалить</button></td>

    `;
    filmTableBody.appendChild(row);
  });
}

document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

// Display films on load
renderTable();