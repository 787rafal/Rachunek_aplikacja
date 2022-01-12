function slowa(x)
{

   var string = x.toString();
   var liczby = string.split(".");
   //console.log(liczby[1]);
   reszta = liczby[1];
   x = Number(liczby[0]);
   var liczba = parseInt(x);



   var jednosci = ["", " jeden", " dwa", " trzy", " cztery", " pięć", " sześć", " siedem", " osiem", " dziewięć"];
   var nascie = ["", " jedenaście", " dwanaście", " trzynaście", " czternaście", " piętnaście", " szesnaście", " siedemnaście", " osiemnaście", " dziewietnaście"];
   var dziesiatki = ["", " dziesięć", " dwadzieścia", " trzydzieści", " czterdzieści", " pięćdziesiąt", " sześćdziesiąt", " siedemdziesiąt", " osiemdziesiąt", " dziewięćdziesiąt"];
   var setki = ["", " sto", " dwieście", " trzysta", " czterysta", " pięćset", " sześćset", " siedemset", " osiemset", " dziewięćset"];
   var grupy = [
      ["" ,"" ,""],
      [" tysiąc" ," tysiące" ," tysięcy"],
      [" milion" ," miliony" ," milionów"],
      [" miliard"," miliardy"," miliardów"],
      [" bilion" ," biliony" ," bilionów"],
      [" biliard"," biliardy"," biliardów"],
      [" trylion"," tryliony"," trylionów"]];
             
   // jezeli pole zawiera poprawna wartosc calkowita
   if (x == liczba.toString()){
   	
      var wynik = '';
      var znak = '';
      if (liczba == 0)
         wynik = "zero";
           
      var g = 0;
      while (liczba > 0) {
         var s = Math.floor((liczba % 1000)/100);
         var n = 0;
         var d = Math.floor((liczba % 100)/10);
         var j = Math.floor(liczba % 10);
              
         if (d == 1 && j>0) {
            n = j;
            d = 0;
            j = 0;
         }

         var k = 2;
         if (j == 1 && s+d+n == 0)
            k = 0;
         if (j == 2 || j == 3 || j == 4)
            k = 1;
         if (s+d+n+j > 0)
            wynik = setki[s]+dziesiatki[d]+nascie[n]+jednosci[j]+grupy[g][k]+wynik;

         g++;
         liczba = Math.floor(liczba/1000);
      }
      //console.log(znak + wynik);
      wynik = znak + wynik ;
      if(!(reszta == false)){
            if( reszta == "1")
                reszta = " dziesięć";
            else if(reszta == "2")
                reszta = " dwadzieścia";
            else if(reszta == "3")
                reszta =  " trzydzieści";
            else if(reszta == "4")
                reszta = " czterdzieści";
            else if(reszta == "5")
                reszta = " pięćdziesiąt";
            else if(reszta == "6")
                reszta = " sześćdziesiąt";
            else if(reszta == "7")
                reszta = " siedemdziesiąt";
            else if(reszta == "8")
                reszta = " osiemdziesiąt";
            else if(reszta == "9")
                reszta = " dziewięćdziesiąt";
            else if(reszta == "01")
                reszta = " jeden";
            else if(reszta == "02")
                reszta = " dwa";
            else if(reszta == "03")
                reszta = " trzy";
            else if(reszta == "04")
                reszta = " cztery";
            else if(reszta == "05")
                reszta = " pięć";
            else if(reszta == "06")
                reszta = " sześć";
            else if(reszta == "07")
                reszta = " siedem";
            else if(reszta == "08")
                reszta = " osiem";
            else if(reszta == "09")
                reszta = " dziewięć";
            else
                reszta = resztaabc(reszta);
            wynik = wynik+" złoty i"+reszta+" groszy";
      }else{
        wynik = wynik+" złoty";
      }
   }
   return wynik;
}

function resztaabc(x)
{
   x = Number(x);
   var liczba = parseInt(x);
   var jednosci = ["", " jeden", " dwa", " trzy", " cztery", " pięć", " sześć", " siedem", " osiem", " dziewięć"];
   var nascie = ["", " jedenaście", " dwanaście", " trzynaście", " czternaście", " piętnaście", " szesnaście", " siedemnaście", " osiemnaście", " dziewietnaście"];
   var dziesiatki = ["", " dziesięć", " dwadzieścia", " trzydzieści", " czterdzieści", " pięćdziesiąt", " sześćdziesiąt", " siedemdziesiąt", " osiemdziesiąt", " dziewięćdziesiąt"];
   var setki = ["", " sto", " dwieście", " trzysta", " czterysta", " pięćset", " sześćset", " siedemset", " osiemset", " dziewięćset"];
   var grupy = [
      ["" ,"" ,""],
      [" tysiąc" ," tysiące" ," tysięcy"],
      [" milion" ," miliony" ," milionów"],
      [" miliard"," miliardy"," miliardów"],
      [" bilion" ," biliony" ," bilionów"],
      [" biliard"," biliardy"," biliardów"],
      [" trylion"," tryliony"," trylionów"]];
             
   // jezeli pole zawiera poprawna wartosc calkowita
   if (x == liczba.toString()){
   	
      var wynik = '';
      var znak = '';
      if (liczba == 0)
         wynik = "zero";
           
      var g = 0;
      while (liczba > 0) {
         var s = Math.floor((liczba % 1000)/100);
         var n = 0;
         var d = Math.floor((liczba % 100)/10);
         var j = Math.floor(liczba % 10);
              
         if (d == 1 && j>0) {
            n = j;
            d = 0;
            j = 0;
         }

         var k = 2;
         if (j == 1 && s+d+n == 0)
            k = 0;
         if (j == 2 || j == 3 || j == 4)
            k = 1;
         if (s+d+n+j > 0)
            wynik = setki[s]+dziesiatki[d]+nascie[n]+jednosci[j]+grupy[g][k]+wynik;

         g++;
         liczba = Math.floor(liczba/1000);
      }
      //console.log(znak + wynik);
      wynik = znak + wynik ;
   }
   return wynik;
}
function wynik_slowa(x){
    if(!(x == false)){
        x = slowa(x);
        document.querySelector('div[name=slownie_wynik]').innerHTML = x;
    }
    
}
