
import React from 'react';
import { useGlobalContext } from "../../GlobalContext"; // Importe o hook de contexto

import { ButtonContainer, ButtonIcon, Container, HeaderButtons, LogoContainer, SearchButton, SearchContainer, SearchInput, SearchInputContainer } from "./styles";
import HamburguerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/YouTube-Logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import VideoIcon from "../../assets/video.png";
import NotificationIcon from "../../assets/sino.png";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    
    
    const {dispatch } = useGlobalContext();

    const toggleMenu = () => {
        dispatch({ type: 'TOGGLE_MENU' });
    };

    return (  
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={toggleMenu} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon}/>
                </ButtonContainer>
                <img 
                    style={{cursor: 'pointer', width: '100px'}}
                    src={Logo} alt="" 
                />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>
            <HeaderButtons>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px' onClick={()=> navigate('/login')}>
                    M
                </ButtonContainer>
            </HeaderButtons>
        </Container>
    );
}

export default Header;
