function recomendar(genero){

    let edad = document.getElementById("textoEdad").value;
    let recomendacion = document.getElementById("recomendacion");

    switch (genero){
        case 'drama':
            if (edad < 13){
                recomendacion.textContent= "E.T., el extraterrestre.";
            } else{
                if (edad < 16){
                    recomendacion.textContent="Saga de Rapido y Furiosos.";
                } else{
                    if (edad>16){
                        recomendacion.textContent = "Taxi Driver.";
                    }
                }
            }
            break;
        case 'terror':
            if (edad<13){
                recomendacion.textContent="Monster House.";
            } else{
                if (edad<16){
                    recomendacion.textContent="LA LEYENDA DE SLEEPY HOLLOW.";
                } else{
                    if (edad>16){
                        recomendacion.textContent="El exorcismo de Emily Rose";
                    }
                }
            }
            break;
        case 'amor':
            if (edad<13){
                recomendacion.textContent="Matilda.";
            } else{
                if (edad<16){
                    recomendacion.textContent="3 metros sobre el cielo.";
                } else{
                    if (edad>16){
                        recomendacion.textContent="Diario de una pasion.";
                    }
                }
            }
            break;
        case 'comedia':
            if (edad<13){
                recomendacion.textContent="Dave el puerquito valiente.";
            } else{
                if (edad<16){
                    recomendacion.textContent="La mascara.";
                } else{
                    if (edad>16){
                        recomendacion.textContent="Son como niños.";
                    }
                }
            }
            break;
    }
}