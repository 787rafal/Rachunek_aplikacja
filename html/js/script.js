function day(){
    var today = new Date();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    var input = document.querySelector("input[name=data]");
    input.value = date;
}

function policz(x){
    var nazwa = "input[id=wynik"+x+"]";
    var a = document.querySelector("input[name=a"+x+"]").value;
    var b = document.querySelector("input[name=b"+x+"]").value;
    var c = a*b;
    document.querySelector(nazwa).value=c.toFixed(2);
    wynik();
}

var licznik=2;
function dodaj(){ 
    var table = document.querySelector('table');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = '<div class="expandable-input inp" role="textbox" contenteditable></div>';
    cell2.innerHTML = '<div class="expandable-input inp" role="textbox" contenteditable></div>';
    cell3.innerHTML = '<input type="text" class="inp" style="width:100%;" onkeyup="policz('+licznik+')" name="a'+licznik+'">';
    cell4.innerHTML = '<input type="text" class="inp" style="width:99px; text-align: right;" onkeyup="policz('+licznik+')" name="b'+licznik+'"> zł';
    cell5.innerHTML = '<input type="text" name="wynik" onkeyup="wynik()" class="inp" style="width:160px;text-align: right;" id="wynik'+licznik+'"> zł';
    cell1.style = "flex:4.5";
    cell2.style = "flex:1.5";
    cell3.style.flex = 1.5;
    cell4.style.flex = 2;
    cell5.style.flex = 3;
    licznik = licznik+1;
    document.querySelector('button[name=usun]').style.display = "";
}
function usun(){
    licznik = licznik-1;
    var table = document.querySelector('table');
    table.deleteRow(-1);
    if(licznik < 3){
        document.querySelector('button[name=usun]').style.display = "none";
    }
    wynik();
}
function wynik(){
    var wynik = document.querySelectorAll('input[name=wynik]');
    var suma = 0;
    for (let i = 0; i< wynik.length; i++) {
        const zmienna = Number(wynik[i].value);
        if(!isNaN(zmienna)){
            suma += zmienna;
        }
    }
    document.querySelector('input[name=wynik_koncowy]').value = suma.toFixed(2);
}
function off(){
    var button = document.querySelectorAll('button');
    for (let i = 0; i< button.length; i++) {
        button[i].style.display = "none";
    }
    var inp = document.querySelectorAll('[class=inp]');
    for (let i = 0; i< inp.length; i++) {
        inp[i].style.border = "0";
    }
    var div = document.querySelectorAll('[role=textbox]');
    for (let i = 0; i< div.length; i++) {
        div[i].style.border = "0";
    }
}
function on(){
    var button = document.querySelectorAll('button');
    for (let i = 0; i< button.length; i++) {
        button[i].style.display = "";
    }
    if(licznik < 3){
        document.querySelector('button[name=usun]').style.display = "none";
    }
    var inp = document.querySelectorAll('[class=inp]');
    for (let i = 0; i< inp.length; i++) {
        inp[i].style.border = "";
    }
    var div = document.querySelectorAll('[role=textbox]');
    for (let i = 0; i< div.length; i++) {
        div[i].style.border = "";
    }
}
function drukuj(){
    off();
    window.print();
    on();
}
function kasuj(){
    window.location.reload(true);
}
function zapisz(){
    alert("Funkcja dostepna wkrótce!");
}
function pdf_down(nazwa){
    const element = document.querySelector('body');
    var h = document.querySelector('div[id=wrapper]').clientHeight;
    h=Number(h)+20;
    window.scrollTo(0,0);
    //console.log(h);
    console.log(nazwa);
    var opt = {
        margin:       6,
        filename:     nazwa+'.pdf',
        image:        { type: 'jpeg', quality: 0.99 },
        html2canvas:  { scale: 2,letterRendering: true , allowTaint: true, useCORS: true, width: '810', height: h ,},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

    html2pdf().set(opt).from(element).save();
}
function pdf_2(nazwa){
    off();
    //console.log(nazwa);
    pdf_down(nazwa);
    const myTimeout = setTimeout(on, 100);
}


function test(){
    modernAlert({
        backgroundColor: '#fff',
        color: '#555',
        borderColor: '#ccc',
        titleBackgroundColor: '#c4c4c4',
        titleColor: '#fff',
        defaultButtonsText: {ok : 'Zapisz', cancel : 'Anuluj'},
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        overlayBlur: 2, //Set false to disable it or interger for pixle
        overrideNative: true
    });
    prompt('Nazwa pliku :','Zapisz do PDF', callback_function);
    function callback_function(valueFromPrompt) { 
        if(!(valueFromPrompt == false)){
            //console.log(valueFromPrompt);
            pdf_2(valueFromPrompt);
        }
    }
}