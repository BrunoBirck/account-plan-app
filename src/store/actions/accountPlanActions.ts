import { IAccountPlanItem } from "../../interfaces/accountPlanInterface";

export const ADD_ACCOUNT_PLAN = "ADD_ACCOUNT_PLAN";
export const EDIT_ACCOUNT_PLAN = "EDIT_ACCOUNT_PLAN";
export const DELETE_ACCOUNT_PLAN = "DELETE_ACCOUNT_PLAN";

export const addAccountPlan = (accountPlan: IAccountPlanItem) => ({
    type: ADD_ACCOUNT_PLAN,
    payload: {
        title: accountPlan.title,
        type: accountPlan.type,
        father: accountPlan.father ? accountPlan.father : null,
        code: accountPlan.code,
        acceptReleases: accountPlan.acceptReleases
    }
});

export const editAccountPlan = (data: IAccountPlanItem[]) => ({
    type: EDIT_ACCOUNT_PLAN,
    payload: {
        data
    }
})

export const deleteAccountPlan = (data: IAccountPlanItem[]) => ({
    type: DELETE_ACCOUNT_PLAN,
    payload: {
        data
    }
})