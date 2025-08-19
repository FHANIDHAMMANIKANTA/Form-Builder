import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import api from './services/api'
import type { FormDoc } from './types/form'
import FormList from './components/FormList'
import FormBuilder from './components/FormBuilder'
import PublicForm from './components/PublicForm'
import Analytics from './components/Analytics'

export default function App() {
  const [editing, setEditing] = useState<FormDoc | null>(null)
  const [route, setRoute] = useState<{ view: 'home'|'preview'|'analytics'; id?: string }>({ view: 'home' })

  // fetch forms via react query
  const formsQuery = useQuery(['forms'], async () => {
    const res = await api.get('/forms')
    return res.data as FormDoc[]
  })

  useEffect(() => {
    function onHash() {
      const hash = location.hash.replace(/^#/, '')
      if (!hash) { setRoute({ view: 'home' }); return }
      const [view, id] = hash.split('/')
      if (view === 'preview') setRoute({ view: 'preview', id })
      else if (view === 'analytics') setRoute({ view: 'analytics', id })
      else setRoute({ view: 'home' })
    }
    onHash()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  function refresh() { formsQuery.refetch() }

  return (
    <div className="container">
      <h1>Form Builder</h1>

      {route.view === 'home' && (
        <>
          <div style={{ marginBottom: 12 }}>
            <button onClick={() => setEditing({ title: 'Untitled', description: '', status: 'draft', thankYouMessage: '', fields: [] })}>
              New Form
            </button>
          </div>

          <FormList
            forms={formsQuery.data ?? []}
            onEdit={(f) => setEditing(f)}
            onRefresh={refresh}
          />

          {editing && (
            <FormBuilder
              editing={editing}
              onSaved={() => { setEditing(null); refresh() }}
              onCancel={() => setEditing(null)}
            />
          )}
        </>
      )}

      {route.view === 'preview' && route.id && (
        <>
          <a href="#" style={{ display: 'inline-block', marginBottom: 12 }}>← Back</a>
          <PublicForm id={route.id} />
        </>
      )}

      {route.view === 'analytics' && route.id && (
        <>
          <a href="#" style={{ display: 'inline-block', marginBottom: 12 }}>← Back</a>
          <Analytics id={route.id} />
        </>
      )}
    </div>
  )
}
