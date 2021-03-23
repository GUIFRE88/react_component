import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel, TextareaAutosize } from '@material-ui/core'

// A função vem do fonte App, fazendo {anEnviar} é feita a descontrução dela
// podendo ser chamada diretamente
function DadosPessoais({aoEnviar, validacoes}){
    // Cria variavel para guardar estado,
    // E cria função setNome para atribuir novo valor ao estado
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promossoes, setPromossoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{erro:TextareaAutosize, texto:""}}); // Cria estado para erros do form
    // Os estados  devem ser criados sempres no inici da function, sem condicionais
    
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
        <form 
            onSubmit={ (event)=>{
                event.preventDefault();
                if(possoEnviar){
                    aoEnviar({nome, sobrenome, cpf, novidades, promossoes})
                    }
               
                }
            }
        >
            <TextField 
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome" 
                label="Nome" 
                name="nome"
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
            <TextField 
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome" 
                name="sobrenome"
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
            <TextField 
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={erros.cpf.erro}
                helperText={erros.cpf.texto}
                id="cpf" 
                label="CPF" 
                name="cpf"
                variant="outlined" 
                fullWidth 
                margin="normal"
            />

            <FormControlLabel 
                label="Promoções" 
                control={<Switch 
                    checked={promossoes}
                    onChange={(event) => {
                        setPromossoes(event.target.checked);
                    }}
                    name="promocoes" 
                    color="primary"
                />}
            />
            <FormControlLabel 
                label="Novidades" 
                control={<Switch 
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked);
                    }}
                    name="novidades" 
                    color="primary"
                />}
            />

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosPessoais;