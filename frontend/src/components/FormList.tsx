import React from 'react'
import type { FormDoc } from '../types/form'
import api from '../services/api'

type Props = {
  forms: FormDoc[]
  onEdit: (f: FormDoc) => void
  onRefresh: () => void
}

export default function FormList({ forms, onEdit, onRefresh }: Props) {
  async function remove(id?: string) {
    if (!id) return
    if (!confirm('Delete form?')) return
    await api.delete(`/forms/${id}`)
    onRefresh()
  }

  async function duplicate(id?: string) {
    if (!id) return
    await api.post(`/forms/${id}/duplicate`)
    onRefresh()
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        {forms.length === 0 && <p className="small">No forms yet — create one.</p>}
        {forms.map((f) => (
          <div key={f.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <div>
                <strong>{f.title}</strong>
                <div className="small">{f.status} • {f.submissionCount ?? 0} submissions</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => onEdit(f)}>Edit</button>
                <a href={`#preview/${f.id}`}><button>Preview</button></a>
                <a href={`#analytics/${f.id}`}><button>Analytics</button></a>
                <button onClick={() => duplicate(f.id)}>Duplicate</button>
                <button onClick={() => remove(f.id)}>Delete</button>
              </div>
            </div>
            <div className="small" style={{ marginTop: 8 }}>{f.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
