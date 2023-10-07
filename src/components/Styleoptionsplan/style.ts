import styled from "styled-components";
import { colors } from "../../theme";

export const StyleOptionsPlan = styled.div`
    display: flex;
    width: 85%;
    margin-left: auto;
    .pencil {
        margin-left: auto;
        cursor: pointer;
    }
    button {
        border: none;
        cursor: pointer;
        background-color: ${colors.white};
    }
`

