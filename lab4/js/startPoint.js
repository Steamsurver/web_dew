const root = document.createElement('div');
root.id = 'root';
root.className = 'root';
const header        = document.createElement('header');
const toolPanel     = document.createElement('div');
const taskPanel     = document.createElement('div');
const headerH1      = document.createElement('h1');


//Header
headerH1.textContent = 'TODO LIST';
header.appendChild(headerH1);


//Панель с инструментами
const toolPanelSearch               = document.createElement('input');
const toolPanelAddButton            = document.createElement('div');
const toolPanelThemeButton          = document.createElement('div');
const addbuttonImage                = document.createElement('img');
const themebuttonImage              = document.createElement('img');
toolPanel.id                        = 'tool-panel';
toolPanelAddButton.id               = 'tool-panel-add-button';
toolPanelAddButton.className        = 'default-button';
toolPanelThemeButton.id             = 'tool-panel-theme-button';
toolPanelThemeButton.className      = 'default-button';
toolPanelSearch.type                = 'text';
toolPanelSearch.id                  = 'tool-panel-input';
toolPanelSearch.className           = 'default-text-input';
toolPanelSearch.placeholder         = 'Search note...';
addbuttonImage.id                   = 'tool-panel-add-button-image';
addbuttonImage.className            = 'default-button-image';
addbuttonImage.src                  = './resources/plus.png';
themebuttonImage.id                 = 'tool-panel-theme-button-image';
themebuttonImage.className          = 'default-button-image';
themebuttonImage.src                = './resources/light-mode.png';
toolPanelAddButton.appendChild(addbuttonImage);
toolPanelThemeButton.appendChild(themebuttonImage);
toolPanel.appendChild(toolPanelSearch);
toolPanel.appendChild(toolPanelAddButton);
toolPanel.appendChild(toolPanelThemeButton);


//Модалка для добавления задачи
const addModalOverlay               = document.createElement('div');
const addModalContent               = document.createElement('div');
const addModalTitle                 = document.createElement('h2');
const addModalInput                 = document.createElement('input');
const addModalCancelButton          = document.createElement('div');
const addModalApplyButton           = document.createElement('div');
const addModalCancelButtonP         = document.createElement('p');
const addModalApplyButtonP          = document.createElement('p');
addModalOverlay.className           = 'add-modal-overlay';
addModalOverlay.id                  = 'add-modal-overlay';
addModalContent.className           = 'add-modal-content';
addModalContent.id                  = 'add-modal-content';
addModalTitle.textContent           = 'NEW NOTE';
addModalInput.type                  = 'text';
addModalInput.id                    = 'add-modal-input';
addModalInput.className             = 'default-text-input';
addModalInput.placeholder           = 'Input your note...';
addModalCancelButton.id             = 'add-modal-cancel-button';
addModalCancelButton.className      = 'default-wide-button';
addModalApplyButton.id              = 'add-modal-apply-button';
addModalApplyButton.className       = 'default-wide-button';
addModalCancelButtonP.textContent   = 'cancel';
addModalApplyButtonP.textContent    = 'apply';
addModalCancelButton.appendChild(addModalCancelButtonP);
addModalApplyButton.appendChild(addModalApplyButtonP);
addModalContent.appendChild(addModalTitle);
addModalContent.appendChild(addModalInput);
addModalContent.appendChild(addModalCancelButton);
addModalContent.appendChild(addModalApplyButton);
addModalOverlay.appendChild(addModalContent);


root.appendChild(header);
root.appendChild(toolPanel);
root.appendChild(taskPanel);
root.appendChild(addModalOverlay);
document.body.appendChild(root);

import('./eventHandlers.js').then(module => {
    module.setupEvents();
});