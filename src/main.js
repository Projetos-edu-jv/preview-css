var cuDoMagico = document.querySelector('.cuDoMagico');
Raidus();
function Raidus(numero) {
    var radius = document.querySelector("#raidus".concat(numero));
    if (numero == undefined || '') {
        cuDoMagico.style.borderTopLeftRadius = "20px";
        cuDoMagico.style.borderTopRightRadius = "20px";
        cuDoMagico.style.borderBottomLeftRadius = "20px";
        cuDoMagico.style.borderBottomRightRadius = "20px";
    }
    if (numero != undefined || '') {
        switch (numero) {
            case 1:
                cuDoMagico.style.borderTopLeftRadius = "".concat(radius.value, "px");
                break;
            case 2:
                cuDoMagico.style.borderTopRightRadius = "".concat(radius.value, "px");
                break;
            case 3:
                cuDoMagico.style.borderBottomLeftRadius = "".concat(radius.value, "px");
                break;
            case 4:
                cuDoMagico.style.borderBottomRightRadius = "".concat(radius.value, "px");
                break;
        }
    }
}
function copiar() {
    var indentado = "border-radius: ".concat(cuDoMagico.style.borderTopLeftRadius, " ").concat(cuDoMagico.style.borderTopRightRadius, " ").concat(cuDoMagico.style.borderBottomLeftRadius, " ").concat(cuDoMagico.style.borderBottomRightRadius, ";");
    navigator.clipboard.writeText(indentado);
}
