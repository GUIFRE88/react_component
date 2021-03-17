import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function FormularioCadastro(){
    // Cria variavel para guardar estado,
    // E cria função setNome para atribuir novo valor ao estado
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState(0);
    return(
        <form 
            onSubmit={ (event)=>{
                event.preventDefault();
                console.log(nome);
                }
            }
        >
            <TextField 
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"/>
            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>

            <FormControlLabel 
                label="Promoções" 
                control={<Switch name="promocoes" defaultChecked color="primary"/>}
            />
            <FormControlLabel 
                label="Novidades" 
                control={<Switch name="novidades" defaultChecked color="primary"/>}
            />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;