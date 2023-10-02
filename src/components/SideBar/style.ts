import styled from "styled-components";
import { colors } from "../../theme";

export const SideBarMenu = styled.div `
    
    background-color: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 271px;
    height: 1208px;
    overflow-y: auto; 
    .imagelogo {
        margin-top: 24px; 
      }
    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: -271px; 
        transition: left 0.3s ease;
    }

    &.show {
        left: 0;
    }
`
