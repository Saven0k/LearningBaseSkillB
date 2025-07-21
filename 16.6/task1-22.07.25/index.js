function hello() {
  console.log('Skill');
}
try { 
  helo();
} catch (e) {
    // throw new Error("Ошибка в функции hello()")
    console.error('Произошла ошибка:', e);
}
console.log('complete');