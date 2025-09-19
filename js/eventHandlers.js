export function setupEvents(){
    $(document).ready(function() {

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
    });
}