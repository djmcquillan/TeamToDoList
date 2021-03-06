var xBox = $('.glyphicon-remove')
var star = $('.glyphicon-star')
var checkboxes = $('.checkboxes')

xBox.each(function(){
  var xBox = $('.glyphicon-remove')
  xBox.click(function(){
    $(this).parent().remove();
  });
})

star.click(function(){
    $(this).toggleClass('active');
});

checkboxes.click(function(){
    $(this).next().next().toggleClass('strikethrough');
});

$(document).ready(function(evt){
  $.ajax({
    url:'/api/todos',
    method: 'GET',
    success: function(data){
      data.forEach(function(todo){
        var li = '<p><input type="checkbox" class="checkboxes"><i class="glyphicon glyphicon-star"></i><span>' + todo.list_item + '</span><i class="glyphicon glyphicon-remove" id="x1"></i></p>'
        $('.list').last().append(li);
        $('#todo').val('');

        var newxBox = $('.glyphicon-remove').last()
        var newstar = $('.glyphicon-star').last()
        var newcheckboxes = $('.checkboxes').last()

        newxBox.each(function(){
          newxBox = $('.glyphicon-remove')
          newxBox.click(function(){
            $(this).parent().remove();
          });
        });

        newstar.click(function(){
            $(this).toggleClass('active');
        });

        newcheckboxes.click(function(){
            $(this).next().next().toggleClass('strikethrough');
        });
        event.preventDefault();
      });
    }
  });
});

$('.btn').on('click', function(evt){
    var list_item = $('#todo').val()
    $.ajax({
      url: '/api/todos',
      method: 'POST',
      data: {list_item: list_item},
      dataType: 'application/json',
      success: function(data){
        console.log(data)
      }
    })
})
