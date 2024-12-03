document.getElementById("button").addEventListener("click",fuggveny)

function fuggveny(){
    const karakterek=["Zuko","Aang","Katara","Toph","Iroh","Sokka","Bolin","Korra","Mako","Tenzin"]

    const szamolo=[0,0,0,0,0,0,0,0,0,0]

    const szleves= [4, 3, 10, 1, 7, 9, 5, 8, 6, 2]
    const jazmin=  [7, 5, 3, 2, 10, 1, 6, 4, 9, 8]
    const pehely=  [4, 3, 10, 1, 7, 9, 5, 8, 6, 2]
    const tej=     [3, 10, 6, 1, 4, 7, 5, 2, 8, 9]
    const pogi=    [5, 9, 7, 2, 6, 1, 4, 10, 3, 8]
    const mango=   [4, 10, 8, 6, 7, 5, 2, 9, 3, 1]
    const gumo=    [5, 9, 6, 2, 8, 10, 4, 7, 3, 1]
    const dumpling=[6, 4, 5, 3, 7, 1, 10, 9, 8, 2]
    const teszta=  [2, 6, 4, 3, 5, 1, 10, 9, 8, 7]
    const tleves=  [10, 2, 6, 8, 9, 1, 4, 7, 5, 3]
    const lotusz=  [8, 6, 7, 2, 10, 1, 3, 5, 4, 9]
    const huspogi= [5, 3, 4, 8, 7, 10, 9, 6, 2, 1]


    const a = document.getElementById("szleves").value 
    for(let i = 0; i < szleves.length; i++) {
        if(szleves[i] == a) {
            szamolo[i]++
        }
    }

    const b = document.getElementById("jazmin").value;
    for (let i = 0; i < jazmin.length; i++) {
        if (jazmin[i] == b) {
            szamolo[i]++;
        }
    }

    const c = document.getElementById("pehely").value;
    for (let i = 0; i < pehely.length; i++) {
        if (pehely[i] == c) {
            szamolo[i]++;
        }
    }

    const d = document.getElementById("tej").value;
    for (let i = 0; i < tej.length; i++) {
        if (tej[i] == d) {
            szamolo[i]++;
        }
    }

    const e = document.getElementById("pogi").value;
    for (let i = 0; i < pogi.length; i++) {
        if (pogi[i] == e) {
            szamolo[i]++;
        }
    }

    const f = document.getElementById("mango").value;
    for (let i = 0; i < mango.length; i++) {
        if (mango[i] == f) {
            szamolo[i]++;
        }
    }

    const g = document.getElementById("gumo").value;
    for (let i = 0; i < gumo.length; i++) {
        if (gumo[i] == g) {
            szamolo[i]++;
        }
    }

    const h = document.getElementById("dumpling").value;
    for (let i = 0; i < dumpling.length; i++) {
        if (dumpling[i] == h) {
            szamolo[i]++;
        }
    }

    const m = document.getElementById("teszta").value;
    for (let i = 0; i < teszta.length; i++) {
        if (teszta[i] == m) {
            szamolo[i]++;
        }
    }

    const j = document.getElementById("tleves").value;
    for (let i = 0; i < tleves.length; i++) {
        if (tleves[i] == j) {
            szamolo[i]++;
        }
    }

    const k = document.getElementById("lotusz").value;
    for (let i = 0; i < lotusz.length; i++) {
        if (lotusz[i] == k) {
            szamolo[i]++;
        }
    }

    const l = document.getElementById("huspogi").value;
    for (let i = 0; i < huspogi.length; i++) {
        if (huspogi[i] == l) {
            szamolo[i]++;
        }
    }

    let legnagyobb=Math.max(...szamolo)
    let eredmeny=""

    for(let i=0; i<szamolo.length; i++){
        if(szamolo[i]===legnagyobb){
            eredmeny=karakterek[i];
            break
        }
    }
    if(eredmeny=="Katara"){
        document.getElementById("quiz").innerHTML=`<img src="kepek/quiz_eredmeny/${eredmeny}.png" alt="${eredmeny}"><p class=quiz_a>A legjobban ${eredmeny}é-ra/re hasonlít az ízlésed</p>`
    }
    else{
    document.getElementById("quiz").innerHTML=`<img src="kepek/quiz_eredmeny/${eredmeny}.jpg" alt="${eredmeny}"><p class=quiz_a>A legjobban ${eredmeny}é-ra/re hasonlít az ízlésed</p>`
}
}