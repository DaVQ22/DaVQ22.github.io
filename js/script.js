var vidaEnemigo = 100;
var danoCritico = 20;
var danoNormal = 10;
var vidaPersonaje = 100;

setInterval(function(){
var eVida = document.getElementById("enemigoVida");
eVida.value = vidaEnemigo

if (eVida.value <= 0) {
    alert('¡Ganaste!');
    window.location.href = 'index.html';
  }

}, 1);

setInterval(function(){
    var pVida = document.getElementById("personajeVida");
    pVida.value = vidaPersonaje

    if (pVida.value <= 0) {
        alert('¡Perdiste!');
        window.location.href = 'index.html';
      }

    }, 1);

document.getElementById("dimagenes").style.display = 'none';

//document.getElementById("enemigoVida").style.display = 'none';


//funcion de atacar al enemigo

function aSeleccion(jugadorAtaques){
   // var aOpciones = ['afuego', 'aAgua', 'aHielo'];
   // var aEnemigo = aOpciones[Math.floor(Math.random() * 3)];

    var dOpciones = ['dFuego', 'dAgua', 'dHielo'];
    var dEnemigo = dOpciones[Math.floor(Math.random() * 3)];
    console.log(dEnemigo);
   

    if (
        (jugadorAtaques === 'aFuego' && dEnemigo === 'dAgua' ) ||
        (jugadorAtaques === 'aHielo' && dEnemigo === 'dFuego' ) ||
        (jugadorAtaques === 'aAgua' && dEnemigo === 'dHielo' )
        )
       {
        document.getElementById("mensajes").innerHTML = "Haz hecho 0 de daño al enemigo"
        document.getElementById("imagenes").style.display = 'none';
        document.getElementById("dimagenes").style.display = 'block';
    //    document.getElementById("enemigoVida").style.display = 'block';
    //    document.getElementById("personajeVida").style.display = 'none';
       }
    else if (
                (jugadorAtaques === 'aFuego' && dEnemigo === 'dFuego' ) ||
                (jugadorAtaques === 'aAgua' && dEnemigo === 'dAgua' ) ||
                (jugadorAtaques === 'aHielo' && dEnemigo === 'dHielo' ) 
            )
            {
                document.getElementById("mensajes").innerHTML = "Haz hecho 10 de daño"
                vidaEnemigo -= danoNormal; 
                document.getElementById("imagenes").style.display = 'none';
                document.getElementById("dimagenes").style.display = 'block';
              //  document.getElementById("enemigoVida").style.display = 'block';
              //  document.getElementById("personajeVida").style.display = 'none';
            }
    else
    {
        document.getElementById("mensajes").innerHTML = "Haz hecho 20 de daño"
        vidaEnemigo -= danoCritico;
        document.getElementById("imagenes").style.display = 'none';
        document.getElementById("dimagenes").style.display = 'block';
       // document.getElementById("enemigoVida").style.display = 'block';
       // document.getElementById("personajeVida").style.display = 'none';
    }
    console.log(vidaEnemigo);
}


//funcion de defenderse

function dSeleccion(jugadorDefensas){
var aOpciones = ['aaFuego', 'aaAgua', 'aaHielo'];
    var aEnemigo = aOpciones[Math.floor(Math.random() * 3)];
    console.log(aEnemigo);

if (
    (jugadorDefensas === 'deFuego' && aEnemigo === 'aaAgua' ) ||
    (jugadorDefensas === 'deHielo' && aEnemigo === 'aaFuego' ) ||
    (jugadorDefensas === 'deAgua' && aEnemigo === 'aaHielode' )
    )
   {
    document.getElementById("mensajes").innerHTML = "Te han hecho 20 de daño"
    vidaPersonaje -= danoCritico;
    document.getElementById("imagenes").style.display = 'block';
    document.getElementById("dimagenes").style.display = 'none';
  //  document.getElementById("enemigoVida").style.display = 'none';
  //  document.getElementById("personajeVida").style.display = 'block';
   }
else if (
            (jugadorDefensas === 'deFuego' && aEnemigo === 'aaFuego' ) ||
            (jugadorDefensas === 'deAgua' && aEnemigo === 'aaAgua' ) ||
            (jugadorDefensas === 'deHielo' && aEnemigo === 'aaHielo' ) 
        )
        {
            document.getElementById("mensajes").innerHTML = "Te han hecho 10 de daño"
            vidaPersonaje -= danoNormal; 
            document.getElementById("imagenes").style.display = 'block';
            document.getElementById("dimagenes").style.display = 'none';
        //    document.getElementById("enemigoVida").style.display = 'none';
        //    document.getElementById("personajeVida").style.display = 'block';
        }
else
{
    document.getElementById("mensajes").innerHTML = "Te han hecho 0 de daño"
    
    document.getElementById("imagenes").style.display = 'block';
    document.getElementById("dimagenes").style.display = 'none';
 //   document.getElementById("enemigoVida").style.display = 'none';
 //   document.getElementById("personajeVida").style.display = 'block';
}
console.log(vidaPersonaje);
}

