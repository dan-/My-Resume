$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
});

var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        //begin edit------------------------------|
        if (message[index] == '\n') {
            $(target).append("<br />");
        }
        //end edit--------------------------------|      
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    }
}

$(function () {
    showText("#msg", "IS ANYONE THERE?\n>                 OH -\n>                 HI!", 0, 50);
});

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}