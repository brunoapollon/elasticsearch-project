import { Client } from 'elasticsearch';

const clientElasticSearch = new Client({
  host: 'localhost:9200',
  log: 'trace',
});

export { clientElasticSearch };
