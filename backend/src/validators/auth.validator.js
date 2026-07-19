import * as z from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .required()
        .min(3, "Name must be at least 3 characters long")
        .max(50, "Name cannot exceed 50 characters"),
    username: z 
        .string()
        .trim()
        .required()
        .toLowerCase()
        .min(3, "UserName must be at least 3 characters long")
        .max(30, "UserName cannot exceed 30 characters")
        .regex(/^[a-z0-9_]+$/, "Username can only contain lowercase letters, numbers and underscores"),
    email: z
        .email({error: "Please enter a valid email address"})
        .string()
        .trim()
        .required()
        .email({ pattern: z.regexes.email })
        .toLowerCase(),

    password: z
        .string()
        .trim()
        .required()
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password cannot exceed 20 characters"),
})

export const resendVerificationEmailSchema = z.object({
    email: z
        .email({error: "Please enter a valid email address"})
        .string()
        .trim()
        .toLowerCase()
        .required()
        .email({pattern: z.regexes.email})
})