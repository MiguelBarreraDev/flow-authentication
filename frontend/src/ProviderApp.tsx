import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { useRecoveryUser } from './hooks'

export interface ProviderAppInterface {
  renderApp: JSX.Element | JSX.Element[]
}

export const ProviderApp: React.FC<ProviderAppInterface> = ({ renderApp }) => {
  const { loading } = useRecoveryUser()

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
