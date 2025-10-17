export function setupEvents(){
    const html = document.documentElement;
    const root = document.getElementsByClassName('root');
    const toolPanelAddButton = document.getElementById('tool-panel-add-button');
    const toolPanelThemeButton = document.getElementById('tool-panel-theme-button');
    const addModalOverlay = document.getElementById('add-modal-overlay');
    const addModalCancelButton = document.getElementById('add-modal-cancel-button');
    const addModalApplyButton  = document.getElementById('add-modal-apply-button');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    }
    
    toolPanelThemeButton.addEventListener('click', ()=>{
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
  
        // Сохраняем в localStorage
        localStorage.setItem('theme', newTheme);    
    });

    toolPanelAddButton.addEventListener('click', ()=>{
        setTimeout(() => addModalOverlay.classList.add('show'), 10);
    });

    addModalCancelButton.addEventListener('click', ()=>{
        setTimeout(() => addModalOverlay.classList.remove('show'), 300);
    });

}
