import { Static, Type } from '@sinclair/typebox';

export const UrlCreateOutput = Type.Object({
  id: Type.String(),
  shortId: Type.String(),
  url: Type.String({ format: 'uri' }),
  shortUrl: Type.String({ format: 'uri' }),
});

export type UrlCreateOutput = Static<typeof UrlCreateOutput>;

export const UrlCreateResponseSchema = {
  '2xx': UrlCreateOutput,
};
