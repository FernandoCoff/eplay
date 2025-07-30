import * as S from './style'
import logo from '../../assets/images/logo.svg'
import cartLogo from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <S.Header>
      <div>
        <img src={logo} alt="EPLAY" />
        <nav>
          <ul>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Novidades</a>
            </li>
            <li>
              <a href="#">Promoções</a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="#">
        0 - Produto&#40;s&#41;
        <img src={cartLogo} alt="Carrinho de compras" />
      </a>
    </S.Header>
  )
}

export default Header
