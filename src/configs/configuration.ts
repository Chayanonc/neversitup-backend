import { BullRootModuleOptions } from '@nestjs/bull';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 4001,
  bullOptions: {
    redis: {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD || '',
      connectTimeout: parseInt(process.env.REDIS_TIMEOUT) || 10000,
    },
    limiter: {
      max: parseInt(process.env.BULL_LIMIT_MAX) || 1,
      duration: parseInt(process.env.BULL_LIMITER_DURATION) || 10,
    },
  } as BullRootModuleOptions,
  deadlineIn: parseInt(process.env.TX_DEADLINE_IN) || 10,
  rpc: process.env.BSC_RPC_TESTNET || '',
  vendingMachine: {
    chainId: process.env.VENDING_CHAIN_ID,
    tokenAddress: process.env.VENDING_TOKEN_ADDRESS,
  },
  baseURLExchangeRate: process.env.BASE_URL_EXCHANGE_RATE,
});
