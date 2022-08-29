import { numberFormatter, roundTwoDecimals, useAuth } from '@shared'
import { FixedPriceLike, MARKET_INFO_STATUSES } from '@zoralabs/nft-hooks/dist/types'
import { useMemo } from 'react'

interface AskHelperProps {
  ask: FixedPriceLike
}

export const useAskHelper = ({ ask }: AskHelperProps) => {
  const { balance: walletBalance } = useAuth()
  const isPrivateAsk = useMemo(() => ask?.raw?.properties?.buyer || false, [ask])
  const buyerAddress = useMemo(() => ask?.raw?.properties?.buyer, [ask])
  const isActiveAsk = useMemo(
    () => (ask && ask.status === MARKET_INFO_STATUSES.ACTIVE) || false,
    [ask]
  )
  const isCompletedAsk = useMemo(
    () => ask?.status === MARKET_INFO_STATUSES.COMPLETE || false,
    [ask]
  )
  const hasAsk = useMemo(() => ask !== undefined, [ask])

  const rawAskAmount = useMemo(() => ask?.amount?.amount.raw.toString(), [ask])
  const displayAskAmount = useMemo(() => ask?.amount?.amount.value.toString(), [ask])
  const usdAskAmount = useMemo(
    () =>
      ask?.amount?.usd?.value
        ? numberFormatter(roundTwoDecimals(ask?.amount?.usd?.value))
        : '...',
    [ask]
  )

  const hasSufficientFunds = useMemo(
    () => (rawAskAmount ? walletBalance?.value.gte(rawAskAmount) : false),
    [rawAskAmount, walletBalance?.value]
  )

  return {
    hasAsk,
    isPrivateAsk,
    isActiveAsk,
    isCompletedAsk,
    buyerAddress,
    rawAskAmount,
    displayAskAmount,
    usdAskAmount,
    hasSufficientFunds,
  }
}