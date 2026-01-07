import { NavLink, PlanType, UserInfoFieldsNames } from "@/interfaces";
import { InputHTMLAttributes } from "react";

export const LINKS: NavLink[] = [
    {
        name: "your info",
        pathname: "/your-info",
        order: 1
    },
    {
        name: "select plan",
        pathname: "/select-plan",
        order: 2
    },
    {
        name: "add-ons",
        pathname: "/add-ons",
        order: 3
    },
    {
        name: "summary",
        pathname: "/summary",
        order: 4
    }
]

export const USER_INFO_FORM_FIELDS: {
    name: UserInfoFieldsNames,
    label: string,
    type: InputHTMLAttributes<HTMLInputElement>["type"],
    autoFocus: boolean
}[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        autoFocus: true
    },
    {
        name: "email",
        label: "Email Address",
        type: "email",
        autoFocus: false
    },
    {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        autoFocus: false
    }
]

export const PLANS = [
    {
        name: "Arcade",
        icon: "/images/icon-arcade.svg",
        price: {
            monthly: 9,
            yearly: 90
        },
        yearlyOffer: "2 months free"
    },
    {
        name: "Advanced",
        icon: "/images/icon-advanced.svg",
        price: {
            monthly: 12,
            yearly: 120
        },
        yearlyOffer: "2 months free"
    },
    {
        name: "Pro",
        icon: "/images/icon-pro.svg",
        price: {
            monthly: 15,
            yearly: 150
        },
        yearlyOffer: "2 months free"
    }
] as const

export const PLAN_TYPES: PlanType[] = ["monthly", "yearly"]

export const ADD_ONS = [
    {
        name: "Online service",
        description: "Access to multiplayer games",
        price: {
            monthly: 1,
            yearly: 10
        }
    },
    {
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: {
            monthly: 2,
            yearly: 20
        }
    },
    {
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: {
            monthly: 2,
            yearly: 20
        }
    }
] as const

export const DEFAULT_PLAN_TYPE: PlanType = PLAN_TYPES[0]

export const DEFAULT_PLAN = PLANS[0]