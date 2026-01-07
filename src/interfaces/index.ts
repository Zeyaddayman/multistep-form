import { ADD_ONS, PLANS } from "@/constants"

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

export type PlanType = 'monthly' | 'yearly'

export type Plan = typeof PLANS[number]

export type AddOn = typeof ADD_ONS[number]

export type PlanName = Plan["name"]

export type AddOnName = AddOn["name"]

export interface Form {
    userInfo: UserInfo
    planType: PlanType
    plan: PlanName
    addOns: AddOnName[]
}