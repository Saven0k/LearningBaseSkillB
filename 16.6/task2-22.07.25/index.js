function greeting() {
  const username = prompt("Введите имя пользователя");
  if (!username) {
    throw new Error("Не введено имя")
  }
}
try { 
  greeting();
} catch(error) { 
  alert(error.message);
}