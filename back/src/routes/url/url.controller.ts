import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import bcrypt from 'bcrypt';

import UrlService from './url.service';

import { UrlCreateInput } from './dtos/inputs/url.create.input';
import { UrlGetInput } from './dtos/inputs/url.get.input';
import { UrlUpdateInput } from './dtos/inputs/url.update.input';
import { UrlDeleteInput } from './dtos/inputs/url.delete.input';

export default class UrlController {
  urlService: UrlService;

  constructor(readonly server: FastifyInstance) {
    this.urlService = new UrlService(server);
  }

  create = async (request: FastifyRequest<{ Body: UrlCreateInput }>, reply: FastifyReply) => {
    const input = request.body;
    input.password = await bcrypt.hash(input.password, 10);
    const result = await this.urlService.create(input.url, input.password);
    console.log('result : ', result);
    return reply.status(201).send(result);
  };

  get = async (request: FastifyRequest<{ Params: UrlGetInput }>, reply: FastifyReply) => {
    const { shortId } = request.params;
    const result = await this.urlService.get(shortId);
    return reply.status(200).send(result);
  };

  update = async (request: FastifyRequest<{ Params: UrlUpdateInput }>, reply: FastifyReply) => {
    const { shortId } = request.params;
    const result = await this.urlService.update(shortId);
    return reply.status(200).send(result);
  };

  delete = async (request: FastifyRequest<{ Body: UrlDeleteInput }>, reply: FastifyReply) => {
    const { shortId, password } = request.body;

    const url = await this.urlService.get(shortId);

    if (!(await bcrypt.compare(password, url.password))) {
      return reply.status(401).send({ message: 'Unauthorized' });
    }

    const result = await this.urlService.delete(shortId);
    return reply.status(200).send(result);
  }
}
