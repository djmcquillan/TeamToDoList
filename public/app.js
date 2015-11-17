console.log(jQuery);

$('.glyphicon-star').click(function(){
    ($(this).toggleClass('starClick'))
    console.log(this);
});


$('input[type="checkbox"]').click(function(){
    ($(this).parent().toggleClass('strikethrough'));
    console.log('check');
});

$('.glyphicon-remove').click(function(){
    ($(this).parent().remove());
});

$('.btn').click(function(){
    console.log('btn click');
    console.log($('.form-input').val());
});

//var $newdiv1 = $("<p>"
$( "<p/ >" ).append( "<strong>Hello</strong>" );
