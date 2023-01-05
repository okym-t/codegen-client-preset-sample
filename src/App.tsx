import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Films } from './components/Films'

const queryClient = new QueryClient()

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Films />
    </QueryClientProvider>
  )
}

export default App
