import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${Theme.white};
    border-radius: 15px;
    margin-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const TitleButton = styled.TouchableOpacity`
    width: 85%;
    height: 56px;
    justify-content: center;
`;

interface TitleProps {
    type: 'INCOME' | 'COST'
}

export const Title = styled.Text<TitleProps>`
    font-size: 15px;
    color: ${(props) => props.type === 'INCOME' ? Theme.green : Theme.orange};
`;

export const IconButton = styled.TouchableOpacity`
    width: 15%;
    height: 25px;
    align-items: center;
    justify-content: center;
`;