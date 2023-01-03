import React from 'react';
import * as S from './ViewRounded.styles';

interface Props {
    children: React.ReactNode,
}

const ViewRounded: React.FC<Props> = ({ children }) => {
    return (
        <S.ScrollView>
            {children}
        </S.ScrollView>
    );
}

export default ViewRounded;