// This is a JavaScript file
$(document).on("click","#alerta", function(){
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
     navigator.notification.beep(1);
}
);
$(document).on("click","#vibracao",function()
{
    document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady()
 {
    console.log(navigator.vibrate([8000]));
 }
});

$(document).on("click", "#camera",function(){

navigator.camera.getPicture(onSuccess, onFail, {quality:50, 
destinationType: Camera.DestinationType.FILE_URI,
correctOrientation: true,
saveToPhotoAlbum: true

 });

function onSuccess(imagemURI) {
    var image = document.getElementById('myimage');
    image.src = imagemURI;
}

function onFail(message) {

    alert('Failed because: ' + message);
}
});