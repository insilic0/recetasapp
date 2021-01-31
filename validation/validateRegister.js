export default function validateRegister(values){
    let errores = {};

    if(!values.username){
        errores.username = "El Nombre es obligatorio"
    }

    if(!values.email){
        errores.email = "El Email es obligatorio"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errores.email = "Email no válido"
    }

    //Validar el pass
    if(!values.password){
        errores.password = "La contraseña es obligatoria";

    }else if(values.password.length < 6){
        errores.password = "La contraseña debe ser de al menos 6 caracteres";
    }

    if(values.password != values.repeatPass){
        errores.repeatPass = "Las contraseñas no coinciden ):"
    }

    return errores;
}