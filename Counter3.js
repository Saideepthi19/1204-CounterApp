let updatevalue1=document.getElementById("updtval")
function oninc(){
    let a=updatevalue1.textContent;
    let countval=parseInt(a)+1;
    if(countval>0){
        updatevalue1.style.color="green";
    }
    else if(countval<0){
        updatevalue1.style.color="red";
    }
    else{
        updatevalue1.style.color="black";
    }
    updatevalue1.textContent=countval;
}
function onres(){
    let countcal=0;
    updatevalue1.textContent=countcal;
    updatevalue1.style.color="black";
}
function ondec(){
    let a=updatevalue1.textContent;
    let countval=parseInt(a)-1;
    if(countval>0){
        updatevalue1.style.color="green";
    }
    else if(countval<0){
        updatevalue1.style.color="red";
    }
    else{
        updatevalue1.style.color="black";
    }
    updatevalue1.textContent=countval;
}