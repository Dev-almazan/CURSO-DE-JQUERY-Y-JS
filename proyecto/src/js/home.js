
// crear una promesa y guardarla en una variable constante  es como una funcion recibe una fuincion

// SIRVE PARA EJECUTAR UNA FUNCION CADA CIERTO TIEMPO  POR UNA UNICA VEZ CON SET INTERVAL LA EJECUTAS PERIODICAMENTE

setTimeout(saludar, 6000);

function saludar(){

  alert("hola mundo");

}


setTimeout(saludardos, 12000);

function saludardos(){

  alert("esto es una prueba");

}

           // CONSUMIR UNA API POR MEDIO DE JAVA SCRIPT Y PROMESA 

            fetch( "https://randomuser.me/api/" )
            
        
            // si es correcto entonces PROMESA THEN SI DA COMO RESULTADO TRUE ESTADO 200 YA SE CONECTO 
            .then(function(response) {
               //console.log(response)
                
                // retornar la info en formato json 
                
               return response.json()

            })
        
            .then(function (ejemplo)             
                   {
                
             let correo =  console.log('ejemplo',ejemplo.results[0].email)
             let tel =  console.log('ejemplo',ejemplo.results[0].phone)
             
             
    
                    })
        
        
             // si hay un error    PROMESA CATCH  SI DA COMO RESULTADO 404 FALSE HUBO UN ERROR 
            .catch(function(response) {
                console.log(response)
            })
        
             


