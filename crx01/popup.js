$(function(){
  $("#name").on('keyup', function(){
    $('#greet').text('Hello ' + $('#name').val())
  })
})