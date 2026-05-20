/**
 * Модуль керування локацією: Піратська пристань
 */

// Отримуємо елементи інтерфейсу пристані
const cityGreeting = document.getElementById('cityGreeting');
const explorePortBtn = document.getElementById('explorePortBtn');
const changeUserBtn = document.getElementById('changeUserBtn');

// Функція активації екрану міста
function initCity(pirateName) {
    // Ховаємо екрани завантаження та реєстрації
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('authScreen').style.display = 'none';
    
    // Виводимо персоналізоване привітання на пристані
    cityGreeting.innerText = `Ласкаво просимо на пристань, Капітане ${pirateName}! ⚓`;
    
    // Показуємо місто
    document.getElementById('cityScreen').style.display = 'block';
    
    console.log(`Успішно завантажено Піратську пристань для: ${pirateName}`);
}

// Логіка кнопки "Оглянути порт"
explorePortBtn.addEventListener('click', () => {
    const currentPirate = localStorage.getItem('active_pirate_name');
    alert(`🌊 Капітан ${currentPirate} оглядає горизонт. Швартуються кораблі, кричать чайки, а крики з портової таверни чути аж сюди!`);
});

// Кнопка зміни користувача (повернення в меню)
changeUserBtn.addEventListener('click', () => {
    localStorage.removeItem('active_pirate_name');
    
    document.getElementById('loginUsername').value = "";
    document.getElementById('regUsername').value = "";
    document.getElementById('termsCheckbox').checked = false;
    
    showAuthMenu(); // Викликаємо функцію з головного файлу
});
