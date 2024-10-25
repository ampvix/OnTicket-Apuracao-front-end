
import React, { useEffect, useState } from 'react';
import { Perfil } from '../../types/Perfil.tsx';
import { getPerfils, createPerfil, updatePerfil, deletePerfil } from '../../services/business/PerfilService.tsx';

const PerfilCRUD: React.FC = () => {

    const [Perfis, setPerfis] = useState<Perfil[]>([]);
    const [nome     , setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [estado   , setEstado] = useState('');

    const [editingId, setEditingId] = useState<uuidv4 | null>(null);

    useEffect(() => {
        const fetchPerfils = async () => {
            const data = await getPerfils();
            setPerfis(data);
        };
        fetchPerfils();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const Perfil: Perfil = { nome, descricao, estado };

        if (editingId) {
            await updatePerfil(editingId, Perfil);
            setEditingId(null);
        } else {
            await createPerfil(Perfil);
        }

        setNome('');
        setDescricao('');
        setEstado('');
        setPerfis(await getPerfils());
    };

    const handleEdit = (Perfil: Perfil) => {
        setEditingId(Perfil.id);
        setNome(Perfil.nome);
        setDescricao(Perfil.descricao);
        setEstado(Perfil.estado);
    };

    const handleDelete = async (id: string) => {
        await deletePerfil(id);
        setPerfis(await getPerfils());
    };

    return (
        <div>
            <h1>CRUD de Perfis</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                />
                <button type="submit">{editingId ? 'Atualizar' : 'Adicionar'}</button>
            </form>
            <ul>
                {Perfis.map((Perfil) => (
                    <li key={Perfil.id}>
                        {Perfil.nome} - {Perfil.descricao} - {Perfil.estado}
                        <button onClick={() => handleEdit(Perfil)}>Editar</button>
                        <button onClick={() => handleDelete(Perfil.id!)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PerfilCRUD;
