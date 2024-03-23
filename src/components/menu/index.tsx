import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import { Container, MenuItem, ButtonIcon, Divisoria } from "./styles";
import { getIconByItemName } from "./iconHelper"; // Importando a função do iconHelper
import { useNavigate } from "react-router-dom";

const items = [
  { name: 'Início', link: '/' },
  { name: 'Shorts', link: '/shorts' },
  { name: 'Inscrições', link: '/subscription' },
  { name: 'Biblioteca', link: '/library' },
  { name: 'Histórico', link: '/history' },
];
function Menu() {
    const { state } = useGlobalContext();
    const navigate = useNavigate()
  
    return (
      <Container openMenu={state.isMenuOpen}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem openMenu={state.isMenuOpen} onClick={() => navigate(item.link)}>
              <ButtonIcon alt="" src={getIconByItemName(item.name)} />
              <span>{item.name}</span>
            </MenuItem>
            {index === 2 && <Divisoria openMenu={state.isMenuOpen} />}
          </React.Fragment>
        ))}
      </Container>
    );
  }
  
export default Menu;
