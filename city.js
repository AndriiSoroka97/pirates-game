/**
 * Модуль керування локацією: Піратська пристань (Міський хаб)
 */

// Отримуємо елементи інтерфейсу пристані з index.html
const cityGreeting = document.getElementById('cityGreeting');
const cityScreen = document.getElementById('cityScreen');
const changeUserBtn = document.getElementById('changeUserBtn');

// Функція активації екрану міста
function initCity(pirateName) {
    // Ховаємо екрани завантаження та реєстрації
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('authScreen').style.display = 'none';
    
    // Очищаємо екран міста перед генерацією (щоб кнопки не дублювалися при перезаходах)
    cityScreen.innerHTML = '';

    // 1. Створюємо верхню плашку з ім'ям капітана
    const greetingContainer = document.createElement('div');
    greetingContainer.className = 'city-greeting-box';
    greetingContainer.innerHTML = `⚓ Капітан: <strong style="color: #fff;">${pirateName}</strong>`;
    cityScreen.appendChild(greetingContainer);

    // 2. БЛОК 1: ПРИГОДИ
    const adventureBlock = createLocationBlock('⚔ Пригоди', [
        { name: '🌊 В море!', id: 'btn_sea' },
        { name: '💀 Битви', id: 'btn_battles' },
        { name: '🗺 Пошук скарбів', id: 'btn_treasures' },
        { name: '🐙 Монстри', id: 'btn_monsters' },
        { name: '🧭 Подорожі', id: 'btn_travel' }
    ]);
    cityScreen.appendChild(adventureBlock);

    // 3. БЛОК 2: МІСТО
    const cityBlock = createLocationBlock('🏰 Місто', [
        { name: '🍻 Таверна', id: 'btn_tavern' },
        { name: '🛠 Верфь', id: 'btn_shipyard' },
        { name: '🏴‍☠ Чорний ринок', id: 'btn_blackmarket' },
        { name: '💎 Піратські майстри', id: 'btn_crafters' },
        { name: '🗣 Спілкування', id: 'btn_chat' },
        { name: '🛡 Флоти', id: 'btn_fleets' }
    ]);
    cityScreen.appendChild(cityBlock);

    // 4. Повертаємо кнопку зміни користувача в самий низ
    const logoutBtnContainer = document.createElement('div');
    logoutBtnContainer.style.marginTop = '15px';
    
    const newChangeUserBtn = document.createElement('button');
    newChangeUserBtn.className = 'change-user-btn';
    newChangeUserBtn.innerText = 'Змінити користувача';
    newChangeUserBtn.addEventListener('click', logoutUser);
    
    logoutBtnContainer.appendChild(newChangeUserBtn);
    cityScreen.appendChild(logoutBtnContainer);
    
    // Показуємо місто
    cityScreen.style.display = 'block';
    
    console.log(`Успішно завантажено меню пристані для: ${pirateName}`);
}

// Допоміжна функція для створення блоків меню
function createLocationBlock(title, items) {
    const blockContainer = document.createElement('div');
    blockContainer.className = 'menu-block';

    // Заголовок блоку (червоно-коричнева плашка, як на скріншоті)
    const blockHeader = document.createElement('div');
    blockHeader.className = 'menu-block-header';
    blockHeader.innerText = title;
    blockContainer.appendChild(blockHeader);

    // Список кнопок/посилань
    const listContainer = document.createElement('div');
    listContainer.className = 'menu-list';

    items.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'menu-item';
        listItem.id = item.id;
        listItem.innerText = item.name;

        // Тимчасова заглушка для кліку (потім рознесемо по файлах)
        listItem.addEventListener('click', () => {
            alert(`Локація "${item.name}" в розробці. Скоро піднімемо вітрила туди!`);
        });

        listContainer.appendChild(listItem);
    });

    blockContainer.appendChild(listContainer);
    return blockContainer;
}

// Функція розлогіну
function logoutUser() {
    localStorage.removeItem('active_pirate_name');
    document.getElementById('loginUsername').value = "";
    document.getElementById('regUsername').value = "";
    document.getElementById('termsCheckbox').checked = false;
    showAuthMenu(); // Викликається з index.html
}
