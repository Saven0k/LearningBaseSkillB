document.addEventListener('DOMContentLoaded', function() {
  const filmForm = document.getElementById('film-form');
  const filmTbody = document.getElementById('film-tbody');
  const sortSelect = document.getElementById('select');
  const sortButton = document.querySelector('.sort');
  let films = JSON.parse(localStorage.getItem('films')) || [];
  let editingFilmId = null;

  renderFilmsTable(); // Тупо для красоты, что бы не париться с постоянным создаванием элементов

  filmForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const filmData = {
      id: editingFilmId || Date.now().toString(), // Единственный вариант четкого удаления и редактирования по этому полю
      title: document.getElementById('title').value,
      genre: document.getElementById('genre').value,
      releaseYear: document.getElementById('releaseYear').value,
      isWatched: document.getElementById('isWatched').checkedr
    };

    if (editingFilmId) {
      const index = films.findIndex(f => f.id === editingFilmId);
      if (index !== -1) {
        films[index] = filmData;
      }
      editingFilmId = null;
    } else {
      films.push(filmData);
    }

    saveFilms(); // СОхранили 
     renderFilmsTable(); // Заново табличку отрисовали  с новыми даннами
    filmForm.reset(); // Форму чистанули
  });
  function renderFilmsTable() {
    filmTbody.innerHTML = '';
    
    films.forEach(film => {
      const tr = document.createElement('tr');
      
      tr.innerHTML = `
        <td>${film.title}</td>
        <td>${film.genre}</td>
        <td>${film.releaseYear}</td>
        <td>${film.isWatched ? 'Да' : 'Нет'}</td>
        <td>
          <button class="edit" data-id="${film.id}">Редактировать</button>
          <button class="delete" data-id="${film.id}">Удалить</button>
        </td>
      `;
      
      filmTbody.appendChild(tr);
    });
 
    // Что бы не переписывать кучу кода раз за разом вынесли ae 2x
    document.querySelectorAll('.delete').forEach(btn => {
      btn.addEventListener('click', handleDelete);
    });

    document.querySelectorAll('.edit').forEach(btn => {
      btn.addEventListener('click', handleEdit);
    });
  }

  // По другому не знаю как(
  function handleDelete(e) {
    const filmId = e.target.getAttribute('data-id');
    films = films.filter(film => film.id !== filmId);
    saveFilms();
    renderFilmsTable();
  }

  function handleEdit(e) {
    const filmId = e.target.getAttribute('data-id');
    const filmToEdit = films.find(film => film.id === filmId);
    
    // Базовая подставновка, но можно было обектом возвращать
    if (filmToEdit) {
      document.getElementById('title').value = filmToEdit.title;
      document.getElementById('genre').value = filmToEdit.genre;
      document.getElementById('releaseYear').value = filmToEdit.releaseYear;
      document.getElementById('isWatched').checked = filmToEdit.isWatched;
      editingFilmId = filmToEdit.id;
      
      filmForm.scrollIntoView({ behavior: 'smooth' }); // красивый скролл (гуглил)
    }
  }

  sortButton.addEventListener('click', function() {
    const sortBy = sortSelect.value;
    
    switch(sortBy) {
      case 'year':
        films.sort((a, b) => a.releaseYear - b.releaseYear);
        break;
      case 'type':
        films.sort((a, b) => a.genre.localeCompare(b.genre));
        break;
      case 'name':
        films.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    
    saveFilms(); // добавили в локу
    renderFilmsTable(); // отрисовали по новым данным
  });

  function saveFilms() {
    localStorage.setItem('films', JSON.stringify(films));
  }
});