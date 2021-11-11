$(document).ready(function(){
  console.log("Script executing!");
  $("form#basics").submit(function(event){
    console.log("Submit form reached");
    event.preventDefault();
    const nameInput= $("input#name").val();
    const ageInput= $("input#age").val();
    const genderSelect= $("select#gender").val();



    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".gender").text(genderSelect);


    $("#bio").show();
    $("#questions").show(); 
    console.log("succesfully filled out first form, reached second");
  });
    $("form#survey").submit(function(event){
      let interestSelect= $("select#interest").val();
      let expSelect= $("select#experience").val();
      let lotrSelect= $("select#lotr").val();
      let kevinSelect= $("select#kevin").val();
      let cookingSelect= $("select#cooking").val();
      event.preventDefault();

      $("#interest").val();
      command.log(interestSelect);
  });

});

function 