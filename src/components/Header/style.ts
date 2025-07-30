import styled from 'styled-components'
import { color } from '../../styles/GlobalStyle'

export const Header = styled.header`
  background-color: ${color.gray};
  padding: 24px;
  border-radius: 16px;
  margin-top: 40px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    nav {
      margin-left: 40px;
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 16px;
        li > a {
          text-decoration: none;
          font-size: 16px;
          color: ${color.white};
          font-weight: 500;
        }
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    color: ${color.white};
    gap: 16px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
  }
`
