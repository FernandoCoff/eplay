import * as S from './style'
import { Container } from '../../styles/GlobalStyle'

const Hero = () => {
  return (
    <S.Hero>
      <Container>
        <S.Info>
          <h2>A Plague Tale: Innocence</h2>
          <p>
            A Plague Tale: Innocence conta a história de Amicia e seu irmão mais
            novo, Hugo, durante a Peste Negra na França medieval. Perseguidos
            pela Inquisição e confrontados por enxames de ratos, eles precisam
            confiar um no outro.
          </p>
        </S.Info>
      </Container>
    </S.Hero>
  )
}

export default Hero
