import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
    width: ${({ openMenu })=> openMenu? '250px': '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: relative;
    top: 55px;
    z-index: 2;
`;

export const MenuItem = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({ openMenu })=> openMenu? '45px': '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu })=> openMenu? 'row': 'column'};
    align-items: center;
    justify-content: ${({ openMenu })=> openMenu? 'none': 'center'};
    
    span{
        font-weight: ${({ openMenu })=> openMenu? '600px': '400px'};
        margin-left: ${({ openMenu })=> openMenu? '20px': 'none'};
        font-size: ${({ openMenu })=> openMenu? '16px': '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
    }

`;

export const ButtonIcon = styled.img`
    width: 25px;
`;


export const Divisoria = styled.div<{ openMenu: boolean }>`
  display: ${({ openMenu }) => (openMenu ? 'block' : 'none')};
  width: 100%;
  height: 1px; 
  background-color: #2f3b4c;
  margin-top: 20px;
  margin-bottom: 20px;
`;



