$('#question').on('click', function() {
  $('.modalBackground').show();
  $('.tools:first').addClass('activeTool');

  if ($('.tools').hasClass('activeTool')) {
    console.log('this is active')
    $('.activeTool').addClass('animated fadeIn').show();

  }

})

var $class = $('.tools');
$('.nextTab').click(function () {
  var index = $class.index($('.activeTool'));
  var $next = $class.slice(index + 1).first();
  var $prev = $class.slice(index + 0).first();

  $next.addClass('activeTool');
  $next.addClass('BLAH');
  $prev.removeClass('activeTool');

  $prev.removeClass('animated fadeIn').hide();

  if ($('.tools').hasClass('activeTool')) {
    console.log('this is active')
    $('.activeTool').addClass('animated fadeIn').show();

    $('.activeTool').closest('.parentDiv').addClass("makeVisible");

    $('.relativeDiv:first').parent().removeClass("makeVisible");

  }

});


$('.prevTab').click(function () {
  var index = $class.index($('.activeTool'));

  var $next = $class.slice(index).first();
  var $prev = $class.slice(index - 1).first();
  $prev.addClass('activeTool');
  $prev.addClass('BLAH');
  $next.removeClass('activeTool');
  $next.removeClass('animated fadeIn').hide();
  $('.relativeDiv').parent().removeClass("makeVisible");

  if ($('.tools').hasClass('activeTool')) {
    console.log('this is active')
    $('.activeTool').addClass('animated fadeIn').show();

  }

});
