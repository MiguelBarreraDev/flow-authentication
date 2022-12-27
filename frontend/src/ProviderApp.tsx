import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { useInterceptor, useRecoveryUser } from './hooks'

export interface ProviderAppInterface {
  renderApp: JSX.Element
}

export const ProviderApp: React.FC<ProviderAppInterface> = ({ renderApp }) => {
  const { loading } = useRecoveryUser()

  useInterceptor()

  return (
    <>
      {!loading && (
        <BrowserRouter>
          <ChakraProvider>{renderApp}</ChakraProvider>
        </BrowserRouter>
      )}
    </>
  )
}
