import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

export async function proxy(request) {
let session = null

try {
  session = await auth.api.getSession({
    headers: request.headers,
  })
} catch (error) {
  console.error("Failed to read auth session in proxy", error)
}

if (!session) {
  const redirectURL = new URL('/signin', request.url)
  redirectURL.searchParams.set('callbackURL', request.nextUrl.pathname)
  return NextResponse.redirect(redirectURL)
}

return NextResponse.next()
}

export const config = {
  matcher: ['/profile', '/update-profile', '/all-books/:id'],
}
