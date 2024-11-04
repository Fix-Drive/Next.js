import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { PartsListContainer, PartsTable, PartsTableCell, PartsTableHeader, PartsTitle } from '../styles/ListaPrecos';

interface Peca {
    name: string;
    price: number | null;
}

export default function ListaPrecos() {
    const searchParams = useSearchParams();
    const marcaVeiculo = searchParams.get("marca");
    const [pecas, setPecas] = useState<Peca[]>([]);

    useEffect(() => {
        const fetchPrices = async () => {
            if (!marcaVeiculo) return; // Retorna se não houver marca

            const pecasList = [
                'Para-choque dianteiro (R$)', 'Farol dianteiro (R$)', 'Capô (R$)', 'Grade dianteira (R$)',
                'Para-lama dianteiro (R$)', 'Espelho retrovisor (R$)', 'Porta dianteira (R$)',
                'Vidro da porta (R$)', 'Painel frontal (R$)', 'Para-choque traseiro (R$)',
                'Lanterna traseira (R$)', 'Porta-malas (R$)', 'Spoiler traseiro (R$)',
                'Pára-brisa (R$)', 'Rodas (R$)', 'Assentos/Bancos (R$)', 'Motor (R$)', 'Bateria (R$)'
            ];

            const updatedPecas = await Promise.all(pecasList.map(async (peca) => {
                try {
                    const response = await axios.get('http://127.0.0.1:5001/predict', {
                        params: { marca: marcaVeiculo, peca }
                    });
                    return { name: peca, price: response.data.preco_estimado };
                } catch (error) {
                    console.error(`Erro ao obter o preço para ${peca}:`, error);
                    return { name: peca, price: null };
                }
            }));

            setPecas(updatedPecas);
        };

        fetchPrices();
    }, [marcaVeiculo]);

    return (
        <PartsListContainer>
            <PartsTitle>Peças e Preços</PartsTitle>
            <PartsTable>
                <thead>
                    <tr>
                        <PartsTableHeader>Peça</PartsTableHeader>
                        <PartsTableHeader>Preço</PartsTableHeader>
                    </tr>
                </thead>
                <tbody>
                    {pecas.map((peca) => (
                        <tr key={peca.name}>
                            <PartsTableCell>{peca.name}:</PartsTableCell>
                            <PartsTableCell>{peca.price !== null ? `R$ ${peca.price.toFixed(2)}` : 'Não disponível'}</PartsTableCell>
                        </tr>
                    ))}
                </tbody>
            </PartsTable>
        </PartsListContainer>
    );
}
