export interface ILink {
    name: string;
    pathname: string;
    order: number;
}

export interface FormErrors {
    [key: string]: string;
}

export type TUserInfo = {
    name: string;
    email: string;
    phone: string;
}

export interface ISelectedPlan {
    name: string;
    icon: string;
    price: {
        monthly: number;
        yearly: number;
    };
    yearlyOffer: string;
}

export interface IFormDetails {
    userInfo: TUserInfo,
    planType: 'monthly' | 'yearly',
    selectedPlan: ISelectedPlan,
    addOns: {
        name: string;
        price: number;
    }[]
}