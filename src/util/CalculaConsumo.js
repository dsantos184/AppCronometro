const CalculaConsumo = objDados =>{
   
    objDados.consumido += 200;
    objDados.percent = (objDados.consumido * 100) / 2000;

    if( objDados.consumido >= 2000 )
    {
        objDados.status = "Muito Bom";
    }
    else
    {
        objDados.status = "Ruim";
    }
    
    return objDados;
}

export default CalculaConsumo;