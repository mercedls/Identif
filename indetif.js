let user = "admi"
let password = 1234 

function identificacion (user, password) {
 
    switch  (true){
   
    case user === "admi" && password === 1234: 
    return "¡Bienvenido a nuestro sitio!";
    break;

    case user === "admi" && password !== 1234 :
    return ("Contraseña incorrecta");
    break; 

    case user !== "admi" && password === 1234 : 
    return ("Usurario incorrecto");
    break; 

    case user !== "admi" && password !== 1234 : 
    return ("Usuario y Contraseña incorrectos");
    break; 

    default: 
    return ("Debe ingresar los datos requeridos");
} 
}

console.log (identificacion ("admi", 12345))