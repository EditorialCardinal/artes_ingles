import { PlayCircleOutlined, FileDoneOutlined, FieldTimeOutlined, 
        ExceptionOutlined, YoutubeOutlined, LinkOutlined, 
        FormOutlined, FileSyncOutlined   } 
from '@ant-design/icons';

export function ulrActual(urlPath){    
    let identificador;

    if (urlPath === '/panelEstudiante') {
        identificador = 0;
    } else if(urlPath === '/talleres'){
        identificador = 1;
    }else if(urlPath === '/interactivo'){
        identificador = 2;
    }else{
        identificador = 3;
    }

    return identificador;
}

export function colorNota(notaIden){
    let notacolor;

    if(notaIden < 60){
        notacolor = "#ff4d4f"
    }else if(notaIden >= 60 && notaIden <80){
        notacolor= "#1890ff";
    }else{
        notacolor= "#52c41a";
    }

    return notacolor;
}

export function colorBtn(textColor){
    let notacolor;

    if(textColor < 60){
        notacolor = "volcano"
    }else if(textColor >= 60 && textColor <80){
        notacolor= "geekblue";
    }else{
        notacolor= "green";
    }

    return notacolor;
}

export function cambioIcon(icono, clase){
    let iconoResibido;

    if (icono === '/panelEstudiante') {
        iconoResibido = < YoutubeOutlined  className={clase}/>;
    } else if(icono === '/enlaces'){
        iconoResibido = < LinkOutlined className={clase}/>;
    }else if(icono === '/interactivo'){
        iconoResibido = < PlayCircleOutlined className={clase}/>;
    }else if(icono === '/actividades'){
        iconoResibido = < FormOutlined className={clase}/>;
    }else if(icono === '/complementos'){
        iconoResibido = < FileSyncOutlined className={clase}/>;
    }else if(icono === '/evaluaciones'){
        iconoResibido = < FieldTimeOutlined className={clase}/>;
    }else{
        iconoResibido = <FileDoneOutlined  className={clase}/>;
    }

    return iconoResibido;
    
}

export function calculaRespuesta(items){
    let valor = 0;
    let suma = 0;

    for(valor in items){
        suma = suma + (Number(items[valor]));
    }
   
    return suma;
}

export function valorNivel(valorNota) {
    let notaLetras;

    if(valorNota <= 50){
        notaLetras = 'Insuficiente'
    }else if(valorNota > 50 && valorNota <=70){
        notaLetras = 'Minimo'
    }else if(valorNota >70 && valorNota <= 85){
        notaLetras = 'Satisfactorio'
    }else{
        notaLetras = 'Avanzado'
    }
    return notaLetras;
}

export function colorProgress(tag){
    let color;
    if(tag === 'Avanzado'){
        color = '#52c41a';
    }else if(tag === 'Satisfactorio'){
        color = '#1890ff';
    }else if (tag === 'Minimo') {
        color = 'orange';
    }else if(tag ==='Insuficiente'){
        color = '#ff4d4f'
    }

    return color;
}

export function claseCalificacion(tag){
    let color;
    if(tag === 'Avanzado'){
        color = ' colorSatisfactorio';
    }else if(tag === 'Satisfactorio'){
        color = 'colorAvanzado';
    }else if (tag === 'Minimo') {
        color = 'colorMinimo';
    }else if(tag ==='Insuficiente'){
        color = 'colorInsuficiente'
    }
    return color;
}