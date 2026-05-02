import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
  
    baseURL: "https://my-assignment-8.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()