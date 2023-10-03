import styled from "styled-components";
import { colors } from "../../theme";
import { Link } from "react-router-dom";

export const StyleInputUser = styled.div`
    display: flex;
    label {
        color: ${colors.deepGrey};
    }
    input {
        width: 400px;
        height: 50px;
    }
    .teste {
        display: flex;
       input {
        height: 182px;
       }
    }
}
`;

export const StyledCheckbox = styled.div`
    display: flex;
    gap: 1rem;
    
`
export const StyleLinkUser = styled(Link)`
   text-decoration: none; 
   color: inherit;

`