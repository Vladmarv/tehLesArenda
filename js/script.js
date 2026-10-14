/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//------------------------------------------------------------
window.addEventListener('load', function () {
  //--------------------------Подменю-хедера--------------------------
  var headerMenuListItem = document.querySelector('.header__menu-list-item');
  if (headerMenuListItem) {
    headerMenuListItem.addEventListener('mouseover', function (event) {
      if (!this.classList.contains('hover')) this.classList.add('hover');
    });
    headerMenuListItem.addEventListener('mouseout', function (event) {
      if (this.classList.contains('hover')) this.classList.remove('hover');
    });
  }
  //-----------------------------Выравнивание колонок в каталоге-------------------------------
  var productLinks = document.querySelectorAll(".catalog-products-item__inner");
  if (!productLinks.length) return;
  var maxHeight = 0;
  var _iterator = _createForOfIteratorHelper(productLinks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      var currentHeight = link.offsetHeight;
      if (currentHeight > maxHeight) maxHeight = currentHeight;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(productLinks),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _link = _step2.value;
      var _currentHeight = _link.offsetHeight;
      if (_currentHeight < maxHeight) {
        var heightDiff = maxHeight - _currentHeight;
        var specsElement = _link.querySelector('.catalog-products-item__specifications');
        if (!specsElement) return;
        var computedStyle = window.getComputedStyle(specsElement);
        var currentPadding = parseFloat(computedStyle.paddingBottom) || 0;
        specsElement.style.setProperty('--dynamic-padding', "calc(".concat(currentPadding, "px + ").concat(heightDiff, "px)"));
      }
    }
    //------------------------------Табы------------------------------
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var root = document.querySelector('.catalog-products-dialog__tabs');
  if (!root) return;
  var tabs = Array.from(root.querySelectorAll('[role="tab"]'));
  var panels = Array.from(root.querySelectorAll('[role="tabpanel"]'));
  if (!tabs.length || !panels.length) return;
  var startIndex = tabs.findIndex(function (t) {
    return t.classList.contains('tabs__tab--active') || t.getAttribute('aria-selected') === 'true';
  });
  if (startIndex === -1) startIndex = 0;
  function activateIndex(i) {
    var tab = tabs[i];
    if (!tab) return;
    var _iterator3 = _createForOfIteratorHelper(tabs),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var t = _step3.value;
        var is = t === tab;
        t.classList.toggle('tabs__tab--active', is);
        t.setAttribute('aria-selected', is ? 'true' : 'false');
        t.tabIndex = is ? 0 : -1;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(panels),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var p = _step4.value;
        p.setAttribute('hidden', '');
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var id = tab.getAttribute('aria-controls');
    var panel = id ? document.getElementById(id) : panels[i];
    if (panel) panel.removeAttribute('hidden');
  }
  var _loop = function _loop(i) {
    tabs[i].addEventListener('click', function (e) {
      e.preventDefault();
      activateIndex(i);
    });
  };
  for (var i = 0; i < tabs.length; i++) {
    _loop(i);
  }
  activateIndex(startIndex);
});

//--------------------------Парсинг данных и заполнение модального окна----------------------------------
function loadShantui() {
  return _loadShantui.apply(this, arguments);
}
function _loadShantui() {
  _loadShantui = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var res, data;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return fetch('../data/Бульдозер-Shantui-SD16-object.json');
        case 1:
          res = _context2.v;
          console.log('HTTP', res.status, 'ok=', res.ok, 'url=', res.url);
          _context2.n = 2;
          return res.json();
        case 2:
          data = _context2.v;
          window.shantuiSd16 = data;
          console.log('shantui data:', data);
          return _context2.a(2, data);
      }
    }, _callee2);
  }));
  return _loadShantui.apply(this, arguments);
}
loadShantui();
// Функция для обработки данных JSON в табы
function processDataToTabs(data) {
  var tabs = [];
  for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      category = _Object$entries$_i[0],
      categoryData = _Object$entries$_i[1];
    var tabData = [];
    for (var _i2 = 0, _Object$entries2 = Object.entries(categoryData); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        key = _Object$entries2$_i[0],
        value = _Object$entries2$_i[1];
      if (_typeof(value) === 'object' && value !== null) {
        for (var _i3 = 0, _Object$entries3 = Object.entries(value); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
            subKey = _Object$entries3$_i[0],
            subValue = _Object$entries3$_i[1];
          tabData.push({
            name: "".concat(key, " - ").concat(subKey),
            value: subValue
          });
        }
      } else {
        tabData.push({
          name: key,
          value: value
        });
      }
    }
    tabs.push({
      tabName: category,
      tabData: tabData
    });
  }
  return tabs;
}

//--------------------------Функция инициализации табов--------------------------
function initTabs(container) {
  var tabs = Array.from(container.querySelectorAll('[role="tab"]'));
  var panels = Array.from(container.querySelectorAll('[role="tabpanel"]'));
  if (!tabs.length || !panels.length) return;
  var startIndex = tabs.findIndex(function (t) {
    return t.classList.contains('tabs__tab--active') || t.getAttribute('aria-selected') === 'true';
  });
  if (startIndex === -1) startIndex = 0;
  function activateIndex(i) {
    var tab = tabs[i];
    if (!tab) return;
    tabs.forEach(function (t) {
      var is = t === tab;
      t.classList.toggle('tabs__tab--active', is);
      t.setAttribute('aria-selected', is ? 'true' : 'false');
      t.tabIndex = is ? 0 : -1;
    });
    panels.forEach(function (p) {
      return p.setAttribute('hidden', '');
    });
    var id = tab.getAttribute('aria-controls');
    var panel = id ? document.getElementById(id) : panels[i];
    if (panel) panel.removeAttribute('hidden');
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      activateIndex(i);
    });
  });
  activateIndex(startIndex);
}

//--------------------------Обработчик клика на карточки--------------------------
var placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
document.addEventListener('DOMContentLoaded', function () {
  var productItems = document.querySelectorAll('.catalog-products-item__inner');
  productItems.forEach(function (item) {
    item.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var jsonPath, title, imageUrl, response, data, tabsData, dialogTitle, dialogImage, tabsContainer, tabList, panelsContainer, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            jsonPath = this.getAttribute('data-json-path');
            title = this.getAttribute('data-title');
            imageUrl = this.getAttribute('data-image');
            _context.p = 1;
            _context.n = 2;
            return fetch(jsonPath);
          case 2:
            response = _context.v;
            if (response.ok) {
              _context.n = 3;
              break;
            }
            throw new Error('Network response was not ok');
          case 3:
            _context.n = 4;
            return response.json();
          case 4:
            data = _context.v;
            tabsData = processDataToTabs(data); // Обновление заголовка и изображения (с чисткой перед новым открытием)
            dialogTitle = document.querySelector('.catalog-products-dialog__title');
            dialogImage = document.querySelector('.catalog-products-dialog__img img');
            if (dialogTitle) dialogTitle.textContent = title || '';
            if (dialogImage) {
              dialogImage.src = placeholder;
              if (imageUrl) dialogImage.src = imageUrl;
              dialogImage.alt = title || '';
              // img.loading = 'lazy';
              // img.decoding = 'async';
            }
            // Очистка и заполнение табов
            tabsContainer = document.querySelector('.catalog-products-dialog__tabs');
            if (tabsContainer) {
              tabsContainer.innerHTML = '';
              tabList = document.createElement('nav');
              tabList.className = 'tabs';
              tabList.setAttribute('role', 'tablist');
              panelsContainer = document.createElement('div');
              panelsContainer.className = 'tabs__panels';
              tabsData.forEach(function (tab, index) {
                var tabId = "tab-".concat(index);
                var panelId = "panel-".concat(index);

                // Создание кнопку таба
                var tabButton = document.createElement('button');
                tabButton.className = 'tabs__tab';
                tabButton.setAttribute('role', 'tab');
                tabButton.setAttribute('aria-selected', 'false');
                tabButton.setAttribute('aria-controls', panelId);
                tabButton.setAttribute('id', tabId);
                tabButton.textContent = tab.tabName;
                tabList.appendChild(tabButton);

                // Создание панели таба
                var panel = document.createElement('div');
                panel.className = 'tabs__panel';
                panel.setAttribute('role', 'tabpanel');
                panel.setAttribute('id', panelId);
                panel.setAttribute('aria-labelledby', tabId);
                panel.setAttribute('hidden', '');

                // Создание таблицы с характеристиками
                var table = document.createElement('table');
                table.className = 'tabs__spec-table';
                tab.tabData.forEach(function (spec) {
                  var row = document.createElement('tr');
                  var nameCell = document.createElement('td');
                  nameCell.textContent = spec.name;
                  var valueCell = document.createElement('td');
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
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.error('Ошибка загрузки JSON:', _t);
          case 6:
            return _context.a(2);
        }
      }, _callee, this, [[1, 5]]);
    })));
  });
});
//--------------------------Меню-бургер--------------------------
var burgerBtn = document.querySelector('.header__burger');
var headerMenu = document.querySelector('.header__menu');
var menuListItemLink = document.querySelector('.header__menu-link');
if (burgerBtn && headerMenu) {
  burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.body.classList.toggle('_lock');
    if (!burgerBtn.classList.contains('active')) {
      setTimeout(function () {
        return menuListItemLink.classList.add('active');
      }, 300);
    } else menuListItemLink.classList.remove('active');
  });
}
/******/ })()
;
//# sourceMappingURL=script.js.map