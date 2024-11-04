"use client"
import { useState } from "react";
import { Button, Form, FormAction, FormGroup, Input, LoginContainer } from "../styles/LoginForm";
import Link from "next/link";

export default function LoginForm() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <LoginContainer>
            <Form>
                <FormGroup>
                    <Input 
                        className="form-content" 
                        type="text" 
                        id="nome" 
                        placeholder="Digite seu nome" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required 
                    />
                    <Input 
                        className="form-password" 
                        type="password" 
                        id="senha" 
                        placeholder="Digite sua senha" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required 
                    />
                </FormGroup>

                <FormAction>
                    <Button className="full" id="entrar">
                        <Link className="button-link-light" href={"/cadastro-veiculo"}>Entrar</Link>
                    </Button>
                </FormAction>
            </Form>
        </LoginContainer>
    );
};
