import { Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Theme } from '../../theme/theme';
import * as S from './Modal.styles';

interface ModalProps {
    visible: boolean;
    onRequestClose: () => void;
    children?: React.ReactNode;
    type?: 'ERROR';
}

export const ModalComponent: React.FC<ModalProps> = ({
    children,
    visible,
    onRequestClose,
    type
}) => {

    if (type === 'ERROR') {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onRequestClose}
            >
                <S.CenteredView>
                    <S.ModalView>
                        <MaterialIcons name="error-outline" size={60} color={Theme.red} />
                        <S.ModalTextArea>
                            <S.ModalText bold>OPS!</S.ModalText>
                            <S.ModalText>Preencha os campos para criar um novo plano de contas.</S.ModalText>
                        </S.ModalTextArea>
                        <S.ModalButtonArea>
                            <S.ModalButton onPress={onRequestClose} activeOpacity={0.7}>
                                <S.ModalButtonText>Entendi</S.ModalButtonText>
                            </S.ModalButton>
                        </S.ModalButtonArea>
                    </S.ModalView>
                </S.CenteredView>
            </Modal>
        );
    } else {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onRequestClose}
            >
                <S.CenteredView>
                    <S.ModalView>{children}</S.ModalView>
                </S.CenteredView>
            </Modal>
        );
    }
};
