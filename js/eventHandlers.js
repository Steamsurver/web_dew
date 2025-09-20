export function setupEvents(){
    let gallery = [];
    let currentIndex = 0;

    //плавный переход между изображениями
    function changeImage(index) {
        // 1. Плавно скрываем текущее изображение
        // 2. Когда скрытие закончилось — меняем src и показываем
        $('#carouselImage').css('opacity', 0);
        setTimeout(() => {
            $('#carouselImage').attr('src', gallery[index]);
            $('#carouselImage').css('opacity', 1);
        }, 500); // время совпадает с transition (0.5s)
    }   

        // Автоматическое переключение
    let autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % gallery.length;
        changeImage(currentIndex);
    }, 4000); // 

    // Функция сброса таймера автопереключения при ручном переключении, чтобы не было конфликтов
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % gallery.length;
            changeImage(currentIndex);
        }, 4000);
    }



    $(document).ready(function() {
        $.getJSON('resources/imgSources.json', function(data) {
            data.forEach(item => {
                gallery.push(item.src);
            });
            changeImage(0);

        }).fail(function() {
            console.log('Ошибка загрузки галереи.');
        });

        //ивенты на карусель изображений
        
        $('.carousel-button-prev').on('click', (function(event) {
            currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
            changeImage(currentIndex);
            resetAutoSlide();
        }));

        $('.carousel-button-next').on('click', (function(event) {
            currentIndex = (currentIndex + 1) % gallery.length;
            changeImage(currentIndex);
            resetAutoSlide();
        }));

        $('.dropdown-line').click(function(event) {
            event.stopPropagation();
            $('.dropdown-menu').slideToggle(200);
        });

        $('.dropdown-menu').mouseleave(function() {
            $('.dropdown-menu').slideUp(200);
        });
    
        $('#aboutTitle').on('click', (function(event) {
            $('#aboutWindow').slideToggle(200);
            event.stopPropagation();
        }));
        $('#skillsTitle').on('click', (function(event) {
            $('#skillsWindow').slideToggle(200);
            event.stopPropagation();
        }));
        $('#portfolioTitle').on('click', (function(event) {
            $('#portfolioWindow').slideToggle(200);
            event.stopPropagation();
        }));
        $('#contactsTitle').on('click', (function(event) {
            $('#contactsWindow').slideToggle(200);
            event.stopPropagation();
        }));


        $('.message-button').click(function(event) {
            $('.feedback-window').css('display', 'block');
            event.stopPropagation();
        });

        $('.feedback-close-button').click(function(event) {
            $('.feedback-window').css('display', 'none');
            event.stopPropagation();
        });

        $('.feedback-form').on('submit', function(event){
            event.preventDefault();
            // Получаем данные
            console.log('Обработка отправки сообщения');
            const $status = $('#statusMessage');
            $status.text('').removeClass('status-error status-success');
            
            if (!this.checkValidity()) {
                $status.text('Пожалуйста, корректно заполните все поля.').addClass('status-error');
                this.reportValidity();
                return;
            }
            
            let formData = {
                name: $('.feedback-input-name').val().trim(),
                email: $('.feedback-input-emale').val().trim(),
                message: $('.feedback-textarea-message').val().trim()
            };
            
            $.ajax({
                url: '/send-message', //адрес сервера
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(formData),
                dataType: 'json',

                success: function(response) {
                    if (response.success) {
                    $status.text('Спасибо! Ваше сообщение отправлено.').removeClass('status-error').addClass('status-success');
                    //$('.feedback-form').reset();
                    setTimeout(function() {
                        $status.text('');
                    }, 2000);
                } else {
                    $status.text(response.error || 'Ошибка при отправке сообщения.').addClass('status-error');
                }
            },
                error: function(xhr, status, error) {
                    $status.text('Сервер пока не доступен: ' + error).addClass('status-error');
                    console.log(formData);
                }
            });
        });


        $('#aboutLink').on('click', function(event){
            $('#aboutWindow').slideToggle(200);
            event.stopPropagation();
        });

        $('#skillsLink').on('click', function(event){
            $('#skillsWindow').slideToggle(200);
            event.stopPropagation();
        });

        $('#portfolioLink').on('click', function(event){
            $('#portfolioWindow').slideToggle(200);
            event.stopPropagation();
        });

        $('#contactsLink').on('click', function(event){
            $('#contactsWindow').slideToggle(200);
            event.stopPropagation();
        });
    });
}