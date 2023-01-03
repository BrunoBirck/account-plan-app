import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { IAccountPlanItem } from '../../interfaces/accountPlanInterface';
import { Theme } from '../../theme/theme';
import * as S from './InputSelect.styles';

interface Props {
    title?: string;
    data?: IAccountPlanItem[] | string[];
    type?: 'TYPE' | 'Y/N' | 'ACCOUNT-TYPE';
    onSelect: (item: any) => void;
    value?: string;
    disable?: boolean;
}

const InputSelect: React.FC<Props> = ({ title, data, type, onSelect, value, disable }) => {
    const [showOption, setShowOption] = useState(false);

    const listFiltered = type === 'ACCOUNT-TYPE' ? data?.filter(item => item.acceptReleases !== 'Sim') : data;

    const handleSelect = (item: any) => {
        onSelect(item);
        setShowOption(false);
    };

    return (
        <S.Container>
            <S.InputTitle>{title}</S.InputTitle>
            <S.InputBox>
                <S.InputIconButton disabled={disable} onPress={() => setShowOption(!showOption)} activeOpacity={0.7}>
                    <S.InputText>{value ? value : 'Selecione uma opção'}</S.InputText>
                    {
                        showOption ?
                            <AntDesign name="caretup" size={14} color={Theme.gray500} />
                            :
                            <AntDesign name="caretdown" size={14} color={Theme.gray500} />
                    }
                </S.InputIconButton>
            </S.InputBox>
            {
                showOption &&
                <S.OptionContainer>
                    <S.ScrollView keyboardShouldPersistTaps='handled'>
                        {
                            listFiltered?.map(item =>
                                type === 'ACCOUNT-TYPE' ?
                                    <S.OptionButton isEqual={item.code === value?.code} key={item.code} activeOpacity={0.7} onPress={() => handleSelect(item)}>
                                        <Text>{`${item.code} - ${item.title}`}</Text>
                                    </S.OptionButton>
                                    :
                                    <S.OptionButton isEqual={item === value} key={item} activeOpacity={0.7} onPress={() => handleSelect(item)}>
                                        <Text>{item}</Text>
                                    </S.OptionButton>
                            )
                        }
                    </S.ScrollView>
                </S.OptionContainer>
            }
        </S.Container>
    );
}

export default InputSelect;