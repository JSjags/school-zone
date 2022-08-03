import { Wrapper, Content } from './Footer.styles';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <Wrapper>
            <Content>
                <div className='quick-links'>
                    <p>Quick Links</p>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/services'>Our Services</a></li>
                        <li><a href='/contact'>Contact Us</a></li>
                        <li><a href='/about'>About Us</a></li>
                    </ul>
                </div>
                <div className='handles'>
                    <p>Wanna see how we roll, follow us on these platforms.</p>
                    <ul>
                        <li><BsTwitter style={{verticalAlign: "middle", marginBottom: 3}} /> Twitter</li>
                        <li><BsGithub style={{verticalAlign: "middle", marginBottom: 3}} /> Github</li>
                        <li><BsLinkedin style={{verticalAlign: "middle", marginBottom: 3}} /> Linkedin</li>
                    </ul>
                </div>
                <p className='copyright'>Copyright ©️ School Zone® {year}.All Rights Reserved.</p>
            </Content>
        </Wrapper>
    )
}

export default Footer;