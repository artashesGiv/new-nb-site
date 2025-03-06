export type JSONSchemaType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'array'
  | 'object'

export type JSONSchemaFormat = 'email' | 'date' | 'url' | 'password'

export interface JSONSchemaValidation {
  dependsOn?: string
  ruleType?: 'equals' | 'notEquals'
  message?: string
}

export interface JSONSchemaProperty {
  type: JSONSchemaType
  label: string
  description?: string
  placeholder?: string
  format?: JSONSchemaFormat
  minLength?: number
  maxLength?: number
  options?: string[] // Для select, radio
  validation?: JSONSchemaValidation
  customValidation?: (value: any, formData: Record<string, any>) => boolean
  customValidationMessage?: string
}

export interface JSONSchema {
  title: string
  description?: string
  type: 'object'
  properties: Record<string, JSONSchemaProperty>
  required?: string[]
}
