const cuDoMagico: HTMLDivElement = (<HTMLDivElement>document.querySelector('.cuDoMagico'));

Raidus();

function Raidus(numero?: number ): void
{
    const radius: HTMLInputElement = (<HTMLInputElement>document.querySelector(`#raidus${numero}`));

    if(numero == undefined || ''){
        cuDoMagico.style.borderTopLeftRadius = `20px`;
        cuDoMagico.style.borderTopRightRadius = `20px`;
        cuDoMagico.style.borderBottomLeftRadius = `20px`;
        cuDoMagico.style.borderBottomRightRadius = `20px`;
    }
    
    if(numero != undefined || ''){
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
}

function copiar():void{
    const indentado: string = `border-radius: ${cuDoMagico.style.borderTopLeftRadius} ${cuDoMagico.style.borderTopRightRadius} ${cuDoMagico.style.borderBottomLeftRadius} ${cuDoMagico.style.borderBottomRightRadius};`;
    navigator.clipboard.writeText(indentado);
}