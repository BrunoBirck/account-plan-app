import React from 'react';
import * as S from './InputText.styles';

interface Props {
    title: string;
    value: string;
    setValue: (text: string) => void;
    codeExists?: boolean;
    keyboardType?: string;
}

const InputText: React.FC<Props> = ({ title, value, setValue, codeExists, keyboardType }) => {
    return (
        <S.Container>
            <S.InputTitle>{title}</S.InputTitle>
            <S.InputText
                keyboardType={keyboardType}
                error={codeExists}
                value={value}
                onChangeText={(text: string) => setValue(text)}
            />
            {
                codeExists &&
                <S.InputErrorText>Este código já existe</S.InputErrorText>
            }
        </S.Container>
    );
}

export default InputText;