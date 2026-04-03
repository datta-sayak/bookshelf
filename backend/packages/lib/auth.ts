import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { prismaClient } from "./prisma"

export const auth = betterAuth({
    baseURL: process.env.BACKEND_URL as string,
    trustedOrigins: [process.env.BETTER_AUTH_URL as string],
    secret: process.env.BETTER_AUTH_SECRET as string,
    database: prismaAdapter(prismaClient, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    }
})