import type { Address } from 'viem'
import { goerli, mainnet } from 'viem/chains'

interface ContractAddresses {
  [key: number]: Address | ''
}

export const FACTORY_CONTRACT: ContractAddresses = {
  [mainnet.id]: '',
  [goerli.id]: '',
}
