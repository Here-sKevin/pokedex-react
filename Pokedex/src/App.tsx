import { RouterProvider } from 'react-router'
import { router } from './shared/Router'
import { Suspense } from 'react'
import { PokemonProvider } from './shared/context/PokemonContext'
import PokeballSpinner from './components/Spinner/Spinner'
import { UserProvider } from './shared/context/UserContext'

function App() {

  return (
    <Suspense fallback={<PokeballSpinner />}>
      <UserProvider>
        <PokemonProvider>
          <RouterProvider router={router} />
        </PokemonProvider>
      </UserProvider>
    </Suspense>
  )
}

export default App
