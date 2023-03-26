const validacion = (userData) =>{
    
    const regexName= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
    const regexImage = /(http(s?):)([/\w|\s|\-/.?%&=]*)?\.(?:jpg|png|jpeg)/g;
    const regexHp = /^([1-9]|[1-9][0-9]|[12][0-9]{2}|300)$/;
    const regexAttack = /^(?:[1-9][0-9]?|1[0-9]{1,2}|200)$/; 
    const regexDefense = /^(1?\d{1,2}|2[0-4]\d|250)$/;
    const regexSpeed = /^(?:[1-9][0-9]?|1[0-9]{1,2}|200)$/;
    const regexHeight = /^[0-9]*[1-9][0-9]*$/;
    const regexWeight = /^[0-9]*[1-9][0-9]*$/;
    
    let errors = {};

    if(!Array.isArray(userData.types) || userData.types.length == 0) errors.types = "Debe elegir al menos un tipo";
    console.log(errors.types);
    if(!regexName.test(userData.name)) errors.name = "El nombre de tu pokémon debe incluir solo letras";
    if(!regexImage.test(userData.image)) errors.image = "Debes colocar el link de un archivo tipo jpg o png";
    if(!regexHp.test(userData.hp)) errors.hp = "Debes colocar un número entre 1 y 300";
    if(!regexAttack.test(userData.attack)) errors.attack = "Debes colocar un número entre 1 y 200";
    if(!regexDefense.test(userData.defense)) errors.defense = "Debes colocar un número entre 1 y 250";
    if(userData.speed && !regexSpeed.test(userData.speed)) errors.speed = "Debes colocar un número entre 1 y 200";
    if(userData.height && !regexHeight.test(userData.height)) errors.height = "Debes colocar un número";
    if(userData.weight && !regexWeight.test(userData.weight)) errors.weight = "Debes colocar un número";
    

    return errors;
    };

export default validacion;