/**
 * Модуль керування локацією: Піратська пристань (Міський хаб)
 */

function initCity(pirateName) {
    const cityScreen = document.getElementById('cityScreen');
    const loadingScreen = document.getElementById('loadingScreen');
    const authScreen = document.getElementById('authScreen');

    if (!cityScreen) return;

    // Ховаємо стартові вікна
    if (loadingScreen) loadingScreen.style.display = 'none';
    if (authScreen) authScreen.style.display = 'none';
    
    // Очищаємо екран міста, щоб нічого не дублювалося
    cityScreen.innerHTML = '';

    // 1. Створюємо верхню інформаційну плашку капітана
    const greetingContainer = document.createElement('div');
    greetingContainer.className = 'city-greeting-box';
    greetingContainer.innerHTML = `⚓ Капітан: <strong style="color: #fff;">${pirateName}</strong>`;
    cityScreen.appendChild(greetingContainer);

    // 2. ГЕНЕРУЄМО БЛОК 1: ПРИГОДИ
    const adventureBlock = createLocationBlock('⚔ Пригоди', [
        { name: '🌊 Море', id: 'btn_sea' },
        { name: '💀 Битви', id: 'btn_battles' },
        { name: '🗺 Пошук скарбів', id: 'btn_treasures' },
        { name: '🐙 Монстри', id: 'btn_monsters' },
        { name: '🧭 Подорожі', id: 'btn_travel' }
    ]);
    cityScreen.appendChild(adventureBlock);

    // 3. ГЕНЕРУЄМО БЛОК 2: МІСТО
    const cityBlock = createLocationBlock('🏰 Місто', [
        { name: '🍻 Таверна', id: 'btn_tavern' },
        { name: '🛠 Верфь', id: 'btn_shipyard' },
        { name: '🏴‍☠ Чорний ринок', id: 'btn_blackmarket' },
        { name: '💎 Піратські майстри', id: 'btn_crafters' },
        { name: '🗣 Спілкування', id: 'btn_chat' },
        { name: '🛡 Флоти', id: 'btn_fleets' }
    ]);
    cityScreen.appendChild(cityBlock);

    // 4. Додаємо кнопку зміни користувача в самий ніг екрана
    const logoutBtnContainer = document.createElement('div');
    logoutBtnContainer.style.textAlign = 'center';
    logoutBtnContainer.style.marginTop = '20px';
    
    const newChangeUserBtn = document.createElement('button');
    newChangeUserBtn.className = 'change-user-btn';
    newChangeUserBtn.innerText = 'Змінити користувача';
    newChangeUserBtn.addEventListener('click', logoutUser);
    
    logoutBtnContainer.appendChild(newChangeUserBtn);
    cityScreen.appendChild(logoutBtnContainer);
    
    // Робимо екран міста видимим
    cityScreen.style.display = 'block';
    console.log(`Пристань успішно оновлена для: ${pirateName}`);
}

// Допоміжний конструктор таблиць меню як на фото
function createLocationBlock(title, items) {
    const blockContainer = document.createElement('div');
    blockContainer.className = 'menu-block';

    const blockHeader = document.createElement('div');
    blockHeader.className = 'menu-block-header';
    blockHeader.innerText = title;
    blockContainer.appendChild(blockHeader);

    const listContainer = document.createElement('div');
    listContainer.className = 'menu-list';

    items.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'menu-item';
        listItem.id = item.id;
        listItem.innerText = item.name;

        listItem.addEventListener('click', () => {
            alert(`Локація "${item.name}" будується корабельною командою!`);
        });

        listContainer.appendChild(listItem);
    });

    blockContainer.appendChild(listContainer);
    return blockContainer;
}

function logoutUser() {
    localStorage.removeItem('active_pirate_name');
    document.getElementById('loginUsername').value = "";
    document.getElementById('regUsername').value = "";
    document.getElementById('termsCheckbox').checked = false;
    showAuthMenu(); // Викликає меню в index
}
