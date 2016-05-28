(function(app){
  app.randomImage = function(){
    for (var i = 1; i <= 6; i++) {
      var rnd_numb = Math.floor((Math.random()*1084)+1);
      var imgUrl = "https://unsplash.it/360?image=";
      var randImg = imgUrl.concat(rnd_numb);
      document.getElementById("randomImg" + i).setAttribute("src", randImg);
      document.getElementById("randomImg" + i).setAttribute("alt", randImg);
    }
  };
  app.validateContactData = function(){
    var validForm = 0;

    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var message = document.getElementById("field5");

    var emailvalue = email.value;
    var atpos = emailvalue.indexOf("@");
    var dotpos = emailvalue.lastIndexOf(".");
    var disabledButton = document.getElementById("submitBtn");
    disabledButton.disabled = true;

    if (firstname.value.length <= 3 || firstname.value.length > 15) {
      firstname.style.border = "2px solid #ff0000";
    }else {
      firstname.style.border = "1px solid #b3b3b3";
      validForm += 1;
    }

    if (lastname.value.length <= 3 || lastname.value.length > 15) {
      lastname.style.border = "2px solid #ff0000";
    }else {
      lastname.style.border = "1px solid #b3b3b3";
      validForm += 1;
    }

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailvalue.length) {
      email.style.border = "2px solid #ff0000";
    }else {
      email.style.border = "1px solid #b3b3b3";
      validForm += 1;
    }

    if (message.value.length < 20 || message.value.length > 500) {
      message.style.border = "2px solid #ff0000";
    }else {
      message.style.border = "1px solid #b3b3b3";
      validForm += 1;
    }

    if (validForm == 4) {
      disabledButton.disabled = false;
    }

  };
})(window.myApp = window.myApp || {});
