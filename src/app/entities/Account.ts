import Merchant from './Merchant';
import AccountType from "./AccountType"
import Seller from './Seller';

export default class Account {
    constructor(id: string, name: string, type: string, merchantId: string = null) {
        this.id = id
        this.name = name
        this.type = type
        this.merchant_id = merchantId
    }

    public type: string
    public id: string
    public name: string
    public merchant_id: string
}

export function makeAccountFromMerchant(merchant: Merchant): Account {
    return new Account(merchant.merhcant_id, merchant.name, AccountType.MERCHANT)
}

export function makeAccountFromSeller(seller: Seller): Account {
    return new Account(seller.seller_id, seller.name, AccountType.SELLER, seller.merchant_id)
}