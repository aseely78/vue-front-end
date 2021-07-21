import { wrapRequest, xapi } from './utils'
import { apiKey } from '@/config/settings'

const googleAccounts = wrapRequest(async () => xapi().get(`/Accounts/Google?apiKey=${apiKey}`))

export const apiServices = {
    googleAccounts
}