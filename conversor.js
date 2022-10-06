
let cambio= function(){
let euro=document.getElementById("euro").value;
let peseta=euro/166.386;
if(isNaN(euro)){
console.log("no es un numero")
}else{
    console.log(`tienes ${peseta} de pesatas por tu ${euro} euro`);
    document.getElementById("c_peseta").value = peseta;
}
}
vaciar= function(){
    peseta="";
    euro="";
    document.getElementById("c_peseta").value = "";
    document.getElementById("euro").value = "";

}
