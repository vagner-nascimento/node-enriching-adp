import { config } from "../../../config"

import logger from "../../../infra/logger"

import addAccount from "./AddAccount"

import { Subscription } from "../../../infra/repositories/AmqpRepository"

export class MerchantSub implements Subscription {
    constructor() {
        this.topic = config.integration.amqp.sub.merchant.topic
    }

    private topic: string

    getTopic(): string {
        return this.topic
    }

    getHandler(): Function {
        return async (msg) => {
            logger.info(`${this.constructor.name} - message received on topic ${this.topic}: `, msg.content.toString())

            try {
                await addAccount(msg.content)
            } catch(err) {
                logger.error(`${this.constructor.name} - error on process message`, err)
            }
        }
    }
}
