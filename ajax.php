<?php

    function func1($data = null){
        if( !is_null( $data ) ){
            $ret = [
            	"status" => 'Success',
                "message" => 'Datos recibidos',
            	"data" => $data
        	];
        }else{
            $ret = [
            	"status" => 'Error',
            	"message" => "Error del sistema"
        	];
        }
        return $ret;
    }

    function func2($id = null){
        /*if( !is_null( $id ) ){

            if( $id == 1 ){
                datos = [
                    id => 5,
                    nombre => "Juan Perez",
                    ciudad => "Guadalajara",
                    genero => "M",
                    ventas => "25000"
                ];

                $ret = [
                	"status" => 'Success',
                    "message" => 'Datos recibidos',
                	"data" => $datos
            	];
            }else{
                $ret = [
                	"status" => 'Success',
                    "message" => 'No se encontraron registros',
                	"data" => null
            	];
            }
        }else{
            $ret = [
            	"status" => 'Error',
            	"message" => "Error del sistema"
        	];
        }*/
        $ret = [
            "status" => 'Error',
            "message" => 'Error del sistema'
        ];
        return $ret;
    }


    header('Content-Type: application/json');
    $_POST = json_decode(file_get_contents('php://input'), true);
    /*if (isset($_POST['name'])) {
        echo json_encode(func1($_POST['name']));
    }*/
    $v = json_decode(stripslashes($_GET["data"]));;
    //print_r( $v );

    if(  !is_null($v->id) ){
        echo json_encode( func2( $v->id ) );
    }

 ?>
