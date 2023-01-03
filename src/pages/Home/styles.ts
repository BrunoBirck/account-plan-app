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

export const ContainerBody = styled.ScrollView`
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
    margin-bottom: 54%;
    background-color: ${Theme.primary500};
    width: 100%;
`;

export const ModalTextArea = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
    width: 100%;
    align-items: center;
`;

interface ModalProps {
    bold?: boolean;
    transparent?: boolean;
}

export const ModalText = styled.Text<ModalProps>`
    font-size: 15px;
    color: ${Theme.gray700};
    font-weight: ${(props) => props.bold ? 700 : 400};
`;

export const ModalButtonArea = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const ModalButton = styled.TouchableOpacity<ModalProps>`
    background-color: ${(props) => props.transparent ? Theme.white : Theme.red};
    width: 50%;
    height: 40px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    margin-left: -20px;
`;

export const ModalButtonText = styled.Text<ModalProps>`
    font-size: 15px;
    color: ${(props) => props.transparent ? Theme.red : Theme.white};
`;