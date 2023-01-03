import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Theme } from '../../theme/theme';
import * as S from './TopNavigation.styles';
import SearchInput from '../InputSearch/SearchInput';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export interface TopNavigationProps {
  title?: string;
  back?: boolean;
  small?: boolean;
  value?: string;
  onChange?: (text: string) => void;
  onBack?: () => void;
  onPress?: () => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  back,
  title,
  onBack,
  onPress,
  small,
  value,
  onChange
}) => {
  return (
    <S.Container small={small}>
      {back ? (
        <S.BackBox>
          <S.BackHeader>
            <S.IconButton activeOpacity={0.7} onPress={onBack}>
              <Ionicons name="chevron-back" size={24} color={Theme.white} />
            </S.IconButton>
            {title && (
              <S.Title>
                {title}
              </S.Title>
            )}
          </S.BackHeader>
          <S.IconButton activeOpacity={0.7} onPress={onPress}>
            <AntDesign name="check" size={24} color={Theme.white} />
          </S.IconButton>
        </S.BackBox>
      ) : (
        <S.HeaderBox>
          <S.Box>
            <S.Title>
              {title}
            </S.Title>
            <S.IconButton activeOpacity={0.7} onPress={onPress}>
              <AntDesign name="plus" size={24} color={Theme.white} />
            </S.IconButton>
          </S.Box>
          <SearchInput onChange={onChange} value={value} />
        </S.HeaderBox>
      )}
    </S.Container>
  );
};
