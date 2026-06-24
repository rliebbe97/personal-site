import type { SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { project } from './project'
import { photo } from './photo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project, photo],
}
