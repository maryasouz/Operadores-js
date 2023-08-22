function somar() {
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var result = parseInt(val1) + parseInt(val2);

    alert(result);
}

function sub() {
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var result = parseInt(val1) - parseInt(val2);

    alert(result);
}

function div() {
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var result = parseInt(val1) / parseInt(val2);

    alert(result);
}

function multi() {
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var result = parseInt(val1) * parseInt(val2);

    alert(result);
}