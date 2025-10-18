export function setupEvents(){
    const html = document.documentElement;
    const taskPanel = document.getElementById('task-panel');
    const toolPanelAddButton = document.getElementById('tool-panel-add-button');
    const toolPanelThemeButton = document.getElementById('tool-panel-theme-button');


     //создание модального окна для редактирования зададч
    function createEditModal(noteTitle){
        const root = document.getElementById('root');
        const editModalOverlay               = document.createElement('div');
        const editModalContent               = document.createElement('div');
        const editModalTitle                 = document.createElement('h2');
        const editModalInput                 = document.createElement('input');
        const editModalCancelButton          = document.createElement('div');
        const editModalApplyButton           = document.createElement('div');
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
        editModalCancelButton.appendChild(editModalCancelButtonP);
        editModalApplyButton.appendChild(editModalApplyButtonP);
        editModalContent.appendChild(editModalTitle);
        editModalContent.appendChild(editModalInput);
        editModalContent.appendChild(editModalCancelButton);
        editModalContent.appendChild(editModalApplyButton);
        editModalOverlay.appendChild(editModalContent);


        //кнопка отмены редактирования кнопки
        editModalCancelButton.addEventListener('click', ()=>{
            editModalOverlay.classList.remove('show');
            setTimeout(() => editModalOverlay.remove(), 100);
        });


        //выход при нажании на оверлей модалки
        editModalOverlay.addEventListener('click', (e) => {
            if (e.target === editModalOverlay){
                editModalOverlay.classList.remove('show');
                setTimeout(() => editModalOverlay.remove(), 100);
            }
        });
        
        //кнопка завершения добавления заметки
        editModalApplyButton.addEventListener('click', ()=>{
            if( editModalInput.value!='')
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

        //кнопка отмены добавления заметки
        addModalCancelButton.addEventListener('click', ()=>{
            addModalOverlay.classList.remove('show');
            setTimeout(() => addModalOverlay.remove(), 100);
        });


        //выход при нажании на оверлей модалки
        addModalOverlay.addEventListener('click', (e) => {
            if (e.target === addModalOverlay){
                addModalOverlay.classList.remove('show');
                setTimeout(() => addModalOverlay.remove(), 100);
            }
        });
        
        //кнопка завершения добавления заметки
        addModalApplyButton.addEventListener('click', ()=>{
            if(addModalInput.value != ''){
                const noteBox = document.createElement('div');
                const delButton = document.createElement('div');
                const delImage = document.createElement('img');
                const noteName = document.createElement('h3');
                const noteCheckbox = document.createElement('input');
                const editButton = document.createElement('div');
                const editImage = document.createElement('img');

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
                editButton.id               = 'task-panel-edit-button';
                editButton.className        = 'invisible-button';
                editImage.id                = 'task-panel-edit-button-image';
                editImage.className         = 'default-button-image';
                editImage.src               = './resources/pencil.png';

                delButton.appendChild(delImage);
                editButton.appendChild(editImage);
                noteBox.appendChild(noteCheckbox);
                noteBox.appendChild(noteName);
                noteBox.appendChild(editButton);
                noteBox.appendChild(delButton);
                taskPanel.appendChild(noteBox);

                noteCheckbox.addEventListener('change', () => {

                });

                delButton.addEventListener('click', ()=>{
                    taskPanel.removeChild(noteBox);
                });

                editButton.addEventListener('click', ()=>{
                    createEditModal(noteName);
                });

                addModalOverlay.classList.remove('show');
                setTimeout(() => addModalOverlay.remove(), 100);
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

    
}
