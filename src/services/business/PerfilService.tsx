// src/services/PerfilService.ts
import axios from 'axios';
import Perfil from '../../types/Perfil.tsx';

const API_URL = 'http://localhost:8080/perfil/criaPerfil';

export const createPerfil = async (Perfil: Perfil) => {
    const response = await axios.post<Perfil>(API_URL, Perfil);
    return response.data;
};

export const updatePerfil = async (id: uuid, Perfil: Perfil) => {
    const response = await axios.put<Perfil>(`${API_URL}/${id}`, Perfil);
    return response.data;
};

export const getPerfils = async () => {
    const response = await axios.get<Perfil[]>(API_URL);
    return response.data;
};

export const deletePerfil = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
};
