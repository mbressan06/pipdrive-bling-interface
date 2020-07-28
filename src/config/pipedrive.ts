type PipedriveConfig = object;

export default {
  host: process.env.PIPEDRIVE_URL,
  key: process.env.PIPEDRIVE_KEY,
} as PipedriveConfig;
