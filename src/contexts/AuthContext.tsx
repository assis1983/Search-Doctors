import { createContext, useEffect, useState } from 'react'
import { Title } from '../components/Title/style'
import { api } from '../services/Api/apiservice'

type Context = {
  authentified: boolean
  loading: boolean
}

export const AuthContext = createContext<Context>({
  authentified: false,
  loading: true
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [authentified, setAuthentified] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const conversion = JSON.parse(token)
      api.defaults.headers.common.Authorization = `${conversion.type} ${conversion.token}`

      setAuthentified(true)
    } else {
      setAuthentified(false)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <Title fontSize={32}>Carregando...</Title>
  }

  return (
    <AuthContext.Provider value={{ authentified, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
