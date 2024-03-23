import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 100px; /* Deixe espaço para o menu lateral */
    width: calc(100% - 100px); /* Subtrai a largura do menu lateral */
    background-color: #fff;
    padding-top: 10px; 
    padding-bottom: 10px; 
    z-index: 1; 
    overflow-y: auto; /* Adicionando uma barra de rolagem vertical caso necessário */
    overflow-x: auto; /* Adicionando uma barra de rolagem horizontal caso necessário */
    white-space: nowrap; /* Impede que os itens quebrem para a próxima linha */
    margin-top: 55px;
`;

export const InnerContainer = styled.div`
    margin-left: 70px; /* Deixe espaço para o menu lateral */
`;

export const NichoTextoContainer = styled.div<{ first?: boolean }>`
    min-width: 12px;
    height: 32px;
    display: inline-flex; /* Use inline-flex para que os itens fiquem próximos uns dos outros */
    align-items: center;
    cursor: pointer;
    padding: 0 12px; /* Ajuste o padding conforme necessário */
    box-sizing: border-box;
    background-color: ${({ first }) => (first ? "#000" : "#f2f2f2")};
    margin-right: 8px; /* Adicione um margin-right para espaçamento entre os nichos */
    border-radius: 8px;
    &:hover {
        background-color: ${({ first }) => (first ? "#000" : "#d9d9d9")};
    }
`;

export const NichosTexto = styled.span <{ first?: boolean }>`
    font-weight: bold;
    color: ${({ first }) => (first ? "#fff" : "#333")};; 
`;
