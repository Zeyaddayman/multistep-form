export interface NavLink {
    name: string
    pathname: string
    order: number
}

export interface FormErrors {
    [key: string]: string
}

export interface UserInfo {
    name: string
    email: string
    phone: string
}

export type UserInfoFieldsNames = keyof UserInfo

export interface Plan {
    name: string
    icon: string
    price: {
        monthly: number
        yearly: number
    }
    yearlyOffer: string
}

export type PlanType = 'monthly' | 'yearly'

export interface AddOn {
    name: string
    description: string
    price: {
        monthly: number
        yearly: number
    }
}

export interface FormDetails {
    userInfo: UserInfo
    selectedPlan: Plan
    planType: PlanType
    addOns: AddOn[]
}