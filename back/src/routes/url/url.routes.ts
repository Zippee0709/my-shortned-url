import fp from 'fastify-plugin';
import UrlController from './url.controller';
import { UrlCreateInput, UrlCreateBodySchema } from './dtos/inputs/url.create.input';
import { UrlCreateOutput, UrlCreateResponseSchema } from './dtos/outputs/url.create.output';
import { UrlGetInput, UrlGetParamsSchema } from './dtos/inputs/url.get.input';
import { UrlGetOutput, UrlGetResponseSchema } from './dtos/outputs/url.get.output';
import { UrlUpdateInput, UrlUpdateParamsSchema } from './dtos/inputs/url.update.input';
import { UrlUpdateOutput, UrlUpdateResponseSchema } from './dtos/outputs/url.update.output';
import { UrlDeleteInput, UrlDeleteBodySchema } from './dtos/inputs/url.delete.input';
import { UrlDeleteOutput, UrlDeleteResponseSchema } from './dtos/outputs/url.delete.output';

export default fp(async server => {
  server.post<{ Body: UrlCreateInput; Reply: UrlCreateOutput }>(
    '/url',
    {
      schema: {
        body: UrlCreateBodySchema,
        response: UrlCreateResponseSchema,
      },
    },
    new UrlController(server).create,
  );

  server.get<{ Params: UrlGetInput; Reply: UrlGetOutput }>(
    '/url/:shortId',
    {
      schema: {
        params: UrlGetParamsSchema,
        response: UrlGetResponseSchema,
      },
    },
    new UrlController(server).get,
  )

  server.put<{ Params: UrlUpdateInput; Reply: UrlUpdateOutput }>(
    '/url/:shortId',
    {
      schema: {
        params: UrlUpdateParamsSchema,
        response: UrlUpdateResponseSchema,
      },
    },
    new UrlController(server).update,
  )
  
  server.delete<{ Body: UrlDeleteInput; Reply: UrlDeleteOutput }>(
    '/url',
    {
      schema: {
        body: UrlDeleteBodySchema,
        response: UrlDeleteResponseSchema,
      },
    },
    new UrlController(server).delete,
  )
});