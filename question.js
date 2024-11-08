

//Array of Objects

const quiz = [
    {
        q:'1. Что такое кибербезопасность?',
        options: [
            'Защита физических объектов',
            'Защита информации в электронном виде',
            'Безопасность на улице',
            'Устранение вирусов с компьютера'
        ],
        answer:1
    },
    {
        q:'2. Какой из следующих типов угроз является наиболее распространённым?',
        options: [
            'Спам',
            'Физическое уничтожение оборудования',
            'Угрозы от природных катастроф',
            'Утечка данных через незащищенные сети'
        ],
        answer:3
    },
    {
        q:'3. Что такое фишинг?',
        options: [
            'Процесс шифрования данных',
            'Метод создания резервных копий',
            'Попытка получения конфиденциальной информации через обман',
            'Устранение вредоносного ПО'
        ],
        answer:2
    },
    {
        q:'4. Какой из этих методов наиболее эффективно защищает пароли?',
        options: [
            'Использование одного и того же пароля для всех аккаунтов',
            'Создание сложных уникальных паролей и их регулярная замена',
            'Запись паролей на бумаге',
            'Хранение паролей в текстовом файле на рабочем столе'
        ],
        answer:1
    },
    {
        q:'5. Какие из следующих действий являются хорошими практиками кибербезопасности?',
        options: [
            'Открытие вложений из неизвестных источников',
            'Регулярное обновление программного обеспечения',
            'Игнорирование обновлений антивируса',
            'Использование общих Wi-Fi сетей без VPN'
        ],
        answer:1
    },
    {
        q:'6. Что такое вредоносное ПО?',
        options: [
            'Приложение для повышения производительности',
            'Программное обеспечение, предназначенное для повреждения, кражи или уничтожения данных',
            'Антивирусное ПО',
            'Операционная система'
        ],
        answer:1
    },
    {
        q:'7. Какой из следующих способов аутентификации считается наиболее безопасным?',
        options: [
            'Пароль',
            'Двухфакторная аутентификация (2FA)',
            'Ответ на секретный вопрос',
            'Биометрическая аутентификация'
        ],
        answer:1
    },
    {
        q:'8. Что делает брандмауэр?',
        options: [
            'Ускоряет интернет-соединение',
            'Защищает сеть от несанкционированного доступа',
            'Удаляет вирусы с компьютера',
            'Упрощает настройки сети'
        ],
        answer:1
    },
    {
        q:'9. Какой из следующих факторов риска наиболее важен для защиты организации?',
        options: [
            'Состояние оборудования',
            'Осведомленность сотрудников о киберугрозах',
            'Обширные физические средства защиты офисов',
            'Высокая стоимость программного обеспечения'
        ],
        answer:1
    },
    {
        q:'10. Что следует делать, если вы подозреваете, что ваш компьютер был скомпрометирован?',
        options: [
            'Игнорировать проблему',
            'Сразу отключить компьютер от сети и обратиться к специалистам по кибербезопасности',
            'Попробовать самостоятельно удалить вирус',
            'Удалить все данные с компьютера'
        ],
        answer:1
    },
    {
        q:'11. Что такое "фишинг"?',
        options: [
            'Метод атаки на системы защиты',
            'Способ социальной инженерии для кражи данных',
            'Вирус, который уничтожает данные',
            'Программа для защиты от вирусов'
        ],
        answer:1
    },
    {
        q:'12. Что такое "брандмауэр"?',
        options: [
            'Устройство для нагрева сервера',
            'Программа или устройство, контролирующее сетевой трафик',
            'Особая форма вируса',
            'Метод шифрования данных'
        ],
        answer:1
    },
    {
        q:'13. Какое из следующих определений верно для термина "вредоносное ПО" (malware)?',
        options: [
            'Программное обеспечение для оптимизации работы устройства',
            'Любое ПО, созданное с целью навредить пользователю или системе',
            'Антивирусные программы',
            'Программы для создания резервных копий'
        ],
        answer:1
    },
    {
        q:'14.Что обозначает "шифрование"?',
        options: [
            'Процесс удаления данных',
            'Технология защиты данных путем преобразования их в недоступный вид',
            'Процесс восстановления утраченных данных',
            'Установка программного обеспечения'
        ],
        answer:1
    },
    {
        q:'15. Что такое "атака типа DDoS"?',
        options: [
            'Атака, направленная на кражу личных данных',
            'Атака, при которой множество систем одновременно отправляют запросы на сервер, перегружая его',
            'Атака, использующая уязвимости в ПО',
            'Форма шифрования данных'
        ],
        answer:1
    },
    {
        q:'16. Что такое "уязвимость" в контексте кибербезопасности?',
        options: [
            'Состояние, когда система полностью защищена',
            'Слабое место в системе, которое может быть использовано злоумышленниками',
            'Процесс обновления программного обеспечения',
            'Метод резервного копирования данных'
        ],
        answer:1
    },
    {
        q:'17. Какая из следующих практик является наиболее эффективной для повышения уровня кибербезопасности?',
        options: [
            'Использование простых паролей для удобства',
            'Регулярные обновления программного обеспечения и использования сложных паролей',
            'Отключение антивирусного ПО',
            'Игнорирование уведомлений о безопасности'
        ],
        answer:1
    },
    {
        q:'18. Что охватывает концепция информационной безопасности?',
        options: [
            'Защиту физической информации',
            'Защиту информации в цифровом виде',
            'Защиту всех видов информации (включая физическую, цифровую и интеллектуальную)',
            'Защиту только компьютерных систем'
        ],
        answer:2
    },
    {
        q:'19. Что является основной задачей кибербезопасности?',
        options: [
            'Защита физического доступа к информации',
            'Защита информации от киберугроз и атак',
            'Управление безопасностью в облачных средах',
            'Обучение сотрудников по вопросам безопасности'
        ],
        answer:1
    },
    {
        q:'20. Какой из следующих аспектов относится только к кибербезопасности?',
        options: [
            'Шифрование данных',
            'Безопасность сетей',
            'Мониторинг физических помещений',
            'Оценка рисков'
        ],
        answer:1
    },
    {
        q:'21. Какой из перечисленных компонентов не является частью информационной безопасности?',
        options: [
            'Управление доступом',
            'Антивирусные программы',
            'Физическая безопасность',
            'Защита от социальных атак'
        ],
        answer:2
    },
    {
        q:'22. К каким видами угроз относится внимание кибербезопасности?',
        options: [
            'Социальная инженерия',
            'Физическое уничтожение данных',
            'Уменьшение документооборота',
            'Увеличение стоимости лицензий'
        ],
        answer:0
    },
    {
        q:'23. Что такое кибератака?',
        options: [
            'Физическое нападение на сервер',
            'Атака с использованием компьютерных технологий для нарушения работы систем',
            'Защита данных в облаке',
            'Создание новых программных приложений'
        ],
        answer:1
    },
    {
        q:'24. Какой из следующих методов не является способом защиты от кибератак?',
        options: [
            'Антивирусное программное обеспечение',
            'Регулярные обновления системы',
            'Игнорирование подозрительных сообщений',
            'Файрвол'
        ],
        answer:2
    },
    {
        q:'25. Какой из следующих сценариев является примером кибератаки?',
        options: [
            'Установка нового приложения на смартфон',
            'Взлом аккаунта в социальной сети для кражи личных данных',
            'Обновление браузера до последней версии',
            'Подключение к Wi-Fi'
        ],
        answer:1
    },
    {
        "q": "26. Что такое киберэтика?",
        "options": [
            "Научная дисциплина о компьютерных вирусах",
            "Этика, связанная с использованием и воздействием информационных технологий",
            "Правила создания программного обеспечения",
            "Набор законов, регулирующих интернет"
        ],
        "answer": 1
    },
    {
        "q": "27. Какое из следующих утверждений правильно характеризует концепцию «интернет-этики»?",
        "options": [
            "Это лишь свод правил для программистов",
            "Это моральные принципы, касающиеся общения и поведения в интернете",
            "Это закон, который должен соблюдать каждый интернет-пользователь",
            "Это тема, не имеющая отношения к современным технологиям"
        ],
        "answer": 1
    },
    {
        "q": "28. Какой из перечисленных принципов не относится к киберэтике?",
        "options": [
            "Открытость",
            "Вредоносность",
            "Ответственность",
            "Конфиденциальность"
        ],
        "answer": 1
    },
    {
        "q": "29. Что подразумевается под «цифровыми правами»?",
        "options": [
            "Права, связанные с использованием бумаги в цифровом формате",
            "Права граждан на защиту своей информации в цифровом пространстве",
            "Права на использование бесплатного программного обеспечения",
            "Права государственных органов на контроль за интернетом"
        ],
        "answer": 1
    },
    {
        "q": "30. Какое поведение на платформе социальных сетей можно считать неэтичным?",
        "options": [
            "Делать посты о своих достижениях",
            "Публиковать фейки или дезинформацию",
            "Делиться интересным контентом",
            "Общаться с друзьями"
        ],
        "answer": 1
    },
    {
        "q": "31. Что такое социальная инженерия?",
        "options": [
            "Это метод обучения в области психологии",
            "Это искусство манипулирования людьми для получения конфиденциальной информации",
            "Это процесс разработки программного обеспечения",
            "Это стиль управления проектами"
        ],
        "answer": 1
    },
    {
        "q": "32. Какой из следующих методов не относится к социальной инженерии?",
        "options": [
            "Фишинг",
            "Вишинг",
            "Спуфинг",
            "Социальный анализ"
        ],
        "answer": 3
    },
    {
        "q": "33. Что такое \"преподобный\" (pretexting) в контексте социальной инженерии?",
        "options": [
            "Форма беспечности в отношении безопасности данных",
            "Создание ложной предыстории для манипуляции жертвой",
            "Использование вредоносного программного обеспечения",
            "Тестирование системы на уязвимости"
        ],
        "answer": 1
    },
    {
        "q": "34. Что подразумевается под \"информационной утечкой\" в контексте социальной инженерии?",
        "options": [
            "Способ защиты информации",
            "Процесс легального получения данных",
            "Неавторизованный доступ к конфиденциальным данным",
            "Использование шифрования для защиты данных"
        ],
        "answer": 2
    },
    {
        "q": "35. Что является наилучшей практикой для предотвращения атак социальной инженерии?",
        "options": [
            "Игнорировать странные запросы",
            "Обучение сотрудников методам распознавания атак",
            "Использование только одного пароля для всех систем",
            "Удаление всех электронных писем"
        ],
        "answer": 1
    },
    {
        "q": "36. Какой из следующих подходов помогает в защите от социальной инженерии?",
        "options": [
            "Регулярные обновления программного обеспечения",
            "Создание сложных паролей",
            "Открытое деление информацией о компании",
            "Обучение именам сотрудников"
        ],
        "answer": 1
    },
    {
        "q": "37. Какое из следующих поведенческих изменений помогает защитить вашу информацию от социальной инженерии?",
        "options": [
            "Онлайн-активность с открытым профилем в социальных сетях",
            "Поддержание конфиденциальности личной информации",
            "Частая смена телефонов",
            "Обсуждение паролей с друзьями"
        ],
        "answer": 1
    },
    {
        "q": "38. Что из следующего является основным элементом архитектуры кибербезопасности?",
        "options": [
            "Физическая безопасность",
            "Управление инцидентами",
            "Шифрование данных",
            "Все вышеперечисленное"
        ],
        "answer": 3
    },
    {
        "q": "39. Что такое политика кибербезопасности?",
        "options": [
            "Набор правил для сотрудников компании",
            "Сборник программного обеспечения для защиты данных",
            "Инструмент для управления сетевыми ресурсами",
            "Стратегия развития бизнеса"
        ],
        "answer": 0
    },
    {
        "q": "40. Какой из следующих аспектов НЕ является частью стратегии кибербезопасности?",
        "options": [
            "Оценка рисков",
            "Реализация технологических решений",
            "Обучение сотрудников",
            "Продвижение компании в социальных сетях"
        ],
        "answer": 3
    },
    {
        "q": "41. Какой из следующих стандартов наиболее известен для управления информационной безопасностью?",
        "options": [
            "ISO 9001",
            "ISO/IEC 27001",
            "ISO 14001",
            "ISO 50001"
        ],
        "answer": 1
    },
    {
        "q": "42. Какой метод шифрования данных обеспечивает высокую степень безопасности при передаче информации по сети?",
        "options": [
            "Симметричное шифрование",
            "Ассиметричное шифрование",
            "Хэширование",
            "Кодирование"
        ],
        "answer": 1
    },
    {
        "q": "43. Что является основным принципом «недостаточной доверенности»?",
        "options": [
            "Все пользователи имеют полный доступ к системам",
            "Права доступа должны минимально покрывать необходимые требования для выполнения задач",
            "Доступ к данным не ограничен",
            "Любой сотрудник может изменять настройки системы"
        ],
        "answer": 1
    },
    {
        "q": "44. Какие из следующих угроз относятся к социальному инженерству?",
        "options": [
            "Вирусы",
            "Фишинг",
            "Вредоносные программы",
            "DDoS-атаки"
        ],
        "answer": 1
    },
    {
        "q": "45. Какой из следующих подходов ИТ-безопасности фокусируется на проактивной защите?",
        "options": [
            "Реакция на инциденты",
            "Обучение пользователей",
            "Превентивные меры",
            "Удаление вредоносных программ"
        ],
        "answer": 2
    },
    {
        "q": "46. Что такое шифрование?",
        "options": [
            "Процесс кодирования данных для защиты информации",
            "Процесс хранения данных",
            "Процесс передачи данных",
            "Процесс удаления данных"
        ],
        "answer": 0
    },
    {
        "q": "47. Что такое открытый ключ?",
        "options": [
            "Ключ, который используется для расшифровки данных",
            "Ключ, который доступен всем для шифрования данных",
            "Ключ, который можно использовать только один раз",
            "Ключ, который используется для доступа к файлам"
        ],
        "answer": 1
    },
    {
        "q": "48. Что такое симметричное шифрование?",
        "options": [
            "Метод, в котором используются разные ключи для шифрования и расшифровки",
            "Метод, в котором используется один и тот же ключ для шифрования и расшифровки",
            "Метод, который не требует ключей",
            "Метод, использующий графики для шифрования"
        ],
        "answer": 1
    },
    {
        "q": "49. Какая из этих алгоритмических схем не является симметричным шифром?",
        "options": [
            "AES",
            "DES",
            "RSA",
            "Blowfish"
        ],
        "answer": 2
    },
    {
        "q": "50. Что такое хэш-функция?",
        "options": [
            "Функция, которая шифрует данные",
            "Функция, которая генерирует уникальный фиксированный выход из входных данных",
            "Функция, которая увеличивает размеры данных",
            "Функция, которая расшифровывает данные"
        ],
        "answer": 1
    },
    {
        "q": "51. Что делает алгоритм RSA?",
        "options": [
            "Шифрует и расшифровывает сообщения с помощью одного ключа",
            "Использует пару ключей для шифрования и расшифровки данных",
            "Создает хэш-коды",
            "Использует симметричное шифрование"
        ],
        "answer": 1
    },
    {
        "q": "52. Какое из перечисленных свойств является желательным для шифра?",
        "options": [
            "Устойчивость к атакам",
            "Высокая скорость обработки",
            "Простота использования",
            "Все перечисленные"
        ],
        "answer": 3
    },
    {
        "q": "53. Что обозначает термин 'криптоанализ'?",
        "options": [
            "Процесс шифрования данных",
            "Процесс расшифровки данных без знания ключа",
            "Процесс создания новых алгоритмов шифрования",
            "Процесс хранения данных"
        ],
        "answer": 1
    },
    {
        "q": "54. Каково назначение цифровой подписи?",
        "options": [
            "Защита данных от повреждений",
            "Подтверждение подлинности и целостности данных",
            "Увеличение размера данных",
            "Защита от хакеров"
        ],
        "answer": 1
    },
    {
        "q": "55. Что такое 'шифр Цезаря'?",
        "options": [
            "Алгоритм, использующий симметричное шифрование",
            "Метод, основанный на подстановке, где каждая буква сдвигается на фиксированное количество мест",
            "Алгоритм для создания хэшей",
            "Алгоритм, использующий пару ключей"
        ],
        "answer": 1
    },
    {
        "q": "56. К какому типу шифрования относится протокол SSL?",
        "options": [
            "Симметричное",
            "Ассиметричное",
            "Хэширование",
            "Подстановка"
        ],
        "answer": 1
    },
    {
        "q": "57. Каково назначение цифровой подписи?",
        "options": [
            "Защита данных от повреждений",
            "Подтверждение подлинности и целостности данных",
            "Увеличение размера данных",
            "Защита от хакеров"
        ],
        "answer": 1
    },
    {
        "q": "58. В чем заключается проблема 'человека посередине' (Man-in-the-Middle)?",
        "options": [
            "Атака, при которой злоумышленник перехватывает данные между двумя сторонами",
            "Атака, при которой злоумышленник шифрует данные",
            "Атака, при которой злоумышленник расшифровывает данные",
            "Атака, при которой данные удаляются"
        ],
        "answer": 0
    },
    {
        "q": "59. Какой алгоритм шифрования используется для защиты Wi-Fi?",
        "options": [
            "XOR",
            "WPA2",
            "Base64",
            "DES"
        ],
        "answer": 1
    },
    {
        "q": "60. Что такое криптографическая стойкость?",
        "options": [
            "Способность алгоритма шифрования оставаться безопасным в условиях атак",
            "Скорость работы алгоритма",
            "Простота использования алгоритма",
            "Размер ключа в алгоритме"
        ],
        "answer": 0
    },
    {
        "q": "61. Что такое симметричное шифрование?",
        "options": [
            "Шифрование с использованием одного ключа для шифрования и расшифровки",
            "Шифрование с использованием двух разных ключей",
            "Шифрование без использования ключей",
            "Шифрование, использующее хэш-функции"
        ],
        "answer": 0
    },
    {
        "q": "62. Какой из следующих алгоритмов является симметричным?",
        "options": [
            "RSA",
            "AES",
            "Diffie-Hellman",
            "ElGamal"
        ],
        "answer": 1
    },
    {
        "q": "63. Какой ключ используется для шифрования и расшифровки в симметричном шифровании?",
        "options": [
            "Открытый ключ",
            "Закрытый ключ",
            "Один и тот же ключ",
            "Хэш-ключ"
        ],
        "answer": 2
    },
    {
        "q": "64. Каковы основные преимущества симметричного шифрования?",
        "options": [
            "Быстродействие и простота реализации",
            "Высокая степень безопасности",
            "Простота управления ключами",
            "Все вышеперечисленное"
        ],
        "answer": 3
    },
    {
        "q": "65. Что такое 'ключ шифрования'?",
        "options": [
            "Алгоритм шифрования",
            "Секретный код, используемый для шифрования данных",
            "Метод хранения данных",
            "Программа для взлома"
        ],
        "answer": 1
    },
    {
        "q": "66. Какой из следующих режимов работы блочного шифра не является симметричным?",
        "options": [
            "ECB",
            "CBC",
            "CTR",
            "HMAC"
        ],
        "answer": 3
    },
    {
        "q": "67. Какой из следующих алгоритмов НЕ является блочным шифром?",
        "options": [
            "DES",
            "3DES",
            "RC4",
            "Blowfish"
        ],
        "answer": 2
    },
    {
        "q": "68. Какой размер ключа обычно считается безопасным для AES?",
        "options": [
            "40 бит",
            "56 бит",
            "128 бит, 192 бит или 256 бит",
            "1024 бит"
        ],
        "answer": 2
    },
    {
        "q": "69. Какова основная угроза при использовании симметричного шифрования?",
        "options": [
            "Угрозы со стороны интернет-хакеров",
            "Угрозы потери или кражи ключа",
            "Вероятность ошибок в шифровании",
            "Неэффективность алгоритма"
        ],
        "answer": 1
    },
    {
        "q": "70. Как называется процесс, при котором данные преобразуются в шифротекст?",
        "options": [
            "Декодирование",
            "Хэширование",
            "Шифрование",
            "Расшифрование"
        ],
        "answer": 2
    },
    {
        "q": "71. Что такое 'брутфорс' атака?",
        "options": [
            "Атака, использующая правила шифрования",
            "Атака, основанная на случайном подборе ключа",
            "Атака на основе социальной инженерии",
            "Атака, использующая уязвимости программного обеспечения"
        ],
        "answer": 1
    },
    {
        "q": "72. Какой пример алгоритма блочного шифрования?",
        "options": [
            "XOR",
            "RSA",
            "DES",
            "SHA-256"
        ],
        "answer": 2
    },
    {
        "q": "73. Какой режим шифрования добавляет вероятность шифрования одного и того же блока данных по-разному?",
        "options": [
            "ECB",
            "CBC",
            "CTR",
            "CFB"
        ],
        "answer": 1
    },
    {
        "q": "74. Как зовут стандарт, описывающий AES?",
        "options": [
            "NIST SP 800-56",
            "FIPS PUB 197",
            "ISO/IEC 18033",
            "NIST SP 800-90"
        ],
        "answer": 1
    },
    {
        "q": "75. Что такое 'замена' в контексте симметричного шифрования?",
        "options": [
            "Процесс замены шифрованного блока случайными числами",
            "Процесс замены открытого текста шифротекстом",
            "Процесс преобразования одного символа в другой",
            "Процесс удаления излишних бит"
        ],
        "answer": 2
    },
    {
        "q": "76. Что такое криптосистема с открытым ключом?",
        "options": [
            "Криптосистема с открытым ключом — это метод шифрования, в котором используются два ключа: открытый ключ для шифрования данных и закрытый ключ для расшифровки",
            "Криптосистема с открытым ключом — это метод расшифрования, в котором используются три ключа: открытый ключ для шифрования данных и два закрытых ключа для расшифровки",
            "Криптосистема с открытым ключом — это метод, в котором используется один ключ для шифрования и расшифровки данных",
            "Криптосистема с открытым ключом — это метод, который использует один ключ для шифрования данных и один для расшифровки"
        ],
        "answer": 0
    },
    {
        "q": "77. Каковы основные преимущества использования криптосистем с открытым ключом?",
        "options": [
            "Основные преимущества включают безопасный обмен шифрами, возможность проверки подписи и большую необходимость в управлении ключами",
            "Основные преимущества включают безопасный обмен ключами, возможность проверки подписи и меньшую необходимость в управлении ключами",
            "Основные преимущества включают безопасный обмен ключами, возможность проверки целостности и меньшую необходимость в замене ключей",
            "Основные преимущества включают безопасный обмен ключами"
        ],
        "answer": 1
    },
    {
        "q": "78. Что такое открытый ключ?",
        "options": [
            "Открытый ключ — это ключ, который может быть свободно распространен и используется для шифрования данных или проверки цифровой подписи",
            "Открытый ключ — это ключ, который может быть свободно распространен и используется для дешифрования данных или проверки цифровой подписи",
            "Открытый ключ — это ключ, который может быть свободно распространен и используется для шифрования данных или проверки конфиденциальности информации",
            "Открытый ключ — это символ, который может быть свободно распространен и используется для расшифрования данных или проверки цифровой подписи"
        ],
        "answer": 0
    },
    {
        "q": "79. Что такое цифровая подпись?",
        "options": [
            "Цифровая подпись — это вычисляемый символ, который прикрепляется к электронному документу для подтверждения его авторства и целостности, созданный с помощью закрытого ключа отправителя",
            "Цифровая подпись — это невычисляемый код, который прикрепляется к электронному документу для подтверждения его целостности, созданный с помощью закрытого ключа отправителя",
            "Цифровая подпись — это вычисляемый код, который прикрепляется к электронному документу для подтверждения его авторства и целостности, созданный с помощью открытого ключа отправителя",
            "Цифровая подпись — это вычисляемый код, который прикрепляется к электронному документу для подтверждения его авторства и целостности, созданный с помощью закрытого ключа отправителя"
        ],
        "answer": 0
    },
    {
        "q": "80. Что такое целостность данных?",
        "options": [
            "Целостность данных — это условие, при котором данные остаются неточными, последовательными и надежными на протяжении всего их жизненного цикла",
            "Целостность данных — это условие, при котором шифры остаются точными, последовательными и надежными на протяжении всего их жизненного цикла",
            "Целостность данных — это условие, при котором данные остаются точными, последовательными и ненадежными на протяжении жизненного цикла",
            "Целостность данных — это условие, при котором данные остаются точными, последовательными и надежными на протяжении всего их жизненного цикла"
        ],
        "answer": 3
    },
    {
        "q": "81. Какой из следующих способов аутентификации является наиболее распространённым?",
        "options": [
            "Биометрическая аутентификация",
            "Парольная аутентификация",
            "Аутентификация по сертификату",
            "Двухфакторная аутентификация"
        ],
        "answer": 1
    },
    {
        "q": "82. Что такое двухфакторная аутентификация (2FA)?",
        "options": [
            "Использование пароля и секретного вопроса",
            "Подтверждение личности на основе двух разных факторов",
            "Аутентификация только по биометрическим данным",
            "Использование только одного сильного пароля"
        ],
        "answer": 1
    },
    {
        "q": "83. Какой из нижеперечисленных методов является примером биометрической аутентификации?",
        "options": [
            "Сканирование отпечатка пальца",
            "Использование PIN-кода",
            "Аутентификация по электронной почте",
            "Использование SMS-кода"
        ],
        "answer": 0
    },
    {
        "q": "84. Какой метод аутентификации предполагает использование временных кодов, отправленных на мобильный телефон?",
        "options": [
            "Пароль",
            "Токен",
            "Биометрические данные",
            "SMS-код"
        ],
        "answer": 3
    },
    {
        "q": "85. Что такое аутентификация по сертификату?",
        "options": [
            "Использование пароля для доступа",
            "Использование цифрового сертификата для подтверждения личности",
            "Использование личных данных",
            "Простой вход без дополнительных данных"
        ],
        "answer": 1
    },
    {
        "q": "86. Какой из следующих способов аутентификации является менее безопасным?",
        "options": [
            "Пароль",
            "Двухфакторная аутентификация",
            "Биометрическая аутентификация",
            "Аутентификация по сертификату"
        ],
        "answer": 0
    },
    {
        "q": "87. Какой из нижеперечисленных методов наименее эффективен против фишинга?",
        "options": [
            "Использование сложных паролей",
            "Аутентификация по SMS",
            "Двухфакторная аутентификация",
            "Использование ответов на секретные вопросы"
        ],
        "answer": 3
    },
    {
        "q": "88. Какой метод аутентификации обеспечивает наибольшую степень защиты?",
        "options": [
            "Только пароли",
            "Аутентификация по биометрическим данным и пароль",
            "Токены и одноразовые пароли",
            "Двухфакторная аутентификация"
        ],
        "answer": 3
    },
    {
        "q": "89. Что такое аутентификация на основе контекста?",
        "options": [
            "Метод, использующий только пароль",
            "Метод, который учитывает местоположение и устройства",
            "Метод, основанный на отпечатках пальцев",
            "Метод, который не требует ввода данных"
        ],
        "answer": 1
    },
    {
        "q": "90. Какой способ аутентификации для Web-приложений считается наилучшим?",
        "options": [
            "Использование только паролей",
            "Двухфакторная аутентификация",
            "Аутентификация по электронной почте",
            "Использование только биометрии"
        ],
        "answer": 1
    },
    {
        "q": "91. Какой из следующих методов защиты используется для фильтрации нежелательного трафика?",
        "options": [
            "Антивирус",
            "Фаервол",
            "Шифрование",
            "Бэкап"
        ],
        "answer": 1
    },
    {
        "q": "92. Какой термин описывает процесс проверки идентичности пользователя?",
        "options": [
            "Аудит",
            "Аутентификация",
            "Авторизация",
            "Шифрование"
        ],
        "answer": 1
    },
    {
        "q": "93. Какой метод помогает предотвратить перехват конфиденциальной информации в сети?",
        "options": [
            "Использование слабых паролей",
            "Передача данных в открытом виде",
            "Использование HTTPS",
            "Открытый Wi-Fi"
        ],
        "answer": 2
    },
    {
        "q": "94. Каковы цели многофакторной аутентификации?",
        "options": [
            "Упрощение процесса входа",
            "Повышение безопасности",
            "Снижение затрат",
            "Предоставление доступа к общим ресурсам"
        ],
        "answer": 1
    },
    {
        "q": "95. Какой из следующих вариантов является хорошей практикой для управления паролями?",
        "options": [
            "Использование одного пароля для всех аккаунтов",
            "Регулярная смена паролей",
            "Хранение паролей на бумаге",
            "Использование простых паролей"
        ],
        "answer": 1
    },
    {
        "q": "96. Что такое резервное копирование данных?",
        "options": [
            "Процесс удаления ненужных файлов",
            "Создание копий данных для восстановления",
            "Установка антивирусного программного обеспечения",
            "Удаление старых данных"
        ],
        "answer": 1
    },
    {
        "q": "97. Какой из перечисленных методов может защитить от вредоносного программного обеспечения?",
        "options": [
            "Антивирусное ПО",
            "Отключение интернета",
            "Запуск устаревшего ПО",
            "Игнорирование обновлений"
        ],
        "answer": 0
    },
    {
        "q": "98. Какой тип атаки обычно используется для перегрузки сервиса с целью его отключения?",
        "options": [
            "Вредоносное ПО",
            "DDoS-атака",
            "Фишинг",
            "Спам"
        ],
        "answer": 1
    },
    {
        "q": "99. Какой из следующих методов является неэффективным для повышения безопасности сети?",
        "options": [
            "Использование фаервола",
            "Установка программного обеспечения с ненадежных источников",
            "Регулярное обновление ПО",
            "Использование антивируса"
        ],
        "answer": 1
    },
    {
        "q": "100. Что такое шифрование?",
        "options": [
            "Процесс удаления данных",
            "Процесс преобразования информации в недоступный для чтения формат",
            "Обмен информацией",
            "Процесс создания резервной копии"
        ],
        "answer": 1
    },
    {
        "q": "101. Какой из следующих методов может помочь обучить сотрудников безопасности?",
        "options": [
            "Игнорирование учений",
            "Необсуждение случаев кибератак",
            "Проведение тренингов по кибербезопасности",
            "Упрощение всех процедур"
        ],
        "answer": 2
    },
    {
        "q": "102. Что такое VPN?",
        "options": [
            "Система учета времени",
            "Виртуальная частная сеть для безопасного соединения в интернете",
            "Антивирусное ПО",
            "Программа для управления паролями"
        ],
        "answer": 1
    }
]
