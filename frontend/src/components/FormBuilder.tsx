import React, { useEffect, useState } from 'react'
import type { FormDoc, Field } from '../types/form'
import api from '../services/api'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  editing?: FormDoc | null
  onSaved: () => void
  onCancel: () => void
}

function emptyField(type: Field['type']): Field {
  return { id: uuidv4(), type, label: `${type} label`, placeholder: '', required: false, options: [] }
}

export default function FormBuilder({ editing, onSaved, onCancel }: Props) {
  const [form, setForm] = useState<FormDoc>({
    title: '',
    description: '',
    status: 'draft',
    thankYouMessage: '',
    fields: []
  })

  useEffect(() => {
    if (editing) setForm(editing)
  }, [editing])

  function addField(type: Field['type']) {
    setForm((s) => ({ ...s, fields: [...s.fields, emptyField(type)] }))
  }

  function updateField(id: string, patch: Partial<Field>) {
    setForm((s) => ({ ...s, fields: s.fields.map(f => f.id === id ? { ...f, ...patch } : f) }))
  }

  function removeField(id: string) {
    setForm((s) => ({ ...s, fields: s.fields.filter(f => f.id !== id) }))
  }

  async function save() {
    if (!form.title) { alert('Provide title'); return }
    try {
      if (form.id) {
        await api.put(`/forms/${form.id}`, form)
      } else {
        await api.post('/forms', form)
      }
      onSaved()
    } catch (err: any) {
      alert(err?.message || 'Save failed')
    }
  }

  return (
    <div className="card">
      <h3>{form.id ? 'Edit Form' : 'New Form'}</h3>
      <label>Title
        <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      </label>
      <label>Description
        <input value={form.description ?? ''} onChange={e => setForm({ ...form, description: e.target.value })} />
      </label>
      <label>Status
        <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value as any })}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </label>
      <label>Thank-you message
        <input value={form.thankYouMessage ?? ''} onChange={e => setForm({ ...form, thankYouMessage: e.target.value })} />
      </label>

      <div style={{ marginTop: 8 }}>
        <strong>Fields</strong>
        <div style={{ display: 'flex', gap: 8, margin: '8px 0' }}>
          <button onClick={() => addField('text')}>Text</button>
          <button onClick={() => addField('email')}>Email</button>
          <button onClick={() => addField('textarea')}>Textarea</button>
          <button onClick={() => addField('select')}>Select</button>
          <button onClick={() => addField('radio')}>Radio</button>
          <button onClick={() => addField('checkbox')}>Checkbox</button>
          <button onClick={() => addField('file')}>File</button>
        </div>
        {form.fields.map((f) => (
          <div key={f.id} style={{ border: '1px dashed #ccc', padding: 8, marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <b>{f.type}</b>
                <div className="small">{f.id}</div>
              </div>
              <div>
                <button onClick={() => removeField(f.id)}>Remove</button>
              </div>
            </div>
            <label>Label
              <input value={f.label} onChange={e => updateField(f.id, { label: e.target.value })} />
            </label>
            <label>Placeholder
              <input value={f.placeholder ?? ''} onChange={e => updateField(f.id, { placeholder: e.target.value })} />
            </label>
            <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input type="checkbox" checked={!!f.required} onChange={e => updateField(f.id, { required: e.target.checked })} />
              Required
            </label>
            {(f.type === 'select' || f.type === 'radio' || f.type === 'checkbox') && (
              <label>Options (comma separated)
                <input value={(f.options || []).join(',')} onChange={e => updateField(f.id, { options: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} />
              </label>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={save}>Save</button>
        <button onClick={onCancel}>Close</button>
        {form.id && <a href={`#preview/${form.id}`}><button>Open Preview</button></a>}
      </div>
    </div>
  )
}
