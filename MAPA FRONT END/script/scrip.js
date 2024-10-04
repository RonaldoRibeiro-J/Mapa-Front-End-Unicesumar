document.getElementById('calcular').addEventListener('click', function () {
    var homens = parseInt(document.getElementById('homens').value);
    var mulheres = parseInt(document.getElementById('mulheres').value);
    var criancas = parseInt(document.getElementById('criancas').value);

    var consumo = {
        carneBovina: {
            homens: 500,
            mulheres: 300,
            criancas: 200
        },

        frango: {
            homens: 200,
            mulheres: 200,
            criancas: 100
        },
        linguica: {
            homens: 200,
            mulheres: 200,
            criancas: 200
        },
        refrigerante: {
            homens: 300,
            mulheres: 400,
            criancas: 200
        },
        cerveja: {
            homens: 800,
            mulheres: 500,
            criancas: 0
        },
    };

    var totalCarneBovina = homens * consumo.carneBovina.homens + mulheres * consumo.carneBovina.mulheres + criancas * consumo.carneBovina.criancas;
    var totalFrango = homens * consumo.frango.homens + mulheres * consumo.frango.mulheres + criancas * consumo.frango.criancas;
    var totalLinguica = homens * consumo.linguica.homens + mulheres * consumo.linguica.mulheres + criancas * consumo.linguica.criancas;
    var totalRefrigerante = homens * consumo.refrigerante.homens + mulheres * consumo.refrigerante.mulheres + criancas * consumo.refrigerante.criancas;
    var totalCerveja = homens * consumo.cerveja.homens + mulheres * consumo.cerveja.mulheres + criancas * consumo.cerveja.criancas;
    
    var totalCarneBovinaKg = (totalCarneBovina / 1000).toFixed(1);
    var totalFrangoKg = (totalFrango / 1000).toFixed(1);
    var totalLinguicaKg = (totalLinguica / 1000).toFixed(1);
    var totalRefrigeranteL = (totalRefrigerante / 1000).toFixed(1);
    var totalCervejaL = (totalCerveja / 1000).toFixed(1);

    document.getElementById('resultado').innerHTML = `
        <p>Total necessário para o churrasco:</p>
        <ul>
            <li>${totalCarneBovinaKg}Kg de carne bovina</li>
            <li>${totalFrangoKg}Kg de frango</li>
            <li>${totalLinguicaKg}Kg de linguiça</li>
            <li>${totalRefrigeranteL}L de refrigerante</li>
            <li>${totalCervejaL}L de cerveja</li>
        </ul>
    `
});
