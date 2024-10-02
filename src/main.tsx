import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "./globals.css"

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}