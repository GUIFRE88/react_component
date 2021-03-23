function validarCPF(cpf){
    if(cpf.length !== 11){
      return {erro:false, texto:"CPF deve ter 11 digitos!"}
    }else{
      return {erro:true, texto:""}
    }
}

function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72){
      return {erro:false, texto:"Senha deve ter 4 a 72 digitos!"}
    }else{
      return {erro:true, texto:""}
    }
}

export {validarCPF, validarSenha};