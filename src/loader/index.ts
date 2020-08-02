import { loadEnvironment } from '../../config/ConfigLoader'
const conf = loadEnvironment()

import logger from '../infra/logging/Logger'

import { start as startHttpServer } from '../interfaces/http/Server';

import { subscribeConsumers } from '../interfaces/amqp'

export default async (): Promise<void> => {
    logger.info('**CONFIGS**', conf);
    
    // TODO: load amqp interface
    await subscribeConsumers();
    await startHttpServer();
}
