import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

interface ContainerProps {
    small?: boolean;
}

export const Container = styled.SafeAreaView<ContainerProps>`
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    min-height: ${(props) => props.small ? 15 : 22}%;
    background-color: ${Theme.primary200};
`;

export const BackBox = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: 22px;
    color: ${Theme.white};
    font-weight: bold;
`;

export const Box = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
`;

export const HeaderBox = styled.View`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
`;

export const BackHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const IconButton = styled.TouchableOpacity`
    margin-right: 5px;
`;