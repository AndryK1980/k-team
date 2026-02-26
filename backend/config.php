<?php

/**
 * Telegram Bot configuration.
 *
 * 1. Create a bot via @BotFather in Telegram and copy the token.
 * 2. Send any message to the bot, then open:
 *    https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
 *    to find your chat_id.
 * 3. Fill in the values below.
 */

define('TELEGRAM_BOT_TOKEN', 'YOUR_BOT_TOKEN_HERE');
define('TELEGRAM_CHAT_ID', 'YOUR_CHAT_ID_HERE');

$allowed_origins = [
    'http://localhost',
    'http://localhost:8080',
    'https://k-team.example.com',
];
