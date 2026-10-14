//------------------------------------------------------------
window.addEventListener('load', () => {
   //--------------------------Подменю-хедера--------------------------
   const headerMenuListItem = document.querySelector('.header__menu-list-item')
   if (headerMenuListItem) {
      headerMenuListItem.addEventListener('mouseover', function (event) {
         if (!this.classList.contains('hover')) this.classList.add('hover')
      })
      headerMenuListItem.addEventListener('mouseout', function (event) {
         if (this.classList.contains('hover')) this.classList.remove('hover')

      })
   }
   //-----------------------------Выравнивание колонок в каталоге-------------------------------
   const productLinks = document.querySelectorAll(".catalog-products-item__inner")
   if (!productLinks.length) return;
   let maxHeight = 0

   for (const link of productLinks) {
      const currentHeight = link.offsetHeight
      if (currentHeight > maxHeight) maxHeight = currentHeight
   }
   for (const link of productLinks) {
      let currentHeight = link.offsetHeight
      if (currentHeight < maxHeight) {
         let heightDiff = maxHeight - currentHeight
         let specsElement = link.querySelector('.catalog-products-item__specifications')
         if (!specsElement) return;
         const computedStyle = window.getComputedStyle(specsElement);
         const currentPadding = parseFloat(computedStyle.paddingBottom) || 0;
         specsElement.style.setProperty(
            '--dynamic-padding',
            `calc(${currentPadding}px + ${heightDiff}px)`
         );
      }
   }
   //------------------------------Табы------------------------------
   const root = document.querySelector('.catalog-products-dialog__tabs');
   if (!root) return;

   const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
   const panels = Array.from(root.querySelectorAll('[role="tabpanel"]'));
   if (!tabs.length || !panels.length) return;

   let startIndex = tabs.findIndex(t => t.classList.contains('tabs__tab--active') || t.getAttribute('aria-selected') === 'true');
   if (startIndex === -1) startIndex = 0;

   function activateIndex(i) {
      const tab = tabs[i];
      if (!tab) return;
      for (const t of tabs) {
         const is = (t === tab);
         t.classList.toggle('tabs__tab--active', is);
         t.setAttribute('aria-selected', is ? 'true' : 'false');
         t.tabIndex = is ? 0 : -1;
      }
      for (const p of panels) p.setAttribute('hidden', '');
      const id = tab.getAttribute('aria-controls');
      const panel = id ? document.getElementById(id) : panels[i];
      if (panel) panel.removeAttribute('hidden');
   }

   for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', (e) => {
         e.preventDefault();
         activateIndex(i);
      });
   }

   activateIndex(startIndex);
});

//--------------------------Парсинг данных и заполнение модального окна----------------------------------
async function loadShantui() {
   const res = await fetch('../data/Бульдозер-Shantui-SD16-object.json');
   console.log('HTTP', res.status, 'ok=', res.ok, 'url=', res.url);

   const data = await res.json();
   window.shantuiSd16 = data;
   console.log('shantui data:', data);
   return data;
}

loadShantui();
// Функция для обработки данных JSON в табы
function processDataToTabs(data) {
   const tabs = [];
   for (const [category, categoryData] of Object.entries(data)) {
      const tabData = [];
      for (const [key, value] of Object.entries(categoryData)) {
         if (typeof value === 'object' && value !== null) {
            for (const [subKey, subValue] of Object.entries(value)) {
               tabData.push({ name: `${key} - ${subKey}`, value: subValue });
            }
         } else {
            tabData.push({ name: key, value: value });
         }
      }
      tabs.push({ tabName: category, tabData });
   }
   return tabs;
}

//--------------------------Функция инициализации табов--------------------------
function initTabs(container) {
   const tabs = Array.from(container.querySelectorAll('[role="tab"]'));
   const panels = Array.from(container.querySelectorAll('[role="tabpanel"]'));
   if (!tabs.length || !panels.length) return;

   let startIndex = tabs.findIndex(t => t.classList.contains('tabs__tab--active') || t.getAttribute('aria-selected') === 'true');
   if (startIndex === -1) startIndex = 0;

   function activateIndex(i) {
      const tab = tabs[i];
      if (!tab) return;

      tabs.forEach(t => {
         const is = (t === tab);
         t.classList.toggle('tabs__tab--active', is);
         t.setAttribute('aria-selected', is ? 'true' : 'false');
         t.tabIndex = is ? 0 : -1;
      });

      panels.forEach(p => p.setAttribute('hidden', ''));
      const id = tab.getAttribute('aria-controls');
      const panel = id ? document.getElementById(id) : panels[i];
      if (panel) panel.removeAttribute('hidden');
   }

   tabs.forEach((tab, i) => {
      tab.addEventListener('click', (e) => {
         e.preventDefault();
         activateIndex(i);
      });
   });

   activateIndex(startIndex);
}

//--------------------------Обработчик клика на карточки--------------------------
const placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
document.addEventListener('DOMContentLoaded', () => {
   const productItems = document.querySelectorAll('.catalog-products-item__inner');

   productItems.forEach(item => {
      item.addEventListener('click', async function () {
         const jsonPath = this.getAttribute('data-json-path');
         const title = this.getAttribute('data-title');
         const imageUrl = this.getAttribute('data-image');

         try {
            const response = await fetch(jsonPath);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            const tabsData = processDataToTabs(data);

            // Обновление заголовка и изображения (с чисткой перед новым открытием)
            const dialogTitle = document.querySelector('.catalog-products-dialog__title');
            const dialogImage = document.querySelector('.catalog-products-dialog__img img');
            if (dialogTitle) dialogTitle.textContent = title || '';

            if (dialogImage) {
               dialogImage.src = placeholder;
               if (imageUrl) dialogImage.src = imageUrl;
               dialogImage.alt = title || '';
               // img.loading = 'lazy';
               // img.decoding = 'async';
            }
            // Очистка и заполнение табов
            const tabsContainer = document.querySelector('.catalog-products-dialog__tabs');
            if (tabsContainer) {
               tabsContainer.innerHTML = '';

               const tabList = document.createElement('nav');
               tabList.className = 'tabs';
               tabList.setAttribute('role', 'tablist');

               const panelsContainer = document.createElement('div');
               panelsContainer.className = 'tabs__panels';

               tabsData.forEach((tab, index) => {
                  const tabId = `tab-${index}`;
                  const panelId = `panel-${index}`;

                  // Создание кнопку таба
                  const tabButton = document.createElement('button');
                  tabButton.className = 'tabs__tab';
                  tabButton.setAttribute('role', 'tab');
                  tabButton.setAttribute('aria-selected', 'false');
                  tabButton.setAttribute('aria-controls', panelId);
                  tabButton.setAttribute('id', tabId);
                  tabButton.textContent = tab.tabName;
                  tabList.appendChild(tabButton);

                  // Создание панели таба
                  const panel = document.createElement('div');
                  panel.className = 'tabs__panel';
                  panel.setAttribute('role', 'tabpanel');
                  panel.setAttribute('id', panelId);
                  panel.setAttribute('aria-labelledby', tabId);
                  panel.setAttribute('hidden', '');

                  // Создание таблицы с характеристиками
                  const table = document.createElement('table');
                  table.className = 'tabs__spec-table';

                  tab.tabData.forEach(spec => {
                     const row = document.createElement('tr');
                     const nameCell = document.createElement('td');
                     nameCell.textContent = spec.name;
                     const valueCell = document.createElement('td');
                     valueCell.textContent = spec.value;
                     row.appendChild(nameCell);
                     row.appendChild(valueCell);
                     table.appendChild(row);
                  });

                  panel.appendChild(table);
                  panelsContainer.appendChild(panel);
               });

               tabsContainer.appendChild(tabList);
               tabsContainer.appendChild(panelsContainer);

               // Инициализируем табы
               initTabs(tabsContainer);
            }

            // Показываем модальное окно
            if (typeof dialog !== 'undefined') {
               dialog.show();
            }
         } catch (error) {
            console.error('Ошибка загрузки JSON:', error);
         }
      });
   });
});
//--------------------------Меню-бургер--------------------------
const burgerBtn = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const menuListItemLink = document.querySelector('.header__menu-link')

if (burgerBtn && headerMenu) {
   burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      headerMenu.classList.toggle('active');
      document.body.classList.toggle('_lock');
      if (!burgerBtn.classList.contains('active')) {
         setTimeout(() => menuListItemLink.classList.add('active'), 300)
      } else menuListItemLink.classList.remove('active')
   });
}