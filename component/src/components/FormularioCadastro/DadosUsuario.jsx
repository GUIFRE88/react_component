import { TextField, Button } from '@material-ui/core';
import React, {useState} from 'react';

function DadosUsuario({aoEnviar, validacoes}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({senha:{erro:true, texto:""}}); // Cria estado para erros do form
    
    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar(){
        let possoEnviar = true;
        for(let campo in erros){
            if(!erros[campo].valido){
                return false
            }
        }
        return true;
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField 
                value={email}
                onChange={(event)=>{
                    setEmail(event.target.value)
                }}
                id="email" 
                label="E-mail" 
                type="email"
                variant="outlined" 
                fullWidth 
                margin="normal"
                name="email"
                required
            />
            <TextField 
                value={senha}
                onChange={(event)=>{
                    setSenha(event.target.value)
                }}
                id="senha" 
                label="Senha" 
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                type="password"
                variant="outlined" 
                fullWidth 
                margin="normal"
                name="senha"
                required
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;