import type { SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { project } from './project'
import { photo } from './photo'
import { shelfItem } from './shelfItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project, photo, shelfItem],
}
