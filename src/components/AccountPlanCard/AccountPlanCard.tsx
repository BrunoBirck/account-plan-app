import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TypeAccountPlan } from '../../interfaces/accountPlanInterface';
import { Theme } from '../../theme/theme';
import * as S from './AccountPlanCard.styles';

interface Props {
    type: TypeAccountPlan;
    title: string;
    code: string;
    onDelete?: () => void;
    onPress?: () => void;
}

const AccountPlanCard: React.FC<Props> = ({ title, type, onDelete, onPress, code }) => {
    return (
        <S.Container>
            <S.TitleButton activeOpacity={0.7} onPress={onPress}>
                <S.Title type={type}>{`${code} - ${title}`}</S.Title>
            </S.TitleButton>
            <S.IconButton activeOpacity={0.7} onPress={onDelete}>
                <Feather name="trash" size={15} color={Theme.gray300} />
            </S.IconButton>
        </S.Container>
    )
}

export default AccountPlanCard;