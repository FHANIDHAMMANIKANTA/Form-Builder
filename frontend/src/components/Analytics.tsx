import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Analytics({ id }: { id: string }) {
  const [data, setData] = useState<{ total: number; byDay: { date: string; count: number }[] } | null>(null)

  useEffect(() => {
    api.get(`/forms/${id}/analytics`).then(r => setData(r.data)).catch(()=>setData(null))
  }, [id])

  if (!data) return <div className="card"><p>Loading analytics...</p></div>

  return (
    <div className="card">
      <h3>Analytics</h3>
      <div>Total submissions: <strong>{data.total}</strong></div>
      <h4>By day</h4>
      <ul>
        {data.byDay.map(d => <li key={d.date}>{d.date}: {d.count}</li>)}
      </ul>
      <div style={{ marginTop: 8 }}>
        <a href={`${api.defaults.baseURL?.replace('/api','') || ''}/forms/${id}/submissions`} target="_blank">Export submissions (JSON)</a>
      </div>
    </div>
  )
}
