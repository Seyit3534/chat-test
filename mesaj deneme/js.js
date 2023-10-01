function myFunction(){
    var x = document.getElementById("asd1").value;
    var d=new Date();
    var saat=d.getHours();
    var dk=d.getMinutes();

document.getElementById("myP").innerHTML+="<div class='gidenMesaj'><img src='a1.jpg'>"+x+"<span id='tarih'>"+saat+":"+dk+"</span><div>";
document.getElementById("asd1").value="";
  }