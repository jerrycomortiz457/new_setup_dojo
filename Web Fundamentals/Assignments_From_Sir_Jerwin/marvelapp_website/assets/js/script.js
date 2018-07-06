function reset(e) {
    $(e).children().parent().siblings().children('div').css('color', 'black');
    $(e).children().parent().siblings().children('svg').css('fill', 'none');
}
function cssupdate(e) {
    $(e).children('div').css('color', '#1FB6FF');
    $(e).children('svg').css('fill', '1FB6FF');
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
});
