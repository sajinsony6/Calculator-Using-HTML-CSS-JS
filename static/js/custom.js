$(document).ready(function() {
    $('.calc-button').on('click', function () {
        let displayValue = $('.calc-display').val();
        var selectedButton = $(this).val();
        $('.calc-display').val(displayValue + selectedButton);
    });

    $('.calc-equal-button').on('click', function () {
        let displayValue = $('.calc-display').val();
        $('.calc-display').val(eval(displayValue));
    });

    $('.del-button').on('click', function () {
        let displayValue = $('.calc-display').val().toString().slice(0, -1);
        $('.calc-display').val(displayValue);
    });

    $('.clear-button').on('click', function () {
        $('.calc-display').val('');
    });
});


