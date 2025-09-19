let root = document.getElementById('root_point');
let container = document.getElementById('mainContainer');


/*Форма обратной связи*/
let messageButton = $('<button></button>').addClass('message-button');
messageButton.append($('<img src="./resources/mess.png" width="40" height="40"></img>'));
let modalFeedbackWindow = $('<div></div>').addClass('feedback-window');
let modalFeedbackContent = $('<div></div>').addClass('feedback-content');
let closeFeedbackBtn =  $('<span></span >').addClass('feedback-close-button').text('\u00D7');
let feedbackForm = $('<form></form>').addClass('feedback-form');
let inputName = $('<input type="text" id="name" name="name" placeholder="Введите ваше имя" required></input>').addClass('feedback-input-name');
let inputEmale = $('<input type="email" id="email" name="email" placeholder="Введите ваш email" required></input>').addClass('feedback-input-emale');
let textareaMessage = $('<textarea id="message" name="message" rows="5" placeholder="Ваше сообщение" required></textarea>').addClass('feedback-textarea-message');
let submitFeedbackButton = $('<button type="submit"></button>').addClass('feedback-submit-button').text('Отправить');
let statusMessage = $('<div id=statusMessage role="alert"></div>');

feedbackForm.append($('<label for="name"></label>').text('Имя:'));
feedbackForm.append(inputName);
feedbackForm.append($('<label for="email"></label>').text('Email:'));
feedbackForm.append(inputEmale);
feedbackForm.append($('<label for="message"></label>').text('Сообщение:'));
feedbackForm.append(textareaMessage);
feedbackForm.append(submitFeedbackButton);

modalFeedbackWindow.append(modalFeedbackContent);
modalFeedbackContent.append(closeFeedbackBtn);
modalFeedbackContent.append($('<h2></h2>').text('Обратная связь'));
modalFeedbackContent.append(feedbackForm);
modalFeedbackContent.append(statusMessage);


/*Выпадающее меню навигатора*/
let navigator = $('<div></div>').addClass('navigator');
let dropDownLine = $('<div></div>').addClass('dropdown-line').text('Навигация');
let dropDownMenu = $('<div></div>').addClass('dropdown-menu');

let listHeader = $('<ul></ul>');
listHeader.append($('<li></li>').append($('<a href="#about"></a>').text('О себе')));
listHeader.append($('<li></li>').append($('<a href="#skills"></a>').text('Навыки')));
listHeader.append($('<li></li>').append($('<a href="#portfolio"></a>').text('Примеры работ')));
listHeader.append($('<li></li>').append($('<a href="#contacts"></a>').text('Контакты')));
listHeader.append($('<li></li>').append($('<a href="#footer"></a>').text('Ссылки')));
dropDownMenu.append(listHeader);
navigator.append(dropDownLine);
navigator.append(dropDownMenu);

/* Header */
let header = $('<Header></Header>').addClass('main-header');
let divLogo = $('<div></div>').addClass('logo').text('Мое портфолио');
header.append(divLogo);
header.append(navigator);


/* section 1*/
let section1 = $('<section id="about"></section>').addClass('section-block');
let sectionList1 = $('<ul></ul>');
section1.append($('<h2></h2>').text('О себе'));
section1.append($('<p></p>').text('Меня зовут Иван Гришин, я студент разработчик ПО и веб разработчик.'));
section1.append($('<p></p>').text('За это время я участвовал в таких проектах как: '));
sectionList1.append($('<li></li>').text('Разработка базового движка на с++'));
sectionList1.append($('<li></li>').text('Создание собственной базы данных'));
sectionList1.append($('<li></li>').text('Создание собственного сайта с back-end поддержкой'));
section1.append(sectionList1);


/* section 2*/
let section2 = $('<section id="skills"></section>').addClass('section-block');
let sectionList2 = $('<ul></ul>');
section2.append($('<h2></h2>').text('Навыки'));
sectionList2.append($('<li></li>').text('HTML — уверенный уровень'));
sectionList2.append($('<li></li>').text('CSS — уверенный уровень'));
sectionList2.append($('<li></li>').text('JavaScript — уверенный уровень'));
sectionList2.append($('<li></li>').text('С++ — продвинутый уровень'));
sectionList2.append($('<li></li>').text('Java — продвинутый уровень'));
sectionList2.append($('<li></li>').text('SQl — продвинутый уровень'));
section2.append(sectionList2);


/* section 3*/
let section3 = $('<section id="portfolio"></section>').addClass('section-block');
let article1 = $('<article></article>');
let article2 = $('<article></article>');
let article3 = $('<article></article>');
let image1 = $('<img src="resources/life_pas_scsh.png" ></img>').addClass('image-class');
let image2 = $('<img src="resources/telegramm_bot_screen.png" ></img>').addClass('image-class');
let image3 = $('<img src="resources/imgui.png" ></img>').addClass('image-class');

section3.append($('<h2></h2>').text('Портфолио'));
article1.append($('<h3></h3>').text('Проект 1'));
article1.append(image1);
article1.append($('<p></p>').text('Пример отчета по лабараторной "Игра в жизнь".'));
article1.append($('<p></p>').text('Лабараторная написанас использованием моего движка и параллельными вычислениями.'));
article1.append($('<p></p>').text('Сама игра симулировала примитивное поведение жизни с определенным алгоритмом.'));

article2.append($('<h3></h3>').text('Проект 2'));
article2.append(image2);
article2.append($('<p></p>').text('Пример работы телеграмм бота. Этот бот был создан для поддержки онлайн магазина.'));
article2.append($('<p></p>').text('Через него можно было отслеживать и создавать заказы.'));

article3.append($('<h3></h3>').text('Проект 3'));
article3.append(image3);
article3.append($('<p></p>').text('Пример того, как выглядел интерфейс у движка.'));
article3.append($('<p></p>').text('Использовался он в основном для отрисовки и работы с 2D изображениями.'));
article3.append($('<p></p>').text('Но если очень захочется можно отрисовать 3D объекты.'));

section3.append(article1);
section3.append(article2);
section3.append(article3);


/* footer and contacts*/
let section4 = $('<section id="contacts"></section>').addClass('section-block');
let sectionList4 = $('<ul></ul>');
section4.append($('<h2></h2>').text('Контакты'));
section4.append($('<p></p>').text('Email: ').append( $('<a href="mailto:dowasky10@gmail.com"></a>').text('dowasky10@gmail.com')));
section4.append($('<p></p>').text('Телефон: +7 996 415 44 59'));
section4.append($('<p></p>').text('Соцсети'));
sectionList4.append($('<li></li>').append($('<a href="https://t.me/DeaDIntus" target="_blank" rel="noopener"></a>').text('Telegram')));
sectionList4.append($('<li></li>').append($('<a href="https://github.com/Steamsurver" target="_blank" rel="noopener"></a>').text('GitHub')));
section4.append(sectionList4);

let footer = $('<footer id="footer" ></footer>');
footer.append($('<p></p>').text('© 2025 Иван Гришин. Все права защищены.'));
let footerNavigator = navigator.clone(true);
footer.append(footerNavigator);

$('#mainContainer').append(modalFeedbackWindow);
$('#mainContainer').append(messageButton);
$('#mainContainer').append(header);
$('#mainContainer').append(section1);
$('#mainContainer').append(section2);
$('#mainContainer').append(section3);
$('#mainContainer').append(section4);
$('#mainContainer').append(footer);


import('./eventHandlers.js').then(module => {
    module.setupEvents();
});