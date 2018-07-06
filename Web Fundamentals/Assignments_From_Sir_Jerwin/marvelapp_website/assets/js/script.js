$(document).ready(function () {
    $('.display').click(function () {
        var design = ($('#target_image').attr('data-alt-src'));
        var prototype = ($('#target_image').attr('data-alt-src1'));
        var handoff = ($('#target_image').attr('data-alt-src2'));
        var collaboration = ($('#target_image').attr('data-alt-src3'));

        if ($(this).attr('class', dp1)) {
            $('#target_image').attr('src', design);
        }
        if ($(this).attr('class', dp2)) {
            $('#target_image').attr('src', prototype);
        }
        if ($(this).attr('class', dp3)) {
            $('#target_image').attr('src', handoff);
        }
        if ($(this).attr('class', dp4)) {
            $('#target_image').attr('src', collaboration);
        }
        // if ($(this).attr('class') != $('.displayd').attr('data-alt-src')) {
        //     
        // }
        // if ($(this).attr('src') != $('#target_image').attr('data-alt-src')) {
        //     $('#target_image').attr('src', ninja);
        // }

    });
});