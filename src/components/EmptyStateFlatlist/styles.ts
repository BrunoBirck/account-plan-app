import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 20%;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: ${Theme.gray400};
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${Theme.primary200};
    width: 100%;
    height: 45px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    margin-top: 25%;
    flex-direction: row;
`;

export const ButtonText = styled.Text`
    font-size: 15px;
    color: ${Theme.white};
    margin-left: 5%;
`;