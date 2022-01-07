const cuDoMagico: HTMLDivElement = (<HTMLDivElement>document.querySelector('.cuDoMagico'));

function Raidus(numero: number): void
{
    const radius: HTMLInputElement = (<HTMLInputElement>document.querySelector(`#raidus${numero}`))
    console.log(radius.value);
    switch (numero)
    {
        case 1:
            cuDoMagico.style.borderTopLeftRadius = `${radius.value}px`;
        break;
    
        case 2:
            cuDoMagico.style.borderTopRightRadius = `${radius.value}px`;
        break;

        case 3: 
            cuDoMagico.style.borderBottomLeftRadius = `${radius.value}px`;
        break;

        case 4: 
            cuDoMagico.style.borderBottomRightRadius = `${radius.value}px`;
        break;
    }
}
