import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const Container = styled.View`
    width: 100%;
    background-color: ${Theme.primary200};
`;

export const TopArea = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerBody = styled.View`
    width: 100%;
    background-color: ${Theme.primary500};
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Description = styled.Text`
    font-size: 15px;
    color: ${Theme.gray400};
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${Theme.black};
`;

export const Flatlist = styled.FlatList`
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 54%;
    background-color: ${Theme.primary500};
`;