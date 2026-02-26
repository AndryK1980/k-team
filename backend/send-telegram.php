<?php

require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins, true)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    http_response_code(405);
    exit;
}

$name    = trim($_POST['name'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$email   = trim($_POST['email'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '') {
    echo json_encode(['success' => false, 'message' => 'Имя обязательно для заполнения']);
    exit;
}

if ($phone === '' && $email === '') {
    echo json_encode(['success' => false, 'message' => 'Укажите телефон или email']);
    exit;
}

$serviceLabels = [
    'website' => 'Разработка сайта',
    'app'     => 'Мобильное приложение',
    'seo'     => 'SEO-продвижение',
    'complex' => 'Комплексное решение',
];

$serviceText = $serviceLabels[$service] ?? 'Не указана';

$text  = "📩 *Новая заявка с сайта K-Team*\n\n";
$text .= "👤 *Имя:* {$name}\n";
if ($phone !== '') {
    $text .= "📱 *Телефон:* {$phone}\n";
}
if ($email !== '') {
    $text .= "📧 *Email:* {$email}\n";
}
$text .= "🔧 *Услуга:* {$serviceText}\n";
if ($message !== '') {
    $text .= "\n💬 *Сообщение:*\n{$message}\n";
}
$text .= "\n📅 " . date('d.m.Y H:i');

$result = sendTelegram($text);

if ($result) {
    echo json_encode(['success' => true, 'message' => 'Заявка успешно отправлена']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка отправки. Попробуйте позже.']);
}

function sendTelegram(string $text): bool
{
    $url = 'https://api.telegram.org/bot' . TELEGRAM_BOT_TOKEN . '/sendMessage';

    $data = [
        'chat_id'    => TELEGRAM_CHAT_ID,
        'text'       => $text,
        'parse_mode' => 'Markdown',
    ];

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL            => $url,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $data,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_SSL_VERIFYPEER => true,
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return $httpCode === 200;
}
