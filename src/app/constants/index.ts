import { IAddOn, ILink, ISelectedPlan } from "../interfaces";

export const LINKS: ILink[] = [
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

export const USER_INFO_FORM_INPUTS: { 
    name: string;
    type: string;
    label: string;
}[] = [
    {
        name: "name",
        type: "text",
        label: "Name"
    },
    {
        name: "email",
        type: "email",
        label: "Email Address"
    },
    {
        name: "phone",
        type: "tel",
        label: "Phone Number"
    }
]

export const PLAN_TYPES: ISelectedPlan[] = [
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
]

export const ADD_ONS: IAddOn[] = [
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
]