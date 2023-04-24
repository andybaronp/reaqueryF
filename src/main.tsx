import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router'
import { RouterProvider } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
//! Remover enable css source maps
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const cliente = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={cliente}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
