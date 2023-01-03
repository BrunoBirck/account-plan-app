import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const Container = styled.View`
    flex-direction: row;
`;

export const SearchInput = styled.TextInput`
width: 100%;
height: 56px;
background-color: ${Theme.white};
margin-top: 7%;
border-radius: 100px;
padding-left: 60px;
color: ${Theme.black};
`;