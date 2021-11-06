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
    $("#info").show();
    $("#survey").show();
    
  });

  $("form#apps").submit(function(event){
    event.preventDefault();
    const appPref= $("input:radio[name='app']:checked").val();

    $(".apps").text(appPref);

    if (appPref === mobile){

      $("#mobile").show();
    }
    // $("#web").show();
    // $("#both").show();
    // $("#neither").show();


    });
  

});