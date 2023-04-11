import { Static, Type } from '@sinclair/typebox';

export const UrlCreateInput = Type.Object({
  url: Type.String({ format: 'uri' }),
  password: Type.String(),
});

export type UrlCreateInput = Static<typeof UrlCreateInput>;

export const UrlCreateBodySchema = {
  type: 'object',
  required: ['url', 'password'],
  properties: UrlCreateInput.properties,
};
