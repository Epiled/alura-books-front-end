import styled from 'styled-components';
import Input from '../Input';
import { useState } from 'react';
import { livros } from '../../data/dadosPesquisa';

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

const Livros = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
`

const Resultado = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  box-sizing: border-box;
  max-width: 300px;
  width: 100%;
  background: #EB9B00;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  p {
    width: auto;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid #c78500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const SemResultados = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`

export default function Pesquisa() {

  type Livros = typeof livros[0];
  const [livrosPesquisados, setLivrosPesquisados] = useState<Livros[]>([]);
  const [pesquisa, setPesquisa] = useState('');

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder='Escreva sua próxima leitura'
        onBlur={evento => {
          const textoDigitado = evento.target.value.toLowerCase()
          setPesquisa(textoDigitado)
          const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado))
          setLivrosPesquisados(resultadoPesquisa);
          console.log(livrosPesquisados)
        }}
      />
      {pesquisa &&
        <Livros>
          {livrosPesquisados.length > 0 ? (
            livrosPesquisados.map((livro, index) => (
              <Resultado key={index}>
                <img src={livro.src} alt={`Capa do livro ${livro.nome}`} />
                <p>{livro.nome}</p>
              </Resultado>
            ))) : (
            <SemResultados>Nenhum resultado foi encontrado para "{pesquisa}"</SemResultados>
          )}
        </Livros>
      }
    </PesquisaContainer>
  )
}