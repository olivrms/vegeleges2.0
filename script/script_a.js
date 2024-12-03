let a=0
let c=0
let b=0  

document.getElementById("gomb1").addEventListener("click", csere1);
document.getElementById("gomb2").addEventListener("click", csere2);
document.getElementById("gomb3").addEventListener("click", csere3);



function csere1(){
    if(a%2==0){
        document.getElementById("tenzin").innerText="Ő az új Légidomító Rend vezetője, és tanításai révén igyekszik megőrizni a Levegő Nomádok filozófiáját és életmódját. Tenzin türelmes és bölcs mentor, aki segíti Korrát a spirituális egyensúly megtalálásában és az Avatar Állapot jobb megértésében. Bár néha szigorú és komoly, mélyen törődik családjával és tanítványaival, valamint eltökélten dolgozik a világ egyensúlyának helyreállításán. Tenzin mindig példát mutat önzetlenségével és elkötelezettségével, miközben igyekszik összeegyeztetni a hagyományokat a modern világ kihívásaival.";a++ }
    else{
        document.getElementById("tenzin").innerHTML=`<img src="kepek/aang/tenzin.jpg" alt="Tenzin">`;a--
    }
}

function csere2(){
    if(b%2==0){
        document.getElementById("yang").innerText="az egyik legnagyobb tiszteletnek örvendő Avatar, aki a Levegő Nomádok közösségéből származik. Az Avatárok között különösen bölcsnek és hatékonynak tartják, mivel uralma alatt sikeresen fenntartotta a világ békéjét és egyensúlyát. Yangchen mélyen hitt abban, hogy az Avatar feladata nem csupán a spirituális világ védelme, hanem az emberek fizikai szükségleteinek kielégítése és jólétének biztosítása is. Az emberek iránti empátiája miatt gyakran közvetlenül avatkozott be a világ problémáiba, szembemenve a Levegő Nomádok hagyományos távolságtartó szemléletével.";b++ }
    else{
        document.getElementById("yang").innerHTML=`<img src="kepek/aang/yang.jpg" alt="Yangchen">`;b--
    }
}

function csere3(){
    if(c%2==0){
        document.getElementById("gya").innerText="Aang mentora és a Déli Levegő Templom bölcs szerzetese. Vidám és gondoskodó természetével nemcsak Aang idomítási képességeit fejlesztette, hanem emberként is támogatta őt, hogy könnyebben viselje az Avatar felelősségét. Gyatso híres volt pacifista filozófiájáról és arról, hogy mindig az együttérzést helyezte előtérbe, akár a konfliktusok megoldásáról, akár Aang neveléséről volt szó. Bár bölcsességével és tapasztalatával kitűnt társai közül, vidámságával és játékosságával gyakran közelítette meg a dolgokat, hogy Aang érezze, nincs egyedül a világ terhével.";c++ }
    else{
        document.getElementById("gya").innerHTML=`<img src="kepek/aang/gyatso.jpg" alt="Gyatso">`;c--
    }
}