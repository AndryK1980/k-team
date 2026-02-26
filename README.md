# K-Team — Landing Page

Лендинг IT-компании K-Team: разработка сайтов, мобильных приложений и SEO-продвижение.

## Стек

- **Frontend:** HTML5, CSS3 (Custom Properties, Grid, Flexbox), Vanilla JavaScript
- **Backend:** PHP (отправка заявок в Telegram через Bot API)
- **Шрифты:** Inter (Google Fonts)

## Структура проекта

```
k-team/
├── frontend/
│   ├── index.html          # Главная страница
│   ├── css/
│   │   └── style.css       # Стили
│   ├── js/
│   │   └── main.js         # Логика и анимации
│   └── assets/
│       └── images/          # Изображения
├── backend/
│   ├── config.php           # Конфигурация Telegram-бота
│   └── send-telegram.php    # Обработка формы и отправка в Telegram
└── README.md
```

## Настройка Telegram-бота

1. Создайте бота через [@BotFather](https://t.me/BotFather) в Telegram.
2. Скопируйте полученный токен.
3. Отправьте любое сообщение боту, затем откройте:
   ```
   https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
   ```
   и найдите значение `chat_id`.
4. Заполните значения в `backend/config.php`:
   ```php
   define('TELEGRAM_BOT_TOKEN', 'ваш_токен');
   define('TELEGRAM_CHAT_ID', 'ваш_chat_id');
   ```
5. Добавьте домен сайта в массив `$allowed_origins`.

## Запуск

Для локальной разработки используйте встроенный PHP-сервер:

```bash
php -S localhost:8080 -t .
```

Сайт будет доступен по адресу `http://localhost:8080/frontend/`.

## Деплой

При деплое на хостинг:

1. Загрузите содержимое папок `frontend/` и `backend/` на сервер.
2. Убедитесь, что PHP и расширение cURL установлены.
3. Настройте `backend/config.php` с реальными данными бота.
4. Обновите `$allowed_origins` на реальный домен.
5. Настройте web-сервер так, чтобы корень указывал на папку с проектом.

## Расширение

Архитектура проекта подготовлена для добавления:
- **Отзывы клиентов** — новая секция + API для управления отзывами
- **Новости/блог** — отдельные страницы + админка для публикации
