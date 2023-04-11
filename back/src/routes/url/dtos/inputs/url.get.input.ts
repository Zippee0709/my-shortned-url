import { Static, Type } from '@sinclair/typebox';

export const UrlGetInput = Type.Object({
  shortId: Type.String(),
});

export type UrlGetInput = Static<typeof UrlGetInput>;

export const UrlGetParamsSchema = {
  type: 'object',
  required: ['shortId'],
  properties: UrlGetInput.properties,
};
