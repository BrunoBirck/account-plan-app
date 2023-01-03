import { IAccountPlanItem } from "../../interfaces/accountPlanInterface";
import { ADD_ACCOUNT_PLAN, DELETE_ACCOUNT_PLAN, EDIT_ACCOUNT_PLAN } from "../actions/accountPlanActions";

interface InitialStateProps {
    accountPlans: IAccountPlanItem[];
}

const initialState = {
    accountPlans: [],
} as InitialStateProps;

const accountPlansReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT_PLAN: {
            const { title, type, code, acceptReleases, father } = action.payload
            return {
                ...state,
                accountPlans: [...state.accountPlans, { title, type, father, code, acceptReleases }]
            };
        }
        case EDIT_ACCOUNT_PLAN: {
            const newListEditted = action.payload.data;
            return {
                ...state,
                accountPlans: newListEditted
            }
        }
        case DELETE_ACCOUNT_PLAN: {
            const newListFiltered = action.payload.data;
            return {
                ...state,
                accountPlans: newListFiltered
            }
        }
        default:
            return state;
    }
}

export default accountPlansReducer;