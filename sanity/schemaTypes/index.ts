import { type SchemaTypeDefinition } from 'sanity'
import { equipmentCategoryType } from './equipmentCategory'
import { equipmentType } from './equipment'
import { siteSettingsType } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [equipmentCategoryType, equipmentType, siteSettingsType],
}
