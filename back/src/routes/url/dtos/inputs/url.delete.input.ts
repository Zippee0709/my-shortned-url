import { Static, Type } from '@sinclair/typebox';

export const UrlDeleteInput = Type.Object({
  shortId: Type.String(),
  password: Type.String(),
});

export type UrlDeleteInput = Static<typeof UrlDeleteInput>;

export const UrlDeleteBodySchema = {
  type: 'object',
  required: ['shortId', 'password'],
  properties: UrlDeleteInput.properties,
};
