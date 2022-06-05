import { Wrapper, Content } from './Home.style';
import Icon from './images/Hero.image';

const Home = () => {
  return (
    <Wrapper>
        <Content>
          < div className='hero'>
            <div className='hero-text'>
              <h1 className='hero-text-header'>Organize Your School's Data</h1>
              <p className='hero-text-desc'>It's high time you got rid of all that clunky paperwork, stress and slow process.<br />Lets take away all those worries from you.</p>
              <button>Register Now</button>
            </div>
            <Icon />
          </div>
        </Content>
    </Wrapper>
  )
}

export default Home