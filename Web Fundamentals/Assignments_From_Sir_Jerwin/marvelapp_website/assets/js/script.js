function reset(e) {
    $(e).children().parent().siblings().children('div').css('color', 'black');
    $(e).children().parent().siblings().children('svg').css('fill', 'none');
}
function cssupdate(e) {
    $(e).children('div').css('color', '#1FB6FF');
    $(e).children('svg').css('fill', '#1FB6FF');
}


$(document).ready(function () {

    $(document).on("click", ".displaythis", function () {
        var idcode = $(this).attr('id');
        var currentsrc = '../assets/images/' + idcode + '.jpg';
        $('#displayhere').attr("src", currentsrc);
        console.log("clicked", + idcode)
        cssupdate(this);
        reset(this);
    });

    //COMMAN HOVER, COMMAN HOVER BABY
    $('#readbutton').hover(function () { $(this).toggleClass('.button_hover'); });

    $('.why_marvel').mouseover(function () {
        $('.dropdown-menu').show();
    });
    $('.dropdown-item').mouseover(function () {
        $('.dropdown-menu').show();
    });
    $('.dropdown-item').mouseout(function () {
        $('.dropdown-menu').hide();
    });

});
