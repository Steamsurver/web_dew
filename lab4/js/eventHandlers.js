export function setupEvents(){
    const html                          = document.documentElement;
    const taskPanel                     = document.getElementById('task-panel');
    const taskPanelTitle                = document.getElementById('task-panel-title');
    const doneTaskPanel                 = document.getElementById('done-task-panel');
    const doneTaskPanelTitle            = document.getElementById('done-task-panel-title');
    const toolPanelAddButton            = document.getElementById('tool-panel-add-button');
    const toolPanelThemeButton          = document.getElementById('tool-panel-theme-button');
    const searchInput                   = document.getElementById('tool-panel-input');

    //создание карточки задачи
    function createNoteBox(outNoteName){
        const noteBox = document.createElement('div');
        const delButton = document.createElement('button');
        const delImage = document.createElement('img');
        const noteName = document.createElement('h3');
        const noteCheckbox = document.createElement('input');
        const editButton = document.createElement('button');
        const editImage = document.createElement('img');
        let currentPanel = taskPanel;
        let currentPanelTitle = taskPanelTitle;

        noteBox.id                  = 'task-panel-note-box';
        noteBox.className           = 'note-box';  
        noteCheckbox.type           = 'checkbox';
        noteCheckbox.id             = 'note-box-checkbox';
        noteCheckbox.className      = 'default-checkbox-input';
        delButton.id                = 'note-box-delete-button';
        delButton.className         = 'invisible-button';
        delImage.id                 = 'note-box-delete-button-image';
        delImage.className          = 'default-button-image';
        delImage.src                = './resources/trash.png';
        noteName.textContent        = outNoteName;
        noteName.id                 = 'note-box-notename';
        editButton.id               = 'note-box-edit-button';
        editButton.className        = 'invisible-button';
        editImage.id                = 'note-box-edit-button-image';
        editImage.className         = 'default-button-image';
        editImage.src               = './resources/pencil.png';

        delButton.appendChild(delImage);
        editButton.appendChild(editImage);
        noteBox.appendChild(noteCheckbox);
        noteBox.appendChild(noteName);
        noteBox.appendChild(editButton);
        noteBox.appendChild(delButton);
        taskPanel.appendChild(noteBox);

        noteCheckbox.addEventListener('change', function(event){
            if(event.target.checked){
                taskPanel.removeChild(noteBox);
                let noteNumber = taskPanel.childElementCount - 1;
                taskPanelTitle.textContent = 'Task to do - ' + noteNumber;

                doneTaskPanel.appendChild(noteBox);
                let doneNoteNumber = doneTaskPanel.childElementCount - 1;
                doneTaskPanelTitle.textContent = 'Done - ' + doneNoteNumber;
                currentPanel = doneTaskPanel;
                currentPanelTitle = doneTaskPanelTitle;
            }else{
                doneTaskPanel.removeChild(noteBox);
                let doneNoteNumber = doneTaskPanel.childElementCount - 1;
                doneTaskPanelTitle.textContent = 'Done - ' + doneNoteNumber;

                taskPanel.appendChild(noteBox);
                let noteNumber = taskPanel.childElementCount - 1;
                taskPanelTitle.textContent = 'Task to do - ' + noteNumber;
                currentPanel = taskPanel;
                currentPanelTitle = taskPanelTitle;
            }
        });

        delButton.addEventListener('click', ()=>{
            noteBox.style.animation = 'fadeOut 0.5s ease forwards';
            setTimeout(() => {
                currentPanel.removeChild(noteBox);
                let noteNumber = currentPanel.childElementCount - 1;
                currentPanelTitle.textContent = 'Task to do - ' + noteNumber;
            }, 500);
        });

        editButton.addEventListener('click', ()=>{
            createEditModal(noteName);
        });
    }


    //создание модального окна для редактирования зададч
    function createEditModal(noteTitle){
        const root = document.getElementById('root');
        const editModalOverlay               = document.createElement('div');
        const editModalContent               = document.createElement('div');
        const editModalTitle                 = document.createElement('h2');
        const editModalInput                 = document.createElement('input');
        const editModalCancelButton          = document.createElement('button');
        const editModalApplyButton           = document.createElement('button');
        const editModalCancelButtonP         = document.createElement('p');
        const editModalApplyButtonP          = document.createElement('p');
        editModalOverlay.className           = 'edit-modal-overlay';
        editModalOverlay.id                  = 'edit-modal-overlay';
        editModalContent.className           = 'edit-modal-content';
        editModalContent.id                  = 'edit-modal-content';
        editModalTitle.textContent           = 'EDIT NOTE';
        editModalInput.type                  = 'text';
        editModalInput.id                    = 'edit-modal-input';
        editModalInput.className             = 'default-text-input';
        editModalInput.value                 = noteTitle.textContent;
        editModalCancelButton.id             = 'edit-modal-cancel-button';
        editModalCancelButton.className      = 'default-wide-button';
        editModalApplyButton.id              = 'edit-modal-apply-button';
        editModalApplyButton.className       = 'default-wide-button';
        editModalCancelButtonP.textContent   = 'cancel';
        editModalApplyButtonP.textContent    = 'apply';
        editModalInput.setAttribute('autocomplete', 'off');
        editModalCancelButton.appendChild(editModalCancelButtonP);
        editModalApplyButton.appendChild(editModalApplyButtonP);
        editModalContent.appendChild(editModalTitle);
        editModalContent.appendChild(editModalInput);
        editModalContent.appendChild(editModalCancelButton);
        editModalContent.appendChild(editModalApplyButton);
        editModalOverlay.appendChild(editModalContent);


        //кнопка отмены редактирования кнопки
        editModalCancelButton.addEventListener('click', ()=>{
            editModalOverlay.style.animation = 'fadeOut 0.2s ease forwards';

            setTimeout(() => {
                editModalOverlay.classList.remove('show');
                editModalOverlay.remove();
            }, 500);
        });


        //выход при нажании на оверлей модалки
        editModalOverlay.addEventListener('mouseup', (e) => {
            if (e.target === editModalOverlay){
                editModalOverlay.style.animation = 'fadeOut 0.2s ease forwards';

                setTimeout(() => {
                    editModalOverlay.classList.remove('show');
                    editModalOverlay.remove();
                }, 500);
            }
        });
        
        //кнопка завершения редактирования заметки
        editModalApplyButton.addEventListener('click', ()=>{
            if( editModalInput.value!='')
                editModalOverlay.style.animation = 'fadeOut 0.2s ease forwards';
                setTimeout(() => {
                    noteTitle.textContent = editModalInput.value;
                    editModalOverlay.classList.remove('show');
                    editModalOverlay.remove();
                }, 100);
        });

        root.appendChild(editModalOverlay);
        setTimeout(() => editModalOverlay.classList.add('show'), 10);
    }


    //создания модального окна для добавления задач
    function createAddModal(){
        const root = document.getElementById('root');
        const addModalOverlay               = document.createElement('div');
        const addModalContent               = document.createElement('div');
        const addModalTitle                 = document.createElement('h2');
        const addModalInput                 = document.createElement('input');
        const addModalCancelButton          = document.createElement('button');
        const addModalApplyButton           = document.createElement('button');
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
        addModalInput.setAttribute('autocomplete', 'off');
        addModalCancelButton.appendChild(addModalCancelButtonP);
        addModalApplyButton.appendChild(addModalApplyButtonP);
        addModalContent.appendChild(addModalTitle);
        addModalContent.appendChild(addModalInput);
        addModalContent.appendChild(addModalCancelButton);
        addModalContent.appendChild(addModalApplyButton);
        addModalOverlay.appendChild(addModalContent);

        //кнопка отмены добавления заметки
        addModalCancelButton.addEventListener('click', ()=>{
            addModalOverlay.style.animation = 'fadeOut 0.2s ease forwards';

            setTimeout(() => {
                addModalOverlay.classList.remove('show');
                addModalOverlay.remove();
            }, 500);
        });


        //выход при нажании на оверлей модалки
        addModalOverlay.addEventListener('mouseup', (e) => {
            if (e.target === addModalOverlay){
                addModalOverlay.style.animation = 'fadeOut 0.2s ease forwards';

                setTimeout(() => {
                    addModalOverlay.classList.remove('show');
                    addModalOverlay.remove();
                }, 500);
            }
        });
        
        //кнопка завершения добавления заметки
        addModalApplyButton.addEventListener('click', ()=>{
            if(addModalInput.value != ''){
                createNoteBox(addModalInput.value);
                let noteNumber = taskPanel.childElementCount - 1;
                taskPanelTitle.textContent = 'Task to do - ' + noteNumber;
                
                addModalOverlay.style.animation = 'fadeOut 0.2s ease forwards';
                setTimeout(() => {
                    addModalOverlay.classList.remove('show');
                    addModalOverlay.remove();
                }, 100);
            }
        });

        root.appendChild(addModalOverlay);
        setTimeout(() => addModalOverlay.classList.add('show'), 10);
    }


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
    toolPanelAddButton.addEventListener('click', createAddModal);

    
    //динамический поиск задач
    searchInput.addEventListener('input', function(){
        const query = this.value.toLowerCase();

        const notesCollection = taskPanel.getElementsByClassName('note-box');

        Array.from(notesCollection).forEach(item => {
            const noteName      = item.querySelector('#note-box-notename');
            const noteNameText  = noteName.textContent;

            if (noteNameText.includes(query)) {
                item.classList.remove('hide');  // Показываем
            } else {
                item.classList.add('hide');  // Скрываем
            }
        });
    });

}
