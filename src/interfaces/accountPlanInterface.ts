export enum TypeAccountPlan {
    Income = 'INCOME',
    Cost = 'COST'
}

export enum AcceptReleasesAccountPlan {
    Yes = 'Sim',
    No = 'Não'
}

export interface IFatherAccountPlanItem {
    code: string;
    title: string;
}

export interface IAccountPlanItem {
    title: string;
    type: TypeAccountPlan;
    code: string;
    acceptReleases: AcceptReleasesAccountPlan;
    father?: IFatherAccountPlanItem | null;
}