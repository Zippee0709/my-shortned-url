import { Static, Type } from '@sinclair/typebox';

export const UrlDeleteOutput = Type.Object({
  status: Type.Boolean(),
});

export type UrlDeleteOutput = Static<typeof UrlDeleteOutput>;

export const UrlDeleteResponseSchema = {
  '2xx': UrlDeleteOutput,
};
