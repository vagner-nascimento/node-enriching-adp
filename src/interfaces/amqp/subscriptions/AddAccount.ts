import { getAccountAdapter } from "../../../provider/Provider"

import Account from "../../../app/entities/Account"

export default async function(data: any): Promise<Account> {
    const accAdp = getAccountAdapter()

    return await accAdp.addAccount(data)
}
