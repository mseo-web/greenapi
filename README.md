# GREEN API

Тестовое задание на должность "Фронтенд разработчик React"

***

## Ожидаемый результат:

- Пользователь переходит на сайт чата и вводит свои учетные данные из
системы GREEN-API (idInstance, apiTokenInstance)
- Пользователь вводит номер телефона получателя и создает новый чат

- Пользователь пишет текстовое сообщение и отправляет его получателю в
WhatsApp

- Получатель отвечает на сообщение в мессенджере WhatsApp

- Пользователь видит ответ получателя в чате

***

## Сайт проекта:

[https://greenapi.smartexweb.kz/](https://greenapi.smartexweb.kz/)

***

### Запуск проекта

```bash
npm install
```

```bash
npm run dev
```

***

Проверка входящих сообщений происходит по кнопке. Чтобы сделать автоматически, нужно раскомментировать код:

```bash
// useEffect(() => {
//   const interval = setInterval(fetchMessages, 5000); // Fetch messages every 5 seconds
//   return () => clearInterval(interval);
// }, [idInstance, apiTokenInstance]);
```

Просто на первом аккаунте почему-то кончился ресурс бесплатных сообщений. Пришлось поставить кнопку.
