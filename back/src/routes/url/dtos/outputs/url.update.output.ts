import { Static, Type } from '@sinclair/typebox';

export const UrlUpdateOutput = Type.Object({
  id: Type.String(),
  shortId: Type.String(),
  url: Type.String({ format: 'uri' }),
  shortUrl: Type.String({ format: 'uri' }),
  numberOfVisits: Type.Number(),
});

export type UrlUpdateOutput = Static<typeof UrlUpdateOutput>;

export const UrlUpdateResponseSchema = {
  '2xx': UrlUpdateOutput,
};
