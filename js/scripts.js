$(document).ready(function(){
  $("#basics").submit(function(event){
    event.preventDefault();
    const nameInput= $("input#name").val();
    const ageInput= $("input#age").val();
    const genderInput= $("input#gender").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".gender").text(genderInput);


    $("#bio").show();
    
  });
  
});