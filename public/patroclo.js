//clase de prueba que pide datos y envia datos a un servidos



class Patroclo{

    constructor(){
        this.response = {
            status : null,
            message : null
        }
    }

    sendData( datos = null , type = null , action = null ){
        if( datos == null || type == null || action == null ){
            this.response.status = "Error";
            this.response.message = "Error getting data";
        }else{
            let xhr = new XMLHttpRequest();
            xhr.open( type , action , true );
            //xhr.setRequestHeader('Content-Type',
            //    'application/x-www-form-urlencoded');
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => {
                let res = JSON.parse( xhr.responseText );
                if( res.status == "Success" ){
                    this.response.status = "Success";
                    this.response.message= "Datos enviados corractamente";
                }else{
                    this.response.status = "Error";
                    this.response.message= res.message;
                }
            };
            xhr.send(JSON.stringify(datos));
        }

        return this.response;

    }

    getData( datos = null , type = null , action = null ){
        if( datos == null || type == null || action == null ){
            this.response.status = "Error";
            this.response.message = "Error getting data";
        }else{
            let xhr = new XMLHttpRequest();
            xhr.open( type , action , true );
            //xhr.setRequestHeader('Content-Type',
                //'application/x-www-form-urlencoded');
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => {
                console.log( 'on load' );
                console.log( xhr.responseText );
                /*let res = JSON.parse( xhr.responseText );
                console.log( res );
                if( res.status == "Success" ){
                    this.response.status = "Success";
                    this.response.message = "Datos enviados corractamente";
                    this.response.data = res.data;
                }else{
                    this.response.status = "Error";
                    this.response.message= res.message;
                }*/

            };
            xhr.send(JSON.stringify(datos));
        }

        return this.response;

    }


    getData2( datos = null, type = null,  action = null ){
        if( datos == null || type == null || action == null ){
            this.response.status = "Error";
            this.response.message = "Error getting data";
        }else{
            let xhr = new XMLHttpRequest();
            datos = JSON.stringify( datos );
            let url = action + "?data=" + encodeURIComponent( datos );
            xhr.open( type , url , true );
            //xhr.setRequestHeader('Content-Type',
                //'application/x-www-form-urlencoded');
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => {
                console.log( xhr.responseText );
                let res = JSON.parse( xhr.responseText );
                console.log( res );
                /*if( res.status == "Success" ){
                    this.response.status = "Success";
                    this.response.message = "Datos enviados corractamente";
                    this.response.data = res.data;
                }else{
                    this.response.status = "Error";
                    this.response.message= res.message;
                }*/

            };
            xhr.send();
        }

        return this.response;

    }
}//class
