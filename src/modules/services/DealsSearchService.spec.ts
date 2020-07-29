import { container } from 'tsyringe';

import Deal from '@modules/schemas/mongoose/Deal';
import DealsSearchService from '@modules/services/DealsSearchService';

import MongoMock from '@shared/tests/MongoMock';

describe('Search won deals', async () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Deal.deleteMany({});
  });

  it('should create a job inside the queue for each deal', async () => {
    const listDeals = container.resolve(DealsSearchService);

    const deal = await Deal.create({
      deal: {
        id: 1,
        creator_user_id: {
          id: 11641649,
          name: 'Marcelo Bressan',
          email: 'marcelo@ntzholding.com.br',
          has_pic: 0,
          active_flag: true,
          value: 11641649,
        },
        user_id: {
          id: 11641649,
          name: 'Marcelo Bressan',
          email: 'marcelo@ntzholding.com.br',
          has_pic: 0,
          active_flag: true,
          value: 11641649,
        },
        person_id: {
          active_flag: true,
          name: 'Marcelo Bressan',
          email: [
            {
              value: '',
              primary: true,
            },
          ],
          phone: [
            {
              value: '',
              primary: true,
            },
          ],
          value: 1,
        },
        org_id: {
          name: 'Nubo',
          people_count: 1,
          owner_id: 11641649,
          active_flag: true,
          cc_email: 'nubo@pipedrivemail.com',
          value: 1,
        },
        stage_id: 6,
        title: 'Marcelo Bressan deal',
        value: 0,
        currency: 'USD',
        add_time: '2020-07-27 17:59:26',
        update_time: '2020-07-27 21:48:41',
        stage_change_time: '2020-07-27 21:48:30',
        active: false,
        deleted: false,
        status: 'won',
        visible_to: '3',
        close_time: '2020-07-27 21:48:41',
        pipeline_id: 1,
        won_time: '2020-07-27 21:48:41',
        first_won_time: '2020-07-27 21:48:41',
        lost_time: '',
        products_count: 0,
        files_count: 0,
        notes_count: 0,
        followers_count: 1,
        email_messages_count: 0,
        activities_count: 0,
        done_activities_count: 0,
        undone_activities_count: 0,
        participants_count: 1,
        stage_order_nr: 5,
        person_name: 'Marcelo Bressan',
        org_name: 'Nubo',
        formatted_value: 'US$0',
        weighted_value: 0,
        formatted_weighted_value: 'US$0',
        weighted_value_currency: 'USD',
        owner_name: 'Marcelo Bressan',
        cc_email: 'nubo+deal1@pipedrivemail.com',
        org_hidden: false,
        person_hidden: false,
      },
    });

    await listDeals.execute();

    expect(deal).toEqual(expect.objectContaining(deal));
  });
});
