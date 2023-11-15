$(function () {
    $('#change-color').on('click', function(){
        // 文字色変化
        $('#target').css('color', 'red');
    });

    $('#change-text').on('click', function(){
        // 文字内容変化
        $('#target').text('Hello!')
    });

    $('#fade-out').on('click', function(){
        // フェードアウト
        $('#target').fadeOut();
    });

    $('#fade-in').on('click', function(){
        // フェードイン
        $('#target').fadeIn();
    });
});