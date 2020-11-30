import { useEffect } from 'react'
import { useDetectEnv } from './hooks'

export default function Container({ children }: { children: React.ReactNode }) {
  const env = useDetectEnv()
  useEffect(() => {
    const className = `is-${env}`
    document.documentElement.classList.add(className)
    return () => {
      document.documentElement.classList.remove(className)
    }
  }, [env])

  return (
    <main className="grid place-items-center min-h-screen bg-white">
      {children}
    </main>
  )
}