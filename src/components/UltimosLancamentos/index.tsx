import { lancamentos } from "../../data/dadosPesquisa";
import styled from 'styled-components';
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../assets/image/livro2.png'

const UltimosLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  gap: 20px;

`

const ImagemEstilizada = styled.img`
  max-width: 210px;
`


export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo
        $cor='#EB9B00'
        $tamanhoFonte='36px'
      >
        Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {lancamentos.map((livro, index) => (
          <ImagemEstilizada key={index} src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  )
}