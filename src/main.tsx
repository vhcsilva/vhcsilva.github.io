import React from 'react'
import ReactDOM from 'react-dom/client'
import posthog from 'posthog-js'

import App from './App.tsx'
import { LocaleProvider } from '@/i18n/LocaleProvider'
import './index.css'

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30'
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>
)
