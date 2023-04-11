import { Static, Type } from '@sinclair/typebox';

export const UrlUpdateInput = Type.Object({
  shortId: Type.String(),
});

export type UrlUpdateInput = Static<typeof UrlUpdateInput>;

export const UrlUpdateParamsSchema = {
  type: 'object',
  required: ['shortId'],
  properties: UrlUpdateInput.properties,
};
