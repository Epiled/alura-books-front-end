import perfil from '../../assets/svg/perfil.svg';
import sacola from '../../assets/svg/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

export default function IconesHeader() {

  const icones = [perfil, sacola];

  return (
    <Icones>
      {icones.map((icone, index) => (
        <Icone key={index}><img src={icone} /></Icone>
      ))}
    </Icones>
  )
}