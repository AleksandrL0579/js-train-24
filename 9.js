console.log("Завдання: 9 ==============================");

function task9() {
  fetchWithError()
  .then((data) => {
    console.log("Дані з сервера:", data);
  })
  .catch((error) => {
    console.error(error.stack);
  });
function fetchWithError() {
  const errorMessage = "Помилка при з'єднанні з сервером";
  return Promise.reject(new Error(errorMessage));
}
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task9();
