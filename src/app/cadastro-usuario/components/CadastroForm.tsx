"use client"
import { useState } from "react";
import { Button, Form, FormContainer, Input } from "../styles/CadastroForm";
import { useRouter } from "next/navigation";

export default function CadastroForm() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [cnh, setCnh] = useState("");
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState("");
    const router = useRouter();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Previne o comportamento padrão do formulário

      const clienteData = {
          nmCliente: nome,
          nrCpf: cpf,
          nrCnh: cnh,
          dsSenha: senha,
          dsEndereco: endereco,
          // Não inclua o ID aqui, se a geração é feita no backend
      };

      try {
          const response = await fetch("http://localhost:8080/FixDrive_SystemJava_war/api/clientes", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(clienteData), // Enviando os dados como JSON
          });

          if (response.ok) {
              // Se a resposta for bem-sucedida, redirecione para outra página ou mostre uma mensagem de sucesso
              alert("Cadastro realizado com sucesso!");
              router.push("/cadastro-motorista"); // Redireciona para a página do motorista
          } else {
              const errorData = await response.json();
              alert(`Erro: ${errorData.message}`);
          }
      } catch (error) {
          console.error("Erro ao cadastrar cliente:", error);
          alert("Houve um erro ao cadastrar. Tente novamente mais tarde.");
      }
  };

  return (
    <FormContainer>
        <Form onSubmit={handleSubmit}> {/* Adicionando o onSubmit */}
            <input 
                type="text"
                placeholder="Digite seu usuário"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Digite sua CNH"
                value={cnh}
                onChange={(e) => setCnh(e.target.value)}
                required
            />
            <Input
                type="password" // Altere para password para segurança
                placeholder="Crie uma senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Informe seu endereço completo"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required
            />
            <Button type="submit" className="full" id="cadastrar">
                Cadastrar
            </Button>
        </Form>
    </FormContainer>
);
}