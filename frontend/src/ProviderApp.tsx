import { ChakraProvider, extendTheme, useDisclosure } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { useInterceptor, useRecoveryUser } from './hooks'

export interface ProviderAppInterface {
  renderApp: JSX.Element
}

export const ProviderApp: React.FC<ProviderAppInterface> = ({ renderApp }) => {
  const { isOpen, onClose, onToggle, onOpen } = useDisclosure()
  const { loading } = useRecoveryUser()

  const theme = extendTheme({
    sidebar: {
      isOpen,
      onClose,
      onOpen,
      onToggle
    }
  })

  useInterceptor()

  return (
    <>
      {!loading && (
        <BrowserRouter>
          <ChakraProvider theme={theme}>{renderApp}</ChakraProvider>
        </BrowserRouter>
      )}
    </>
  )
}
