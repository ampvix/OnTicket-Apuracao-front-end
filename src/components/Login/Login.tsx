
import { FaUser, FaLock } from "react-icons/fa";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./Login.css";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const API_URL = 'http://localhost:8080/auth/login';
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        // Impede que a página seja recarregada
        e.preventDefault();

        // Faz o console log das credenciais do usuário
        console.log("Dados de Login:", { email, senha});

        try {
            const response = await axios.post(API_URL,
                {
                    email,
                    senha,
                }, {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer '}}
            );
            if (response.status === 200) {
                // Redirecionar para a página inicial após o login
                navigate('/home');
            }
        } catch (error) {
            alert(`Login falhou: ${error}`)
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu sua senha?</a>
                </div>
                <button type="submit">Login</button>
                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="#">Registar</a>{" "}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
