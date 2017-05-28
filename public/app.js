

let myApp = new Patroclo();

let datos = {
    name : "Juan"
}

let datos2 = {
    id : 4,
    ciudad : "guadalajara"
}

//console.log( myApp.sendData( datos, "POST", "./ajax.php") );


console.log( myApp.getData2( datos2, "GET", "./ajax.php" ) );
