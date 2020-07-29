import 'dotenv';
import request from 'request-promise';

import Deals from '@modules/schemas/dtos/Deals';

import Service from '@shared/core/Service';

interface Request {
  search: string;
}

type Response = Deals[];

class DealsSearchService implements Service<Request, Response> {
  async execute(): Promise<Response> {
    const requestOptions = {
      uri: `${process.env.PIPEDRIVE_URL}/deals`,
      qs: { status: 'won', start: 0, api_token: process.env.PIPEDRIVE_KEY },
      json: true,
    };
    const deals = await request(requestOptions);

    return deals;
  }
}

export default DealsSearchService;
