export function setupEvents(){
    const html = document.documentElement;
    const root = document.getElementsByClassName('root');
    const taskPanel = document.getElementById('task-panel');
    const toolPanelAddButton = document.getElementById('tool-panel-add-button');
    const toolPanelThemeButton = document.getElementById('tool-panel-theme-button');
    const addModalOverlay = document.getElementById('add-modal-overlay');
    const addModalCancelButton = document.getElementById('add-modal-cancel-button');
    const addModalApplyButton  = document.getElementById('add-modal-apply-button');
    const addModalInput = document.getElementById('add-modal-input');

    //подгрузка темы после перезагрузки страницы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        const image = document.getElementById('tool-panel-theme-button-image');
        if(savedTheme == 'dark')
            image.src = './resources/light-mode.png';
        else
            image.src = './resources/dark-mode.png';
    }
    

    //кнопка по смене темы
    toolPanelThemeButton.addEventListener('click', ()=>{
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        // Сохраняем в localStorage
        localStorage.setItem('theme', newTheme);    
        const image = document.getElementById('tool-panel-theme-button-image');
        if(newTheme == 'dark')
            image.src = './resources/light-mode.png';
        else
            image.src = './resources/dark-mode.png';
    });


    //кнопка добавления заметки
    toolPanelAddButton.addEventListener('click', ()=>{
        addModalInput.value = '';
        setTimeout(() => addModalOverlay.classList.add('show'), 10);
    });


    //кнопка отмены добавления заметки
    addModalCancelButton.addEventListener('click', ()=>{
        setTimeout(() => addModalOverlay.classList.remove('show'), 100);
    });


    //выход при нажании на оверлей модалки
    addModalOverlay.addEventListener('click', (e) => {
        if (e.target === addModalOverlay)
            setTimeout(() => addModalOverlay.classList.remove('show'), 100);
    });


    //кнопка завершения добавления заметки
    addModalApplyButton.addEventListener('click', ()=>{
        if(addModalInput.value != ''){
            const noteBox = document.createElement('div');
            const delButton = document.createElement('div');
            const delImage = document.createElement('img');
            const noteName = document.createElement('h3');
            const noteCheckbox = document.createElement('input');

            noteBox.id                  = 'task-panel-note-box';
            noteBox.className           = 'note-box';  
            noteCheckbox.type           = 'checkbox';
            noteCheckbox.id             = 'task-panel-checkbox';
            noteCheckbox.className      = 'default-checkbox-input';
            delButton.id                = 'task-panel-delete-button';
            delButton.className         = 'invisible-button';
            delImage.id                 = 'task-panel-delete-button-image';
            delImage.className          = 'default-button-image';
            delImage.src                = './resources/trash.png';
            noteName.textContent        = addModalInput.value;
            noteName.id                 = 'task-panel-notename';

            delButton.appendChild(delImage);
            noteBox.appendChild(noteCheckbox);
            noteBox.appendChild(noteName);
            noteBox.appendChild(delButton);
            taskPanel.appendChild(noteBox);

            noteCheckbox.addEventListener('change', () => {

            });

            delButton.addEventListener('click', ()=>{
                taskPanel.removeChild(noteBox);
            });
            setTimeout(() => addModalOverlay.classList.remove('show'), 100); 
        }
    });
}
