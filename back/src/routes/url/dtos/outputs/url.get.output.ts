import { Static, Type } from '@sinclair/typebox';

export const UrlGetOutput = Type.Object({
  id: Type.String(),
  shortId: Type.String(),
  url: Type.String({ format: 'uri' }),
  shortUrl: Type.String({ format: 'uri' }),
  numberOfVisits: Type.Number(),
});

export type UrlGetOutput = Static<typeof UrlGetOutput>;

export const UrlGetResponseSchema = {
  '2xx': UrlGetOutput,
};
