import React from 'react';
import * as S from './SearchInput.styles';
import { AntDesign } from '@expo/vector-icons';
import { Theme } from '../../theme/theme';

interface Props {
    value?: string;
    onChange?: (text: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
    return (
        <S.Container>
            <S.SearchInput
                placeholderTextColor={Theme.gray300}
                placeholder='Pesquisar conta'
                value={value}
                onChangeText={onChange}
            />
            <AntDesign name="search1" size={24} color={Theme.gray300} style={{ position: 'absolute', left: 20, top: 41 }} />
        </S.Container>
    );
}

export default SearchInput;