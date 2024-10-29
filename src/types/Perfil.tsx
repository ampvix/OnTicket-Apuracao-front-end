import { v4 as uuidv4 } from 'uuid';

export default class Perfil {
    id?: string;
    nome: string;
    descricao: string;
    estado: string;

    constructor(nome: string, descricao: string, estado: string) {
        this.id = uuidv4();
        this.nome = nome;
        this.descricao = descricao;
        this.estado = estado;
    }
}