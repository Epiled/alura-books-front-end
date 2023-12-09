import styled from 'styled-components';
import { Titulo } from '../Titulo';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: #FFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  width: 100%;  
`

const Botao = styled.button`
  display: block;
  background-color: #EB9B00;
  border: none;
  color: #FFF;
  font-size: 16px;
  font-weight: 900;
  padding: 10px 0px;
  text-align: center;
  width: 150px;
    &:hover {
      cursor: pointer;
    }
`

const Descricao = styled.p`
  max-width: 300px;
`

const Subtitulo = styled.h4`
  color: #002F52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`

const ImgLivro = styled.img`
  width: 150px;
`

interface Props {
  titulo: string,
  subtitulo: string,
  descricao: string,
  img: string
}

export default function CardRecomenda({ titulo, subtitulo, descricao, img }: Props) {
  return (
    <Card>
      <div>
        <Titulo
          $tamanhoFonte="16px"
          $cor="#EB9B00"
          $alinhamento="left"
        >{titulo}</Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} />
        <Botao>Saiba Mais</Botao>
      </div>
    </Card>
  )
}