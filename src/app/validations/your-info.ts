import { z } from 'zod';

export const yourInfoSchema = z.object({
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
        .regex(/^\d+$/, 'Phone number must contain only digits')
})