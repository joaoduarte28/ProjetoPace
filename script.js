const calcular = document.getElementById('calcular');


function pace () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const distancia = document.getElementById('distancia').value;
    const tempo = document.getElementById('tempo');
    const resultado = document.getElementById('resultado').value;

    if (nome !== '' && peso !== '' && distancia !== '' && tempo !== '') {

        const tempo_corte = tempo.split(';')

        const horas = parseInt(tempo_corte[0]);

        const minutos = parseInt(tempo_corte[1]);

        const minutos = parseInt(tempo_corte[2]);

        const tempo_horas = horas + minutos / 60 + segundos / 3600;

        const tempo_minutos = horas * 60 + minutos + segundos / 60;

        const velocidade = (distancia / (tempo_horas)).toFixed(2);

        const pace = ((60 / velocidade)).toFixed(2);

        const calorias = (velocidade * peso * 0.0175 * (tempo_minutos)).toFixed(2);

        resultado.textContent = 'Olá ${nome}! Vcoê percorreu ${distancia}km em ${horas}h${minutos}min${segundos}s, o que implica em uma velocidade média de ${velocidade}km/h ou pace de ${pace}km/min. Estima-se que você tenha consumido ${calorias} calorias.';


    } else {
        resultado.textContent = 'Para calcular os indicadores de desempenho do seu treino'
    }
}
calcular.addEventListener('click',pace);