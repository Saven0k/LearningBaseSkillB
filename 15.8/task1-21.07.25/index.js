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
  console.log("Filtering started...");

  const filterParams = {
    title: title.value || ' ',
    genre: genre.value || ' ',
    releaseYear: year.value || ' ',
    isWatched: bool.value === " " // Преобразуем строку в boolean
  };

  filterFilm(filterParams);
};

async function filterFilm(params) {
  try {
    const url = new URL("https://sb-film.skillbox.cc/films");

    if (params.title && params.title !== "null") {
      url.searchParams.append("title", params.title);
    }
    if (params.genre && params.genre !== "null") {
      url.searchParams.append("genre", params.genre);
    }
    if (params.releaseYear && params.releaseYear !== "null") {
      url.searchParams.append("releaseYear", params.releaseYear);
    }
    if (params.isWatched !== undefined) {
      url.searchParams.append("isWatched", params.isWatched);
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        email: "ovikdevil@gmail.com",
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const films = await response.json();
    updateTable(films);
  } catch (error) {
    console.error("Error during filtering:", error);
    const filmTableBody = document.getElementById("film-tbody");
    filmTableBody.innerHTML = `<tr><td colspan="5">Error loading data: ${error.message}</td></tr>`;
  }
}
function updateTable(films) {
  const filmTableBody = document.getElementById("film-tbody");
  filmTableBody.innerHTML = "";

  if (films.length === 0) {
    filmTableBody.innerHTML = "<tr><td colspan='5'>No films found</td></tr>";
    return;
  }

  films.forEach(film => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td><button class="deleteFIlm" onclick="deleteFilm('${film.id}')">Удалить</button></td>
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

  // console.log(film); ИЛИ ИЛИ
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
  // const films = JSON.parse(localStorage.getItem("films")) || []; Вопрос большой на счет такого
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");

  // База, что бы сразу и красиво
  filmTableBody.innerHTML = "";

  // СРазу заполнили
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

// Сразу при нажатии
document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);


// НАРИСОВАЛИ
renderTable();