import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountPlanCard from '../../components/AccountPlanCard/AccountPlanCard';
import { ModalComponent } from '../../components/Modal/Modal';
import { TopNavigation } from '../../components/TopNavigation/TopNavigation';
import { IAccountPlanItem } from '../../interfaces/accountPlanInterface';
import { deleteAccountPlan } from '../../store/actions/accountPlanActions';
import { Theme } from '../../theme/theme';
import { sortList } from '../../utils/orderList';
import * as S from './styles';

const Home: React.FC = () => {
    const navigation = useNavigation();
    const accountPlanList = useSelector(state => state.accountPlans.accountPlans);
    const dispatch = useDispatch();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [accountPlanSelected, setAccountPlanSelected] = useState<IAccountPlanItem | null>(null);
    const [searchText, setSearchText] = useState('');
    const [listFiltered, setListFiltered] = useState(accountPlanList);

    const handleDelete = (item: IAccountPlanItem) => {
        setAccountPlanSelected(item);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        let listFiltered = accountPlanList.filter((item: IAccountPlanItem) => item.code !== (accountPlanSelected && accountPlanSelected.code));
        dispatch(deleteAccountPlan(listFiltered));
        setShowDeleteModal(false);
    }

    useEffect(() => {
        const accountPlanListOrdered = sortList(accountPlanList, 'asc');
        if (searchText === '') {
            setListFiltered(accountPlanListOrdered);
        } else {
            setListFiltered(
                accountPlanListOrdered.filter(
                    (item: IAccountPlanItem) =>
                        item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            )
        }
    }, [searchText, accountPlanList]);

    return (
        <S.Container>
            <TopNavigation
                onPress={() => navigation.navigate('AccountPlanDetail')}
                title='Plano de Contas'
                value={searchText}
                onChange={(text) => setSearchText(text)}
            />
            <S.ContainerBody showsVerticalScrollIndicator={false}>
                <S.TopArea>
                    <S.Title>Listagem</S.Title>
                    {listFiltered && listFiltered.length > 0 ?
                        <S.Description>{listFiltered.length > 1 ? `${listFiltered.length} registros` : `${listFiltered.length} registro`} </S.Description>
                        :
                        <S.Description>Nenhum registro</S.Description>}
                </S.TopArea>
                <S.Flatlist
                    data={listFiltered}
                    contentContainerStyle={{ paddingBottom: 50 }}
                    keyExtractor={(item: IAccountPlanItem) => String(item.code)}
                    renderItem={({ item }) =>
                        <AccountPlanCard
                            key={String(item.code)}
                            title={item.title}
                            type={item.type}
                            code={item.code}
                            onPress={() => navigation.navigate('AccountPlanDetail', { item })}
                            onDelete={() => handleDelete(item)}
                        />
                    }
                />
            </S.ContainerBody>
            <ModalComponent
                visible={showDeleteModal}
                onRequestClose={() => setShowDeleteModal(false)}
            >
                <Feather name="trash" size={60} color={Theme.red} />
                <S.ModalTextArea>
                    <S.ModalText>Deseja excluir a conta</S.ModalText>
                    <S.ModalText bold>
                        {accountPlanSelected &&
                            accountPlanSelected.title &&
                            accountPlanSelected.code &&
                            `${accountPlanSelected.code} - ${accountPlanSelected.title}`
                        }?
                    </S.ModalText>
                </S.ModalTextArea>
                <S.ModalButtonArea>
                    <S.ModalButton activeOpacity={0.7} transparent onPress={() => setShowDeleteModal(false)}>
                        <S.ModalButtonText transparent>Não</S.ModalButtonText>
                    </S.ModalButton>
                    <S.ModalButton onPress={handleConfirmDelete} activeOpacity={0.7}>
                        <S.ModalButtonText>Com certeza</S.ModalButtonText>
                    </S.ModalButton>
                </S.ModalButtonArea>
            </ModalComponent>
        </S.Container>
    )
}

export default Home;
