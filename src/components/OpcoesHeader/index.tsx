import styled from 'styled-components';

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  text-transform: uppercase;
`

const Opcoes = styled.ul`
  display: flex;
`

export default function OpcoesHeader() {

  const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante'];

  return (
    <Opcoes>
      {textoOpcoes.map((texto, index) => (
        <Opcao key={index}>{texto}</Opcao>
      ))}
    </Opcoes>
  )
}