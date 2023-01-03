import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: 'rgba(0, 0, 0, 0.3)';
`;

export const ModalView = styled.View`
    background-color: ${Theme.white};
    border-radius: 30px;
    padding: 25px;
    width: 100%;
    min-height: 40%;
    max-height: 40%;
    align-items: center;
    shadowColor: #000;
    shadowOffset: {
        width: 0;
        height: 2;
    };
    shadowOpacity: 0.25;
    shadowRadius: 4;
    elevation: 5;
    width: 80%;
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
    font-size: ${(props) => props.bold ? 22 : 15}px;
    color: ${Theme.gray700};
    font-weight: ${(props) => props.bold ? 700 : 400};
    text-align: center;
`;

export const ModalButtonArea = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const ModalButton = styled.TouchableOpacity<ModalProps>`
    background-color: ${(props) => props.transparent ? Theme.white : Theme.red};
    width: 100%;
    height: 40px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`;

export const ModalButtonText = styled.Text<ModalProps>`
    font-size: 15px;
    color: ${(props) => props.transparent ? Theme.red : Theme.white};
`;