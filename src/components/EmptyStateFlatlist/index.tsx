import { Ionicons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { Theme } from '../../theme/theme';
import * as S from './styles';

interface Props {
    onCreateNew?: () => void;
}

const EmptyStateFlatlist: React.FC<Props> = ({ onCreateNew }) => {
    return (
        <S.Container>
            <Ionicons name="ios-list-outline" size={50} color={Theme.gray400} />
            <S.Title>Você ainda não possui plano de contas cadastrados.</S.Title>
            <S.Button onPress={onCreateNew} activeOpacity={0.7}>
                <Octicons name="plus" size={14} color={Theme.white} />
                <S.ButtonText>Criar novo</S.ButtonText>
            </S.Button>
        </S.Container>
    )
}

export default EmptyStateFlatlist;