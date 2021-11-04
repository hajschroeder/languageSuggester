$(document).ready(function(){
  $(form#basics).submit(function(event){
    const name = $("input#name").val();
    const age = $parseInt("input#age").val();
    const gender = $("select#gender").val();
    
    $("bio").show();

    event.preventDefault();
  });
});