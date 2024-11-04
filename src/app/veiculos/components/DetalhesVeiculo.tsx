import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { VehicleDetailsContainer, VehicleTable, VehicleTableCell, VehicleTableHeader, VehicleTitle } from '../styles/DetalhesVeiculo';

export default function DetalhesVeiculo() {
    const searchParams = useSearchParams();
    const [isClient, setIsClient] = useState(false); // Verifica se está no cliente
    const [vehicleDetails, setVehicleDetails] = useState({
        marca: "",
        modelo: "",
        ano: "",
        cor: "",
        placa: ""
    });

    useEffect(() => {
        // Define que estamos no lado do cliente
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {  // Executa apenas se estiver no lado do cliente
            const marca = searchParams.get("marca");
            const modelo = searchParams.get("modelo");
            const ano = searchParams.get("ano");
            const cor = searchParams.get("cor");
            const placa = searchParams.get("placa");

            // Atualiza o estado com os detalhes do veículo, caso estejam disponíveis
            if (marca && modelo && ano && cor && placa) {
                setVehicleDetails({ marca, modelo, ano, cor, placa});
            }
        }
    }, [isClient, searchParams]);

    // Verifica se os dados estão carregados para renderizar a tabela
    const { marca, modelo, ano, cor, placa} = vehicleDetails;
    const isDataLoaded = marca && modelo && ano && cor && placa;

    if (!isDataLoaded) {
        return <p>Carregando detalhes do veículo...</p>;
    }

    return (
        <VehicleDetailsContainer>
            <VehicleTitle>Detalhes do Veículo</VehicleTitle>
            <VehicleTable>
                <tbody>
                    <tr>
                        <VehicleTableHeader>Marca:</VehicleTableHeader>
                        <VehicleTableCell>{marca}</VehicleTableCell>
                    </tr>
                    <tr>
                        <VehicleTableHeader>Modelo:</VehicleTableHeader>
                        <VehicleTableCell>{modelo}</VehicleTableCell>
                    </tr>
                    <tr>
                        <VehicleTableHeader>Ano:</VehicleTableHeader>
                        <VehicleTableCell>{ano}</VehicleTableCell>
                    </tr>
                    <tr>
                        <VehicleTableHeader>Cor:</VehicleTableHeader>
                        <VehicleTableCell>{cor}</VehicleTableCell>
                    </tr>
                    <tr>
                        <VehicleTableHeader>Placa:</VehicleTableHeader>
                        <VehicleTableCell>{placa}</VehicleTableCell>
                    </tr>
                </tbody>
            </VehicleTable>
        </VehicleDetailsContainer>
    );
}
