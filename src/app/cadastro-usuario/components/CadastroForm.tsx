"use client"
import { useState } from "react";
import { Button, Form, FormContainer, Input } from "../styles/CadastroForm";
import Link from "next/link";

export default function CadastroForm() {
    const [usuario, setUsuario] = useState("");
    const [cpf, setCpf] = useState("");
    const [cnh, setCnh] = useState("");
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState("");
  
    return (
      
      <FormContainer>
        <Form>
          
            <Input type="text" 
            placeholder="Digite seu usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            />
            <Input type="text" 
            placeholder="Digite seu CPF ou CNPJ"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            />
            <Input type="text" 
            placeholder="Digite sua CNH"
            value={cnh}
            onChange={(e) => setCnh(e.target.value)}
            required
            />
            <Input type="text" 
            placeholder="Crie uma senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            />
            <Input type="text" 
            placeholder="Informe seu endereço completo"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
            />
          
          <Button className="full" id="cadastrar">
              <Link className="button-link-light" href={"/cadastro-motorista"}>Cadastrar</Link>
          </Button>
      </Form>
    </FormContainer>
  
    );
  }

  