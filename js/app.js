function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseFloat(operandoA.value) + parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseFloat(operandoA.value) - parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function multiplicar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseFloat(operandoA.value) * parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function dividir(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseFloat(operandoA.value) / parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    } else if (!isFinite(resultado)){
        resultado = 'División por cero no permitida';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}