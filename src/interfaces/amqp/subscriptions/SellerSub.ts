import { config } from "../../../config"

import addAccount from "./AddAccount"

import { Subscription } from "../../../infra/repositories/AmqpRepository"

import logger from "../../../infra/logger"

export class SellerSub implements Subscription {
    constructor() {
        this.topic = config.integration.amqp.sub.seller.topic
        this.consumer = config.integration.amqp.sub.seller.consumer
    }    

    private topic: string
    private consumer: string

    getTopic(): string {
        return this.topic
    }

    getConsumer(): string {
        return this.consumer
    }

    getHandler(): Function {
        return async (msg) => {
            try {
                const jsonData = JSON.parse(msg.content)

                logger.info(`${this.constructor.name} - message data received `, jsonData)

                const acc = await addAccount(jsonData)

                logger.info(`${this.constructor.name} - account added`, acc)
            } catch(err) {

            }
        }
    }
}
