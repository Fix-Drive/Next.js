"use client";

import React, { useState } from "react";
import { FormContainer, Form, Input, Button } from "../styled/motorista-form";

const MotoristaForm: React.FC = () => {
    const [formData, setFormData] = useState({
        numeroCarteira: "",
        validade: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Dados enviados:", formData);
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Input
                        type="text"
                        placeholder="Número da carteira de motorista"
                        id="numeroCarteira"
                        name="numeroCarteira"
                        value={formData.numeroCarteira}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        type="date"
                        placeholder="Data de validade"
                        id="validade"
                        name="validade"
                        value={formData.validade}
                        onChange={handleChange}
                    />
                </div>
                <Button type="submit">Enviar</Button>
            </Form>
        </FormContainer>
    );
};

export default MotoristaForm;
