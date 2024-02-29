'use client'
import { useRouter } from 'next/navigation'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }) {
  const router = useRouter()
  return (
    <NextUIProvider navigate={router.push}>
      {children}
    </NextUIProvider>
  )
}