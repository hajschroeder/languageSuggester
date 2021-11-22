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
      //the variables above have been changed to integers. The total value of the users' inputs will determine what their suggested language should be. 
      
      $(".interest").text(interestSelect);
      $(".experience").text(expSelect);
      $(".lotr").text(lotrSelect);
      $(".kevin").text(kevinSelect);
      $(".cooking").text(cookingSelect);
      $("#result").show();

      const java = "JavaScript";
      const cSharp = "C#";
      const python = "Python";
      const cooking = "It doesn't seem like you're particulary interested in coding. Maybe look into a culinary school?";

      

      
      let mostChosen = interestSelect + expSelect + lotrSelect + kevinSelect + cookingSelect;
     
      if (mostChosen === 5 {
        return java;
      }




      
    });   
  });  
  
