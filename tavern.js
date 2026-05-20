/**
 * Модуль керування Портовою Таверною
 */

// Отримуємо елементи інтерфейсу таверни
const tavernGreeting = document.getElementById('tavernGreeting');
const drinkRumBtn = document.getElementById('drinkRumBtn');
const changeUserBtn = document.getElementById('changeUserBtn');

// Функція активації екрану таверни (викликається з головного файлу index)
function initTavern(pirateName) {
    // Ховаємо екрани завантаження та реєстрації
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('authScreen').style.display = 'none';
    
    // Виводимо привітання
    tavernGreeting.innerText = `Привіт, Капітане1 ${pirateName}! 👋`;
    
    // Показуємо таверну
    document.getElementById('tavernScreen').style.display = 'block';
    
    console.log(`Успішно завантажено таверну для: ${pirateName}`);
}

// Логіка кнопки "Замовити ром"
drinkRumBtn.addEventListener('click', () => {
    const currentPirate = localStorage.getItem('active_pirate_name');
    alert(`🍻 Гарний вибір, капітане ${currentPirate}! Бармен наливає тобі кухіль міцного рому!`);
});

// Кнопка зміни користувача (повернення в меню)
changeUserBtn.addEventListener('click', () => {
    // Стираємо активного перса з пам'яті пристрою
    localStorage.removeItem('active_pirate_name');
    
    // Очищуємо поля введення на першому екрані
    document.getElementById('loginUsername').value = "";
    document.getElementById('regUsername').value = "";
    document.getElementById('termsCheckbox').checked = false;
    
    // Викликаємо функцію показу меню авторизації, яка оголошена в index
    showAuthMenu();
});
