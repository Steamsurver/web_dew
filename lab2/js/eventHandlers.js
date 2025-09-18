export function setupEvents(){
    $(document).ready(function() {
        $('.dropdown-line').click(function(event) {
            event.stopPropagation(); 
            $('.dropdown-menu').slideToggle(200);
    });

    $('.dropdown-menu').mouseleave(function() {
      $('.dropdown-menu').slideUp(200);
    });
    
    $('.message-button').click(function(event) {
        $('.feedback-window').css('display', 'block');
    });

    $('.feedback-close-button').click(function(event) {
        $('.feedback-window').css('display', 'none');
        event.stopPropagation();
    });

    $('.feedback-content').on('submit', function(event){
        event.stopPropagation();
        // Получаем данные
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
            url: '/send-message', // Замените на адрес вашего сервера
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            dataType: 'json',

            success: function(response) {
                if (response.success) {
                $status.text('Спасибо! Ваше сообщение отправлено.').removeClass('status-error').addClass('status-success');
                $form[0].reset();
                setTimeout(function() {
                    $modal.hide().attr('aria-hidden', 'true');
                    $status.text('');
                }, 2000);
            } else {
                $status.text(response.error || 'Ошибка при отправке сообщения.').addClass('status-error');
            }
        },
            error: function(xhr, status, error) {
            $status.text('Ошибка отправки: ' + error).addClass('status-error');
      }
    });
    });
  });
}