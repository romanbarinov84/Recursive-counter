function counter(num) {
    if (num <= 0) {
      document.getElementById("countDisplay").textContent = "Счёт завершён";
      return;
    }
    document.getElementById("countDisplay").textContent = num;
    setTimeout(() => counter(num - 1), 1000); // Рекурсивный вызов с задержкой 1 секунда
  }
  
  document.getElementById("startButton").addEventListener("click", () => {
    counter(10); // Начинаем счёт с 5
  });
  