$(document).ready(function() {
    $('img').hover(function() {
        var hoverOn = $(this).attr('data-alt-src');
        let hoverOut = $(this).attr('data-alt-src1');
        if (($(this).attr('src')) != hoverOn) {
            $(this).attr('src', hoverOn);
        } else {
            $(this).attr('src', hoverOut);
        }
    });
});