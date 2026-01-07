import { ADD_ONS, PLAN_TYPES, PLANS } from '@/constants';
import { PlanType } from '@/interfaces';
import { z } from 'zod';

export const userInfoSchema = z.object({
    name: z
        .string()
        .min(4, 'Name must be more than 4 characters')
        .max(16, 'Name must be less than 16 characters')
    ,
    email: z
        .string()
        .email('Email must be a valid email address')
    ,
    phone: z
        .string()
        .min(8, 'Phone number must be at least 8 digits')
        .max(15, 'Phone number must be at most 15 digits')
        .regex(/^\d+$/, 'Phone number must contain only digits')
})

export const finalSchema = z.object({
    userInfo: z.object({
        ...userInfoSchema.shape
    }),
    planType: z.string().refine((planType) => {
        return PLAN_TYPES.includes(planType as PlanType)
    }, {
        message: "Invalid planType"
    }),
    plan: z.string().refine(planName => {
        return PLANS.some(plan => plan.name === planName)
    }, {
        message: "Invalid plan"
    }),
    addOns: z.array(z.string()).refine(addOns => {
        if (addOns.length) {
            return addOns.every(addOn => ADD_ONS.some(avilableAddOn => avilableAddOn.name === addOn))
        }
        else {
            return true
        }
    }, {
        message: "Invalid addOns"
    })
})

export const initalFormStateSchema = z.object({
    userInfo: z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string()
    }),
    planType: z.string().refine((planType) => {
        return PLAN_TYPES.includes(planType as PlanType)
    }, {
        message: "Invalid planType"
    }),
    plan: z.string().refine(planName => {
        return PLANS.some(plan => plan.name === planName)
    }, {
        message: "Invalid plan"
    }),
    addOns: z.array(z.string()).refine(addOns => {
        if (addOns.length) {
            return addOns.every(addOn => ADD_ONS.some(avilableAddOn => avilableAddOn.name === addOn))
        }
        else {
            return true
        }
    }, {
        message: "Invalid addOns"
    })
})