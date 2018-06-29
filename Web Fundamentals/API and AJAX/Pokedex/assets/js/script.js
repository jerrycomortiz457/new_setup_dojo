$(document).ready(function() {
    var count = _.range(1, 152);
    $(count).each(function(idx) {
        $('#pokedisplay').append('<div class="pokethisdiv"><img class="pokethis" id="' + count[idx] + '"src="http://pokeapi.co/media/img/' + count[idx] + '.png"></div>')
            // $('.poke_display').append('<img class="pokethis" id="' + count[idx] + '"src="https://cdn.onlinewebfonts.com/svg/img_518074.png">');
    })

    $(document).on("click", ".pokethis", function() {
        var idcode = $(this).attr('id');
        var currentsrc = 'http://pokeapi.co/media/img/' + idcode + '.png';
        var currentsrcname = 'https://pokeapi.co/api/v2/pokemon/' + idcode + '/';
        $("#poketype").children().remove();
        $('#pokemon').attr("src", currentsrc);
        $.get(currentsrcname, function(res) {
            $('#name').text((res.name).toUpperCase());

            var poketypes = res.types;
            $(poketypes).each(function(idx) {
                var appendsrc = '<p>•' + res.types[idx].type.name + '</p>';                
                // var appendsrc = '<p> HELLO </p>';                
                // $('#poketype').html(appendsrc);
                // for(var i = 0; i < 2;i++){
                    console.log(res.types[idx].type.name)
                    $('#poketype').append(appendsrc);
                // }
            })
            $('#height').text((res.height) / 10 + ' m');
            $('#weight').text((res.weight) / 10 + ' kg');
            console.log(res)

        }, "json");
    });
});