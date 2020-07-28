import { QueueOptions } from 'bull';

interface BlingConfig {
  driver: 'bling';

  queue: QueueOptions;

  config: {
    bling: object;
  };
}

export default {
  driver: 'bling',

  queue: {
    defaultJobOptions: {
      removeOnComplete: true,
      attempts: 5,
      backoff: {
        type: 'exponential',
        delay: 5000,
      },
    },
    limiter: {
      max: 150,
      duration: 1000,
    },
  },

  config: {
    bling: {},
  },
} as BlingConfig;
