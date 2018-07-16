$(document).ready(function () {
  console.log("Documet Ready!")


  $('#add_class').click(function () {
    $('#addClassEffect').addClass("classAdded");
  });

  $('#slideToggle').click(function () {
    $('#slideToggleEffect').slideToggle();
  });

  $('#append').click(function () {
    $('.appendcontent').append('<p>The quick brown fox jumps over the lazy dog.</p>')
  });

  $('#click').click(function () {
    alert('This is the jquery function, .click()');
  });

  $('#hide').click(function () {
    $('#hideEffect').hide();
  });

  $('#show').click(function () {
    $('#hideEffect').show();
  });

  $('#toggle').click(function () {
    $('#toggleEffect').toggle("slow");
  });

  $('#slideDown').click(function () {
    $('.slideDownHidden').slideDown('slow');
  });

  $('#slideUp').click(function () {
    $('.slideDownHidden').slideUp("slow");
  });

  $('#fadeIn').click(function () {
    $('.fadeInBox').fadeIn("slow");
  });

  $('#fadeOut').click(function () {
    $('.fadeInBox').fadeOut("slow");
  });

  $('#before').click(function () {
    $('#after').before("<p>The quick brown fox jumps over the lazy dog.</p>");
  });

  $('#insertAfter').click(function () {
    $('#afterthis').after("<p>The quick brown fox jumps over the lazy dog.</p>");
  });

  $('#htmlButton').click(function () {
    var htmlString = $('title').html();
    $('#htmlEffects').text(function () {
      alert(htmlString);
    });
  });

  $("input").change(function () {
    var $input = $(this);
    $("#displayHere").html(".attr( 'checked' ): <b>" + $input.attr("checked") + "</b><br>" +
      ".prop( 'checked' ): <b>" + $input.prop("checked") + "</b><br>" +
      ".is( ':checked' ): <b>" + $input.is(":checked") + "</b>");
  })
    .change();

  function displayVals() {
    var singleValues = $('#single').val();
    var multipleValues = $('#multiple').val() || [];
    $('#displayVal').html("<b> Single: </b>" + singleValues + " <b> Multiple: </b>" + multipleValues.join(", "));
  }
  $("select").change(displayVals);
  displayVals();

  $('#text').click(function () {
    $('#textDisplay').text("Clicking changed the current paragraph!");
  })


});