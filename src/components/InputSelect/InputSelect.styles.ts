import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const Container = styled.View`
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const InputTitle = styled.Text`
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: 500;
    color: ${Theme.gray700};
`;

export const InputBox = styled.View`
    width: 100%;
    height: 45px;
    background-color: ${Theme.white};
    border-radius: 10px;
    padding-left: 17px;
    padding-right: 17px;
    align-items: center;
    justify-content: center;
`;

export const InputText = styled.Text`
    font-size: 15px;
    color: ${Theme.gray600};
`;

export const InputIconButton = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const OptionContainer = styled.View`
    width: 100%;
    max-height: 120px;
    background-color: ${Theme.white};
    border-radius: 15px;
    margin-top: 5px;
`;

interface OptionButtonProps {
    isEqual?: boolean;
}

export const OptionButton = styled.TouchableOpacity<OptionButtonProps>`
    width: 100%;
    height: 35px;
    background-color: ${(props) => props.isEqual ? Theme.primary500 : Theme.white};
    padding: 5px;
    border-radius: 5px;
`;

export const ScrollView = styled.ScrollView``;