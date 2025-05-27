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
        .min(10, 'Phone number must be at least 8 digits')
        .max(15, 'Phone number must be at most 15 digits')
        .regex(/^\d+$/, 'Phone number must contain only digits')
})