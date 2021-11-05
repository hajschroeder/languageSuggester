function gender(option){
  return option;
}

$(document).ready(function(){
  console.log("Script executing!");
  $("#basics").submit(function(event){
    console.log("Submit form reached");
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