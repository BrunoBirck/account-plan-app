import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const Container = styled.View`
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const InputTitle = styled.Text`
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: 500;
    color: ${Theme.gray700};
`;

interface InputTextProps {
    error?: boolean;
}

export const InputText = styled.TextInput<InputTextProps>`
    width: 100%;
    height: 45px;
    background-color: ${Theme.white};
    border-radius: 10px;
    padding-left: 17px;
    border-color: ${(props) => props.error ? Theme.red : Theme.white};
    border-width: ${(props) => props.error ? 1 : 0}px;
`;

export const InputErrorText = styled.Text`
    margin-bottom: 5px;
    margin-top: 2px;
    font-size: 12px;
    font-weight: 500;
    color: ${Theme.red};
`;