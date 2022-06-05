import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 50px;
    position: sticky;
    top: 0;
`
export const Content = styled.div`
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.7);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    nav {
        display: flex;
        align-items: center;
        font-size: 1.1em;

        img {
            width: 70px;
            height: 70px;
        }
        ul {
            display: flex;
            justify-content: space-between;
            margin-left: 50px;
            gap: 20px;
    
            li {
                list-style-type: none;
                position: relative;
                
                a {
                    text-decoration: none;
                    color: var(--primary-color);
                    padding: 0 5px;
                    font-family: var(--garamond);
                }
                
                ::after {
                    content: '';
                    width: 0;
                    height: 25%;
                    display: block;
                    position: absolute;
                    bottom: 5%;
                    left: 0;
                    background-color: var(--secondary-color);
                    z-index: -1;
                    transition: all 300ms ease-in-out;
                }
                
                :hover::after {
                    width: 100%;
                }
            }
        }
    }
    
    .account {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;

        button {
            border: none;
            color: var(--primary-color);
            font-size: 1.1em;
            vertical-align: middle;
            cursor: pointer;
            font-family: var(--garamond);
        }
        #signup {
            background: transparent;
            position: relative;
            
            ::after {
                content: '';
                width: 0;
                height: 25%;
                display: block;
                position: absolute;
                bottom: 5%;
                left: 0;
                background-color: var(--secondary-color);
                z-index: -1;
                transition: all 300ms ease-in-out;
            }
            
            :hover::after {
                content: '';
                width: 100%;
                height: 25%;
                display: block;
                position: absolute;
                bottom: 5%;
                left: 0;
                background-color: var(--secondary-color);
                z-index: -1
            }
        }
        
        #login {
            display: inline-block;
            border-radius: 15px;
            padding: 5px 10px;
            background: whitesmoke;
            transition: all 300ms ease-in-out;

            :hover {
                box-shadow: 
                    -2px -2px var(--light-tint),
                    2px 2px var(--dark-tint);
                background: var(--secondary-color);
                color: white;
            }
        }
    }
`