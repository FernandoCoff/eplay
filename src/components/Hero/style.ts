import styled from 'styled-components'
import image from '../../assets/images/banner.png'
import { color } from '../../styles/GlobalStyle'

export const Hero = styled.div`
  width: 100%;
  height: 500px;
  display: block;
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`

export const Info = styled.div`
  color: ${color.white};
  position: absolute;
  top: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  h2 {
    font-size: 32px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    line-height: 150%;
  }
`
