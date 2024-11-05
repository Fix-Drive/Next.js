import { useState } from "react";
import axios from "axios";
import { Button, Form, FormContainer, FormGroup, Input, SearchButton } from "../styles/FormCadastro";
import { useRouter } from "next/navigation";

export default function FormCadastro() {
    const [searchValue, setSearchValue] = useState("eux8543");
    const [corVeiculo, setCorVeiculo] = useState("VERMELHA");
    const [anoVeiculo, setAnoVeiculo] = useState("2012");
    const [marcaVeiculo, setMarcaVeiculo] = useState("CITROEN");
    const [modeloVeiculo, setModeloVeiculo] = useState("C3");
    const router = useRouter();

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/identificar_veiculo', {
                placa: searchValue,
            });
            console.log(response.data);
            const { cor, ano, marca, modelo, chassi } = response.data;

            // Atualiza os estados com os dados do veículo
            setCorVeiculo(cor);
            setAnoVeiculo(ano);
            setMarcaVeiculo(marca);
            setModeloVeiculo(modelo);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("Erro ao buscar dados do veículo:", error.response?.data || error.message);
            } else {
                console.error("Erro inesperado:", error);
            }
        }
    };

    const handleSend = () => {
        const params = new URLSearchParams({
            marca: marcaVeiculo,
            modelo: modeloVeiculo,
            ano: anoVeiculo.toString(),
            cor: corVeiculo,
            placa: searchValue,
        }).toString();

        router.push(`/veiculos?${params}`);
    };

    

    return (
        <FormContainer>
            <Form onSubmit={handleSearch}>
                <FormGroup>
                    <input
                        type="text"
                        placeholder="Digite a placa do veículo"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <SearchButton>Buscar</SearchButton>
                </FormGroup>

                <Input
                    type="text"
                    placeholder="Cor do veículo"
                    value={corVeiculo}
                    onChange={(e) => setCorVeiculo(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="Ano do veículo"
                    value={anoVeiculo}
                    onChange={(e) => setAnoVeiculo(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="Marca do veículo"
                    value={marcaVeiculo}
                    onChange={(e) => setMarcaVeiculo(e.target.value)}
                />

                {/* Botão "Enviar" com nova função */}
                <Button className="full" id="enviar" type="button" onClick={handleSend}>
                    Enviar
                </Button>
            </Form>
        </FormContainer>
    );
}
