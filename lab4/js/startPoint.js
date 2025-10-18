const root = document.createElement('div');
root.id = 'root';
root.className = 'root';
const header            = document.createElement('header');
const toolPanel         = document.createElement('div');
const taskPanel         = document.createElement('div');
const doneTaskPanel     = document.createElement('div');

//Header
const headerH1      = document.createElement('h1');
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
addbuttonImage.className            = 'default-button-invert-image';
addbuttonImage.src                  = './resources/plus.png';
themebuttonImage.id                 = 'tool-panel-theme-button-image';
themebuttonImage.className          = 'default-button-invert-image';
themebuttonImage.src                = './resources/light-mode.png';
toolPanelSearch.setAttribute('autocomplete', 'off');
toolPanelAddButton.appendChild(addbuttonImage);
toolPanelThemeButton.appendChild(themebuttonImage);
toolPanel.appendChild(toolPanelSearch);
toolPanel.appendChild(toolPanelAddButton);
toolPanel.appendChild(toolPanelThemeButton);


//панель с заметками
const taskPanelTitle        = document.createElement('p');
taskPanelTitle.id           = 'task-panel-title';
taskPanel.className         = 'task-panel';
taskPanel.id                = 'task-panel';
taskPanel.appendChild(taskPanelTitle);
var noteNumber = taskPanel.childElementCount - 1;
taskPanelTitle.textContent  = 'Task to do - ' + noteNumber;


//панель с завершенными заметками
const doneTaskPanelTitle        = document.createElement('p');
doneTaskPanelTitle.id           = 'done-task-panel-title';
doneTaskPanel.className         = 'done-task-panel';
doneTaskPanel.id                = 'done-task-panel';
doneTaskPanel.appendChild(doneTaskPanelTitle);
var doneNoteNumber = doneTaskPanel.childElementCount - 1;
doneTaskPanelTitle.textContent  = 'Done - ' + doneNoteNumber;


root.appendChild(header);
root.appendChild(toolPanel);
root.appendChild(taskPanel);
root.appendChild(doneTaskPanel);
document.body.appendChild(root);

import('./eventHandlers.js').then(module => {
    module.setupEvents();
});