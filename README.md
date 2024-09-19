<body>
  <h1 align='center'>Решение команды "MISIS GO"</h1>
  <p align='center'></p>
  <div>
    <h2>Содержание / Навигация:</h2>
    <ul>
      <li><a href='#11'>Описание</a></li>
      <ol>
        <li><a href='#12'>Библиотеки</a></li>
        <li><a href='#13'>Навигация по директории</a></li>
        <li><a href='#14'>Запуск решения</a></li>
      </ol>
      <li><a href='#21'>Решение задачи</a></li>
      <ol>
        <li><a href='#22'>Описание</a></li>
        <li><a href='#23'>Решение</a></li>
        <li><a href='#24'>Преимущества</a></li>
      </ol>
    </ul>
  </div>
  <div>
    <h2 id='11'>Описание:</h2>
    <h3 id='12'>👉 Библиотеки</h3>
    <p>Все <b>необходимые</b> библиотеки можно установить, написав в терминал: <code>docker compose build</code></p>
    <h3 id='13'>👉 Навигация по директории:</h3>
    <pre>
      - <b>backend // папка с решением серверной части</b>
      - <b>frontend // папка с решением клиентской части</b>
      - >> docker-compose.yml // файл для развертывания проекта
    </pre>
    <h3 id='14'>👉 Запуск решения:</h3>
    <p>Для запуска <b>всего проекта</b>: <code>docker compose build, docker compose up</code></p>
    <blockquote>Чтобы запустить <b>docker-compose.yml</b> необходимо, чтобы был установлен docker, docker-compose</blockquote>
  </div>
  <div>
    <h2 id='21'>1️⃣ Решение задачи:</h2>
    <h3 id='22'>👉 Описание:</h3>
        <p>Для решения задачи были использованы библиотеки: <code>SQLAlchemy, Pandas, FastAPI</code>. Само решение предполагало использование следующих подходов: <b>препроцессинг</b>, <b>векторизация</b>, <b>классификация</b>.</p>
    <h3 id='23'>👉 Решение:</h3>
    <p>На первом шаге производится препроцессинг текстов резюме с помощью методов обработки естественного языка (NLP), в том числе первичная обработка текста, удаление стоп-слов и стемминг.</p>
    <p>На втором шаге производилась векторизация предобработанных текстов с помощью метода TF-IDF.</p>
    <p>На третьем шаге для определения итоговой профессии по резюме применялась модель классификации LogisticRegression с предварительной настройкой параметров с помощью поиска по сетке.</p>
    <h3 id='24'>👉 Преимущества:</h3>
    <ul>
      <li>Высокая точность классификации.</li>
      <li>Возможность работать с маломощными вычислительными ресурсами.</li>
    </ul>
  </div>
</body>
