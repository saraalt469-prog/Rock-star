window.onload = function () {
  var content = document.querySelector(".content");

  var homeC = content.innerHTML;

  var about = `    <div class="head">
          <div class="contain">
            <img
              class="logo"
              src="https://i.pinimg.com/736x/92/c5/d8/92c5d80effca7e40f59dbb9ea405cdaf.jpg"
              alt=""
            />
            <p class="header2__title">Rock Star</p>
            <nav class="header2-navigation">
              <a class="header2-navigation-link home" data-page="index.html" href="#">главная </a>
              <a class="header2-navigation-link aboutUs" data-page="aboutUs.html" href="#">о нас</a>
              <a class="header2-navigation-link katalog"  data-page="katalog.html" href="#">каталог </a>
            </nav>
          </div>
        </div>
        <div class="hero2-section">
          <p class="hero2-section__title">
            Мы научим тебя играть то, что ты любишь»
            <br />
            Школа создана для тех, кто всегда мечтал, но боялся начать.
          </p>
        </div>
        <div class="container">
          <div class="history">
            <p class="history__text">
              Основатель — музыкант с 15-летним стажем. Начинал в гараже, играл в
              группах, объездил полстраны. Открыл школу, потому что захотел делиться
              опытом без снобизма и скучной теории.
            </p>
            <img
              class="history__img"
              src="https://i.pinimg.com/736x/6c/c4/f9/6cc4f93a83ec5a54a025ebf2482eb6e8.jpg"
              alt=""
            />
          </div>
        </div>
    
        <div class="teachers-wr">
          <p class="teachers__title">Наши преподаватели</p>
          <div class="teachers">
            <div class="teachers__card">
              <img
                class="teachers__card-img"
                src="https://i.pinimg.com/1200x/cf/d9/dc/cfd9dc357e2b28f5cf02231b67947138.jpg"
                alt="?"
              />
              <p class="teachers__card-name">Элиза</p>
              <p class="teachers__card-text">
                Классика, фингерстайл, эстрада <br />
                Стаж 7 лет
              </p>
            </div>
            <div class="teachers__card">
              <img
                class="teachers__card-img"
                src="https://i.pinimg.com/1200x/ea/a0/1d/eaa01dd19ad3b8f45b19fdcf3576b7de.jpg"
                alt=""
              />
              <p class="teachers__card-name">Михаэль</p>
              <p class="teachers__card-text">
                Рок, блюз, электрогитара <br />
                Стаж 12 лет
              </p>
            </div>
            <div class="teachers__card">
              <img
                class="teachers__card-img"
                src="https://i.pinimg.com/736x/c1/f3/64/c1f3646bd04979226e04d4ad8519b2a5.jpg"
                alt=""
              />
              <p class="teachers__card-name">Ясмин</p>
              <p class="teachers__card-text">
                играет: 10 лет, преподает - 6 <br />Инди, поп, хард рок
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="qestion">
            <p class="qestion__title">почему нам доверяют?</p>
            <div class="qestion__anwer-wr">
              <p class="qestion__anwer">
                Индивидуальный подход — программа под твой уровень и цели
              </p>
              <p class="qestion__anwer">
                Песни, которые ты любишь — никакой скучной классики, если ты не
                просил
              </p>
              <p class="qestion__anwer">
                Без страха ошибиться — поддерживающая атмосфера
              </p>
              <p class="qestion__anwer">Удобно добираться — в центре города</p>
            </div>
          </div>
        </div>
            <footer class="footer2">
          <div class="footer2__content">
            <img
              class="logo"
              src="https://i.pinimg.com/736x/92/c5/d8/92c5d80effca7e40f59dbb9ea405cdaf.jpg"
              alt=""
            />
            <div>
    
                <p class="footer2__text">Приходи на пробный урок — познакомимся, подберем программу, ответим на вопросы</p>
                <p class="footer2__text">телефон: +7 (XXX) XXX-XX-XX</p>
            </div>
            <nav class="header2-navigation">
              <a class="header2-navigation-link home" data-page="index.html" href="#">главная </a>
              <a class="header2-navigation-link aboutUs" data-page="aboutUs.html"  href="#">о нас</a>
              <a class="header2-navigation-link katalog"  data-page="katalog.html" href="#">каталог </a>
            </nav>
          </div>
          </div>
        </footer>`;
  var catalog = `
      <div class="header2">
        <div class="contain">
          <img
            class="logo"
            src="https://i.pinimg.com/736x/92/c5/d8/92c5d80effca7e40f59dbb9ea405cdaf.jpg"
            alt=""
          />
          <p class="header2__title">Rock Star</p>
          <nav class="header2-navigation">
            <a class="header2-navigation-link home" data-page="index.html" href="#">главная </a>
            <a class="header2-navigation-link aboutUs" data-page="aboutUs.html" href="#" >о нас</a>
            <a class="header2-navigation-link katalog" data-page="katalog.html" href="#" >каталог </a>
          </nav>
        </div>
      </div>
      <div class="catalog">
        <div class="catalog__content">
          <div class="catalog__content-text-wr">
            <h4 class="catalog__content-title">
              Выбери свой курс и начни играть
            </h4>
            <p class="catalog__content-text">
              Все программы составлены так, чтобы ты услышал свой первый результат
              уже на первом занятии. Просто выбери что тебе по душе
            </p>
          </div>
          <div class="catalog__content-img-wr">
            <img
              class="catalog__content-img"
              src="https://i.pinimg.com/1200x/30/6b/cf/306bcfcbbea5ac2f1016eda03500fa9d.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="kurs">
          <div class="kurs__card">
            <div class="kurs__card-content">
              <p class="kurs__card-title">
                «Гитара с нуля. Первая песня» <br />
                Подойдет тем, кто впервые берет инструмент в руки.
              </p>
              <p class="kurs__card-text">
                Самый плавный старт: постановка рук, первые аккорды, простые
                ритмы. Никакой скучной теории — только практика.
              </p>
              <ul>
                <li>5 основных аккордов</li>
                <li>2 вида боя</li>
                <li>Длительность: 1 месяц (8 занятий).</li>
                <li>Формат: Индивидуально / В мини-группе.</li>
                <li>4 900 ₽ / месяц.</li>
              </ul>
            </div>
            <img
              class="kurs__card-img"
              src="https://i.pinimg.com/1200x/e9/0a/94/e90a94ede24e82510ab3e0fd0364e54b.jpg"
              alt=""
            />
          </div>
          <div class="kurs__card">
            <div class="kurs__card-content">
              <p class="kurs__card-title">
                «Электрогитара. Путь к соло»<br />Подойде тем, кто хочет играть
                рок, метал или блюз.
              </p>
              <p class="kurs__card-text">
                Работа с медиатором, техники глушения, легато и тэппинг. Изучение
                партий культовых гитаристов.
              </p>
              <ul>
                <li>Пентатоника и импровизация</li>
                <li>Работа с "перегрузом" и эффектами</li>
                <li>Изучение 5 риффов</li>
                <li>Длительность: 3 месяца (24 занятия).</li>
                <li>Формат: Индивидуально.</li>
                <li>6 500 ₽ / месяц.</li>
              </ul>
            </div>
            <img
              class="kurs__card-img"
              src="https://i.pinimg.com/1200x/65/7d/6a/657d6a7fbf8cd3bd957329ce2ff62776.jpg"
              alt=""
            />
          </div>
          <div class="kurs__card">
            <div class="kurs__card-content">
              <p class="kurs__card-title">
                «Аккомпанемент и пение под гитару» <br />Подойдет тем, кто мечтает
                петь песни под гитару в компании.
              </p>
              <p class="kurs__card-text">
                Учимся петь и играть одновременно, подбирать песни на слух и
                "аккомпанировать" своему голосу.
              </p>
              <ul>
                <li>Сложные ритмические рисунки (бой + голос)</li>
                <li>Баррэ и как его "взять"</li>
                <li>Длительность: 2 месяца (16 занятий).</li>
                <li>Формат: Индивидуально.</li>
                <li>Цена: 5 900 ₽ / месяц.</li>
              </ul>
            </div>
            <img
              class="kurs__card-img"
              src="https://i.pinimg.com/736x/9f/f3/ac/9ff3ac179d8e42ff44dae690148e8594.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <footer class="footer2">
        <div class="footer2__content">
          <img
            class="logo"
            src="https://i.pinimg.com/736x/92/c5/d8/92c5d80effca7e40f59dbb9ea405cdaf.jpg"
            alt=""
          />
          <div>
  
              <p class="footer2__text">Остались какие-то вопросы? Напишите нам!</p>
              <p class="footer2__text">телефон: +7 (XXX) XXX-XX-XX</p>
          </div>
          <nav class="header2-navigation">
            <a class="header2-navigation-link home" data-page="index.html" href="index.html">главная </a>
            <a class="header2-navigation-link aboutUs" data-page="aboutUs.html" href="#" href="#">о нас</a>
            <a class="header2-navigation-link katalog" data-page="katalog.html" href="#" href="#">каталог </a>
          </nav>
        </div>
        </div>
      </footer>`;
  var links = document.querySelectorAll("nav a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      if (this.className == "home") {
        content.innerHTML = homeC;
      } else if (this.className == "aboutUs") {
        content.innerHTML = about;
      } else if (this.className == "katalog") {
        content.innerHTML = catalog;
      }
      return false;
    };
  }
};
