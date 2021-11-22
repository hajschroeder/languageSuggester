$(document).ready(function(){
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
      let interestSelect= parseInt($("select#interest").val());
      let expSelect= parseInt($("select#experience").val());
      let lotrSelect= parseInt($("select#lotr").val());
      let kevinSelect= parseInt($("select#kevin").val());
      let cookingSelect= parseInt($("select#cooking").val());
      let mostChosen = interestSelect + expSelect + lotrSelect + kevinSelect + cookingSelect
      

      $(".interest").text(interestSelect);
      $(".experience").text(expSelect);
      $(".lotr").text(lotrSelect);
      $(".kevin").text(kevinSelect);
      $(".cooking").text(cookingSelect);
      const languages = {
        "1": "JavaScript",
        "2": "C#",
        "3": "Python",
        "4": "It doesn't sound like you're interested in coding. Maybe try a culinary school?",
      };



      $("#result").show();
      
    });   
  });  
  
