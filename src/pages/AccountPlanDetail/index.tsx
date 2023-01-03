import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputSelect from '../../components/InputSelect/InputSelect';
import InputText from '../../components/InputText/InputText';
import { ModalComponent } from '../../components/Modal/Modal';
import { TopNavigation } from '../../components/TopNavigation/TopNavigation';
import { AcceptReleasesAccountPlan, IAccountPlanItem, TypeAccountPlan } from '../../interfaces/accountPlanInterface';
import { addAccountPlan, editAccountPlan } from '../../store/actions/accountPlanActions';
import { formatNumberVersion } from '../../utils/formatNumberVersion';
import { sortList } from '../../utils/orderList';
import * as S from './styles';

const AccountPlanDetail: React.FC = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const accountPlansList = useSelector(state => state.accountPlans.accountPlans);
    const types = ['Receitas', 'Despesas'];
    const optionsForAcceptReleases = ['Sim', 'Não'];
    const accountPlanForEdit: IAccountPlanItem = route && route.params ? route.params.item : null;
    const isEdition = accountPlanForEdit !== null;
    const listCodesFiltered = accountPlansList.map((accountPlanForEdit: IAccountPlanItem) => accountPlanForEdit.code);
    const father = accountPlanForEdit && accountPlanForEdit.father && accountPlanForEdit.father.code ? `${accountPlanForEdit.father.code} - ${accountPlanForEdit.father.title}` : undefined;
    const [selectedItem, setSelectedItem] = useState<string | undefined>(father);
    const [selectedType, setSelectedType] = useState<string | undefined>(accountPlanForEdit && accountPlanForEdit.type ? (accountPlanForEdit.type === 'INCOME' ? 'Receitas' : 'Despesas') : undefined);
    const [acceptReleases, setAcceptReleases] = useState<string | undefined>(accountPlanForEdit && accountPlanForEdit.acceptReleases || undefined);
    const [accountPlanName, setAccountPlanName] = useState(accountPlanForEdit && accountPlanForEdit.title || '');
    const [accountPlanCode, setAccountPlanCode] = useState(accountPlanForEdit && accountPlanForEdit.code || undefined);
    const [showModalError, setShowModalError] = useState(false);

    const codeExists = listCodesFiltered.includes(accountPlanCode) && !isEdition;

    const onSelect = (item: any) => {
        setSelectedType(item.type === 'INCOME' ? 'Receitas' : 'Despesas')
        let listFilteredByFatherCode = accountPlansList.filter((accountPlan: IAccountPlanItem) => accountPlan.father && accountPlan.father.code === item.code);
        if (listFilteredByFatherCode.length > 0) {
            let listFilteredOrderAsc = sortList(listFilteredByFatherCode, 'asc');
            let lastIndexOfListFilteredOrderAsc = listFilteredOrderAsc[listFilteredOrderAsc.length - 1];
            let versionsFormatted = formatNumberVersion(lastIndexOfListFilteredOrderAsc);
            if (versionsFormatted.codeFormatted && versionsFormatted.fatherCode) {
                setSelectedItem(`${versionsFormatted.fatherCode} - ${item.title}`)
                setAccountPlanCode(versionsFormatted.codeFormatted)
            } else {
                listFilteredByFatherCode = accountPlansList.filter((accountPlan: IAccountPlanItem) => accountPlan.father && accountPlan.father.code === versionsFormatted.fatherCode);
                listFilteredOrderAsc = sortList(listFilteredByFatherCode, 'asc');
                lastIndexOfListFilteredOrderAsc = listFilteredOrderAsc[listFilteredOrderAsc.length - 1];
                versionsFormatted = formatNumberVersion(lastIndexOfListFilteredOrderAsc);
                setSelectedItem(`${versionsFormatted?.fatherCode} - ${lastIndexOfListFilteredOrderAsc.father.title}`)
                setAccountPlanCode(versionsFormatted?.codeFormatted)
            }
        } else {
            setSelectedItem(`${item.code} - ${item.title}`)
            setAccountPlanCode(`${item.code}.1`)
        }
    }

    const onSelectType = (item: string) => {
        setSelectedType(item)
    }

    const onSelectAcceptReleases = (item: string) => {
        setAcceptReleases(item)
    }

    const handleAddAccountPlan = () => {
        if (selectedType && acceptReleases && accountPlanCode && accountPlanName && !codeExists) {
            const fatherItems = selectedItem?.split(' - ');
            if (isEdition) {
                let listFiltered = accountPlansList.filter((item: IAccountPlanItem) => item.code !== accountPlanCode);
                const newAccountEdited = {
                    father: fatherItems && fatherItems.length > 0 && { code: fatherItems[0], title: fatherItems[1] } || null,
                    type: selectedType === 'Receitas' ? TypeAccountPlan.Income : TypeAccountPlan.Cost,
                    title: accountPlanName,
                    code: accountPlanCode,
                    acceptReleases
                };
                listFiltered.push(newAccountEdited)
                dispatch(editAccountPlan(listFiltered));
            } else {
                const newAccount = {
                    father: fatherItems && fatherItems.length > 0 && { code: fatherItems[0], title: fatherItems[1] } || null,
                    type: selectedType === 'Receitas' ? TypeAccountPlan.Income : TypeAccountPlan.Cost,
                    title: accountPlanName,
                    code: accountPlanCode,
                    acceptReleases: acceptReleases === 'Sim' ? AcceptReleasesAccountPlan.Yes : AcceptReleasesAccountPlan.No
                };
                dispatch(addAccountPlan(newAccount));
            }
            navigation.goBack();
        } else {
            setShowModalError(true)
        }
    }

    return (
        <S.Container>
            <TopNavigation
                small
                back
                onBack={() => navigation.goBack()}
                onPress={handleAddAccountPlan}
                title={isEdition ? 'Editar Conta' : 'Inserir Conta'}
            />
            <S.ContainerBody>
                <InputSelect
                    data={sortList(accountPlansList, 'asc')}
                    title='Conta Pai'
                    type='ACCOUNT-TYPE'
                    value={selectedItem}
                    onSelect={onSelect}
                />
                <InputText
                    value={accountPlanCode}
                    setValue={setAccountPlanCode}
                    title='Código'
                    codeExists={codeExists}
                    keyboardType='numeric'
                />
                <InputText
                    value={accountPlanName}
                    setValue={setAccountPlanName}
                    title='Nome'
                />
                <InputSelect
                    data={types}
                    title='Tipo'
                    type='TYPE'
                    value={selectedType}
                    onSelect={onSelectType}
                    disable={selectedItem !== undefined}
                />
                <InputSelect
                    data={optionsForAcceptReleases}
                    title='Aceita lançamentos'
                    type='Y/N'
                    value={acceptReleases}
                    onSelect={onSelectAcceptReleases}
                />
            </S.ContainerBody>
            <ModalComponent
                type='ERROR'
                visible={showModalError}
                onRequestClose={() => setShowModalError(!showModalError)}
            />
        </S.Container>
    )
}

export default AccountPlanDetail;