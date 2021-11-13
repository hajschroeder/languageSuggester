$(document).ready(function(){
  console.log("Script executing!");
  $("form#basics").submit(function(event){
    event.preventDefault();
    console.log("Submit form reached");
    const nameInput= $("input#name").val();
    const ageInput= $("input#age").val();
    const genderSelect= $("select#gender").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".gender").text(genderSelect);


    $("#bio").show();
    $("#questions").show();

  });
    $("form#survey").submit(function(event){
      event.preventDefault();
      const interestSelect= $("select#interest").val();
      const expSelect= $("select#experience").val();
      const lotrSelect= $("select#lotr").val();
      const kevinSelect= $("select#kevin").val();
      const cookingSelect= $("select#cooking").val();

      $(".interest").text(interestSelect);
      $(".experience").text(expSelect);
      $(".lotr").text(lotrSelect);
      $(".kevin").text(kevinSelect);
      $(".cooking").text(cookingSelect);

      $("#result").show();
      
    }); 
  });




