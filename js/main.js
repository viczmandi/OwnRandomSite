function randomImage(){
  for (var i = 1; i <= 6; i++) {
    var rnd_numb = Math.floor((Math.random()*1084)+1);
    var imgUrl = "https://unsplash.it/360?image=";
    var randImg = imgUrl.concat(rnd_numb);
    document.getElementById("randomImg" + i).setAttribute("src", randImg);
    document.getElementById("randomImg" + i).setAttribute("alt", randImg);
  }
}
