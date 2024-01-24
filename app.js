//Variables
let numeroMaximoPosible =100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maximosIntentos = 33;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible}, por favor: `));

    console.log(typeof(numeroUsuario));
    /*
    Este codigo 
    realiza la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        // Acertamos,fue verdadera la condicion 
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor')
        } else {
            alert('El numero secreto es mayor')
        }
        //Incrementamos el contador cuando no acierte
        intentos = intentos + 1;
        palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condicion no se cumplio
        //alert('lo siento, no acertaste el numero');

    }
}