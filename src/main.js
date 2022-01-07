var cuDoMagico = document.querySelector('.cuDoMagico');
function Raidus(numero) {
    var radius = document.querySelector("#raidus".concat(numero));
    console.log(radius.value);
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
