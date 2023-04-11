import { FastifyInstance } from 'fastify';
import prisma from '../../prisma';
import shortid from 'shortid';

export default class UrlService {
  constructor(readonly server: FastifyInstance) {}

  create = async (url: string, password: string) => {
    const shortId = shortid.generate();
    try {
      const result = await prisma.url.create({
        data: {
          shortId: shortId,
          url: url,
          shortUrl: `https://my-shortened-url.com/${shortId}`,
          password: password,
        },
      });
      return result;
    } catch (error) {
      throw new Error('Error: Url not created');
    }
  };

  get = async (shortId: string) => {
    try {
      const result = await prisma.url.findUnique({
        where: {
          shortId: shortId,
        },
      });
      if (!result) {
        throw new Error('Error: Url not found');
      }
      return result;
    } catch (error) {
      throw new Error('Error: Url not found');
    }
  };

  update = async (shortId: string) => {
    try {
      const result = await prisma.url.update({
        where: {
          shortId: shortId,
        },
        data: {
          numberOfVisits: {
            increment: 1,
          },
        },
      });
      if (!result) {
        throw new Error('Error: Url not found');
      }
      return result;
    } catch (error) {
      throw new Error('Error: Url cannot be updated');
    }
  };

  delete = async (shortId: string) => {
    try {
      await prisma.url.delete({
        where: {
          shortId: shortId,
        },
      });
      return { status: true };
    } catch (error) {
      throw new Error('Error: Url cannot be deleted');
    }
  }
}
