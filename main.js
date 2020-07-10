let degrees=0;
let spinDegrees=0;
let wynik= new Array(3);
wynik[0]= 0;
wynik[1]= 0;
wynik[2]= 0;
let plus=0;
let gracz = new Array(3);
gracz[0]= "Gracz 1";
gracz[1]= "Gracz 2";
gracz[2]= "Gracz 3";
let grNr = 0;
let nrHasla = new Array(10);
nrHasla[0]= "ADAM MAŁYSZ";
nrHasla[1]= "DONALD TUSK";
nrHasla[2]= "ROZMARYN";
nrHasla[3]= "I TO SIĘ CENI";
nrHasla[4]= "SHREK I OSIOŁ";
nrHasla[5]= "KAJKO I KOKOS";
nrHasla[6]= "FRYTKI Z KFC";
nrHasla[7]= "BALKON";
nrHasla[8]= "SKARPETKI";
nrHasla[9]= "NOWY PARADYŻ";

let nrKategprii = new Array(10);
nrKategprii [0]= "Wielcy Polacy";
nrKategprii [1]= "Ludzie z Niemiec";
nrKategprii [2]= "Zioła";
nrKategprii [3]= "Powiedzenia";
nrKategprii [4]= "Bajki";
nrKategprii [5]= "Gry";
nrKategprii [6]= "Nie dobre";
nrKategprii [7]= "Domy na dworze";
nrKategprii [8]= "Skóra stopy";
nrKategprii [9]= "Miejsca w Europie";

let haslo="";
let kategoria = ""

function userSpin(){
spinDegrees = Math.floor(Math.random()*180)+61;

document.getElementById("gracz").innerHTML=gracz[grNr];
document.getElementById("wynik").innerHTML=wynik[grNr];
spin();
}

function spin(){
    
    document.getElementById("kolorys").style.transform='rotate('+degrees+'deg)';
    spinDegrees--;
    if(spinDegrees>0){
        if(degrees>360){
            degrees=degrees-360;
        }
        degrees++;
    }
    if(spinDegrees===0){
        document.getElementById("panel").style.pointerEvents="auto";
        document.getElementById("spin").style.pointerEvents="none";
        lost();
    }
    setTimeout("spin()",10);
}

function lost(){
    plus=0;
    if(degrees>=0 && degrees<22.5) plus=200;
    if(degrees>=22.5 && degrees<45) plus=500;
    if(degrees>=45 && degrees<66.5) plus=400;
    if(degrees>=66.5 && degrees<90) plus=1000;

    if(degrees>=90 && degrees<112.5) plus=-2;
    if(degrees>=112.5 && degrees<135) plus=5000;
    if(degrees>=135 && degrees<155.5) plus=-1;
    if(degrees>=155.5 && degrees<180) plus=100;

    if(degrees>=180 && degrees<202.5) plus=500;
    if(degrees>=202.5 && degrees<225) plus=100;
    if(degrees>=225 && degrees<247.5) plus=400;
    if(degrees>=247.5 && degrees<275) plus=2000;

    if(degrees>=275 && degrees<292.5) plus=-1;
    if(degrees>=292.5 && degrees<315) plus=200;
    if(degrees>=315 && degrees<337.5) plus=300;
    if(degrees>=337.5 && degrees<360) plus=100;


    if(plus !==-2){
        document.getElementById("terminal").innerHTML="Wykręciłes kwote:"+plus+"zł. Wybierz literę.";
        }
        if(plus===-1) {
            document.getElementById("terminal").innerHTML="Bankrut! Straciłeś wszystko";
        }
        if(plus===-2) {
            document.getElementById("terminal").innerHTML="Stop! Zmiana kolejki";  
        }
}

function wygrana(ile){

    if(plus !==-2){
    wynik[grNr]=wynik[grNr]+(ile*plus);
    document.getElementById("terminal").innerHTML="Trafiłeś "+ile+" litery. Na twoje konto trafia: "+ile*plus+"zł";
    }
    if(plus===-1) {
        wynik[grNr]=0;
        document.getElementById("terminal").innerHTML="Bankrut! Straciłeś wszystko";
    }
    if(plus===-2) {
        document.getElementById("terminal").innerHTML="Stop! Zmiana kolejki";  
    }
   
    document.getElementById("wynik").innerHTML=wynik[grNr];
}



function start(){
    nr = Math.floor(Math.random()*10);
        haslo = nrHasla[nr];
        kategoria=nrKategprii[nr];
    document.getElementById("panel").style.pointerEvents="none";
    showAlfabet();

    document.getElementById("gracz").innerHTML=gracz[grNr];
    document.getElementById("wynik").innerHTML=wynik[grNr];
    let ukryte = "";
    for(i=0;i<haslo.length;i++){
        if(haslo.charAt(i)!==" "){
        ukryte=ukryte+'<div class="kratka" id="litera'+i+'">_</div>';
        }
        else{
        ukryte=ukryte+'<div class="przerwa">""</div>';
        }
    }
    document.getElementById("haslo").innerHTML=ukryte;
    document.getElementById("kategoria").innerHTML="Kategoria: "+kategoria;
}

let tab = new Array(35);

function showAlfabet(){
    let alfabet = "";

    for(i=0; i<26;i++){
        let indeks = 65+i;
        tab[i]=String.fromCharCode(indeks);
    }
    tab[26]="Ą";
    tab[27]="Ć";
    tab[28]="Ę";
    tab[29]="Ł";
    tab[30]="Ń";
    tab[31]="Ó";
    tab[32]="Ś";
    tab[33]="Ż";
    tab[34]="Ź";


    for(i=0;i<35;i++){
    alfabet=alfabet+'<div class="znak" id="alfabet'+i+'" onclick="check('+i+')">'+tab[i]+'</div>';
    }
    document.getElementById("litery").innerHTML=alfabet;
}
let odkryte=0;

function check(nr){
let ile=0;
let puste=0;
if(plus==-1 || plus==-2){
    if(plus==-1) {
    wynik[grNr]=0;
    document.getElementById("terminal").innerHTML="Bankrut! Straciłeś wszystko";
    } else{
    document.getElementById("terminal").innerHTML="Stop! Zmiana kolejki";  
    }
    document.getElementById("wynik").innerHTML=wynik[grNr];

     block();
}else{
    let znalezione = false;
    for(i=0;i<haslo.length;i++){
        if(haslo.charAt(i)===tab[nr]){
            znalezione = true;
            ile++;
            document.getElementById('litera'+i+'').innerHTML=tab[nr];
            document.getElementById('alfabet'+nr+'').style.cursor="default";
            document.getElementById('alfabet'+nr+'').setAttribute("onClick",";");
    }
            if(haslo.charAt(i)===" "){
                puste++;
            }
 

}


 if(znalezione===true){
    document.getElementById('alfabet'+nr+'').style.background="green";
}else {
    document.getElementById('alfabet'+nr+'').style.background="red";
}

wygrana(ile);
block();


}
odkryte= odkryte+ile;
if(odkryte===haslo.length-puste){
    document.getElementById("terminal").innerHTML="Koniec gry! Kliknij reset aby wylosować nowe hasło";
    document.getElementById("spin").style.pointerEvents="none";
    document.getElementById("panel").style.pointerEvents="none";
}

}
function block(){
    document.getElementById("panel").style.pointerEvents="none";
    if(grNr===0) grNr=1;
    else grNr=0;
    document.getElementById("spin").style.pointerEvents="auto";
}


 
window.onload=start;
