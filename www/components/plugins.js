// This is a JavaScript file
$(document).on("click","#alerta",function(){
    function retorno(){
    }
    navigator.notification.alert("minha menssagem", retorno, "Aviso!", "Aceito");
});

$(document).on("click","#confirm",function(){
    function confirma(buttonIndex){
        if(buttonIndex =="1"){
          navigator.notification.alert("escolheu a opção A");  
        }else{
          navigator.notification.alert("escolheu a opção B");
        }
    }
    navigator.notification.alert("Escolha A ou B", confirma, "Escolha", ['A','B'])
});
$(document).on("click","#beep",function()
{
     navigator.notification.beep(4);
}
);
$(document).on("click","#vibracao",function()
{
    document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady()
 {
    console.log(navigator.vibrate([3000]));
 }
});