let root = document.getElementById('root_point');
let container = document.getElementById('mainContainer');

/*Кнопка вверх*/
let upButton = $('<div id="upButton"></div>');
upButton.append($('<img src="./resources/top.png" width="40" height="40"></img>'));

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
let navigatorButton = $('<div></div>').addClass('navigator-button');
let navigatorImg = $('<img src="./resources/navigation.png"></img>').addClass('navigation-image');
let dropDownMenu = $('<div></div>').addClass('dropdown-menu');

let listHeader = $('<ul></ul>');
listHeader.append($('<li></li>').append($('<a id="aboutLink" href="#about"></a>').text('О себе')));
listHeader.append($('<li></li>').append($('<a id="skillsLink" href="#skills"></a>').text('Навыки')));
listHeader.append($('<li></li>').append($('<a id="portfolioLink" href="#portfolio"></a>').text('Примеры работ')));
listHeader.append($('<li></li>').append($('<a id="contactsLink" href="#contacts"></a>').text('Контакты')));
listHeader.append($('<li></li>').append($('<a id="footerLink" href="#footer"></a>').text('Ссылки')));
dropDownMenu.append(listHeader);

navigatorButton.append(navigatorImg);
navigator.append(dropDownMenu);

/* Header */
let header = $('<Header></Header>').addClass('main-header');
let divLogo = $('<div></div>').addClass('logo').text('Мое портфолио');
header.append(divLogo);

//панель с кнопками
let buttonPanel = $('<div></div>').addClass('button-panel');

/* section 1*/
let aboutSectionBlock = $('<div id="about"></div>').addClass('section-block');
let aboutSectionWindow = $('<div id="aboutWindow"></div>').addClass('section-Window');
let aboutSectionList = $('<ul></ul>');
aboutSectionBlock.append($('<div id="aboutTitle"></div>').addClass('section-title').text('О себе'));
aboutSectionWindow.append($('<p></p>').text('Меня зовут Иван Гришин, я студент разработчик ПО и веб разработчик.'));
aboutSectionWindow.append($('<p></p>').text('За это время я участвовал в таких проектах как: '));
aboutSectionList.append($('<li></li>').text('Разработка базового движка на с++'));
aboutSectionList.append($('<li></li>').text('Создание собственной базы данных'));
aboutSectionList.append($('<li></li>').text('Создание собственного сайта с back-end поддержкой'));
aboutSectionWindow.append(aboutSectionList);
aboutSectionBlock.append(aboutSectionWindow);

/* section 2*/
let skillsSectionBlock = $('<div id="skills"></div>').addClass('section-block');
let skillsSectionWindow = $('<div id="skillsWindow"></div>').addClass('section-Window');
let skillsSectionList = $('<ul></ul>');
skillsSectionBlock.append($('<div id="skillsTitle"></div>').addClass('section-title').text('Навыки'));
skillsSectionList.append($('<li></li>').text('HTML — уверенный уровень'));
skillsSectionList.append($('<li></li>').text('CSS — уверенный уровень'));
skillsSectionList.append($('<li></li>').text('JavaScript — уверенный уровень'));
skillsSectionList.append($('<li></li>').text('С++ — продвинутый уровень'));
skillsSectionList.append($('<li></li>').text('Java — продвинутый уровень'));
skillsSectionList.append($('<li></li>').text('SQl — продвинутый уровень'));
skillsSectionWindow.append(skillsSectionList);
skillsSectionBlock.append(skillsSectionWindow);


/*Карусель с изображениями*/
let carouselBlock = $('<div></div>').addClass('image-carousel');
let carouselTrack = $('<div></div>').addClass('carousel-truck');
let carouselPrevButton = $('<button></button>').addClass('carousel-button-prev').text('←');
let carouselNextButton = $('<button></button>').addClass('carousel-button-next').text('→');
let carouselImage = $('<img id="carouselImage"></img>').addClass('image-class');
carouselTrack.append(carouselImage);
carouselBlock.append(carouselTrack);
carouselBlock.append(carouselPrevButton);
carouselBlock.append(carouselNextButton);



/* section 3*/
let portfolioSectionBlock = $('<div id="portfolio"></div>').addClass('section-block');
let portfolioSectionWindow = $('<div id="portfolioWindow"></div>').addClass('section-Window');
let portfolioSectionDescrption = $('<div id="portfolioDesc"></div>');

portfolioSectionBlock.append($('<div id="portfolioTitle"></div>').addClass('section-title').text('Портфолио'));
portfolioSectionWindow.append(portfolioSectionDescrption);
portfolioSectionWindow.append(carouselBlock);
portfolioSectionBlock.append(portfolioSectionWindow);


/* footer and contacts*/
let contactsSectionBlock = $('<div id="contacts"></div>').addClass('section-block');
let contactsSectionWindow = $('<div id="contactsWindow"></div>').addClass('section-Window');
let contactsSectionList = $('<ul></ul>');
contactsSectionBlock.append($('<div id="contactsTitle"></div>').addClass('section-title').text('Контакты'));
contactsSectionWindow.append($('<p></p>').text('Email: ').append( $('<a href="mailto:dowasky10@gmail.com"></a>').text('dowasky10@gmail.com')));
contactsSectionWindow.append($('<p></p>').text('Телефон: +7 996 415 44 59'));
contactsSectionWindow.append($('<p></p>').text('Соцсети'));
contactsSectionList.append($('<li></li>').append($('<a href="https://t.me/DeaDIntus" target="_blank" rel="noopener"></a>').text('Telegram')));
contactsSectionList.append($('<li></li>').append($('<a href="https://github.com/Steamsurver" target="_blank" rel="noopener"></a>').text('GitHub')));
contactsSectionWindow.append(contactsSectionList);
contactsSectionBlock.append(contactsSectionWindow);

let footer = $('<footer id="footer" ></footer>');
footer.append($('<p></p>').text('© 2025 Иван Гришин. Все права защищены.'));


buttonPanel.append(messageButton);
buttonPanel.append(navigatorButton);


$('#mainContainer').append(header);
$('#mainContainer').append(buttonPanel);
$('#mainContainer').append(navigator);
$('#mainContainer').append(modalFeedbackWindow);
$('#mainContainer').append(upButton);
$('#mainContainer').append(aboutSectionBlock);
$('#mainContainer').append(skillsSectionBlock);
$('#mainContainer').append(portfolioSectionBlock);
$('#mainContainer').append(contactsSectionBlock);
$('#mainContainer').append(footer);


import('./eventHandlers.js').then(module => {
    module.setupEvents();
});