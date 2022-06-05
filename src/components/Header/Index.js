import { Wrapper, Content } from './Header.styles';
import logo from '../../school-zone-logos/school-zone-1-transparent-bg.png';

const Header = () => {
  return (
    <Wrapper>
        <Content>
            <nav>
                <a href='/home'>
                    <img src={logo} alt='logo' />
                </a>
                <ul>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/services'>Our Services</a></li>
                    <li><a href='/contact'>Contact Us</a></li>
                    <li><a href='/about'>About Us</a></li>
                </ul>
            </nav>
            <div className='account'>
                <button id='signup'>Sign up</button>
                <button id='login'>Log in</button>
            </div>
        </Content>
    </Wrapper>
  )
}

export default Header