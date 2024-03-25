import { createBrowserRouter } from 'react-router-dom'

import { Navbar } from './components/navbar'
import { ListCard } from './pages/ListCard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="h-screen">
        <Navbar />
        <ListCard />
      </div>
    ),
  },
])
