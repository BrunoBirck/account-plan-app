import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${Theme.primary500};
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${Theme.black};
`;

export const Description = styled.Text`
    font-size: 15px;
    color: ${Theme.gray400};
`;

export const ScrollView = styled.ScrollView``;

export const View = styled.View``;

export const TopArea = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;