$(document).ready(function() {

  var formSource   = $("#form-template").html();
  var formTemplate = Handlebars.compile(formSource);

  var farsiSource   = $("#farsi-template").html();
  var farsiTemplate = Handlebars.compile(farsiSource);

  function showForm() {
    $('.farsi-form').html(formTemplate());
  }

  function hideForm() {
    $('.farsi-form').empty();
  }

  function appendFarsi(farsi) {
    $('#farsi-list').append(farsiTemplate(farsi));
  }

  function removeFarsi(farsiId) {
    $('#farsi-'+farsiId).remove();
  }



  // List farsis
  $.ajax('/farsis')
    .done(function(response) {
      for (var i = 0; i < response.length; i++) {
        appendFarsi(response[i]);
      }
    })
    .fail(function(error) {
      alert('ERROR');
    })


  // Show form
  $('body').on('click', '.add', showForm);


  // Hide form
  $('body').on('click', '.cancel', hideForm);


  // Create farsi
  $('body').on('click', '.new-farsi', function() {
    var data = {
      word: $('input[name=word]').val(),
      author: $('input[name=author]').val(),
      phonetic: $('input[name=phonetic]').val(),
    };

    $.ajax('/farsis',{ method: 'POST', data: data })
      .done(function(response) {
        appendFarsi(response);
        hideForm();
      })
      .fail(function(error) {
        alert('ERROR');
      })
  });

// Delete farsi
  $('body').on('click', '.destroy', function() {
    var farsiId = $(this).data('id');

    $.ajax('/farsis/'+farsiId,{ method: 'DELETE'})
      .done(function() {
        removeFarsi(farsiId);
      })
      .fail(function(error) {
        alert('ERROR');
      })

  });

  // Edit farsi

});
