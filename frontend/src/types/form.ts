export type FieldType = 'text' | 'email' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'file'

export type Field = {
  id: string
  type: FieldType
  label: string
  placeholder?: string
  required?: boolean
  options?: string[]
  validation?: { pattern?: string; minLength?: number; maxLength?: number }
}

export type FormDoc = {
  id?: string
  title: string
  description?: string
  status?: 'draft' | 'published'
  thankYouMessage?: string
  fields: Field[]
  submissionCount?: number
  createdAt?: string
  updatedAt?: string
}
