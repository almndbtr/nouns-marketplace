/* Is this anywhere other than the Filter? */
import { filterOptionsWrapper } from './CollectionsFilter.css'
import { PriceRangeSelector } from './PriceRangeSelector'
import { PriceRangeFilter, useCollectionFilters } from './providers'
import { Accordion, Box, Button, Stack } from '@zoralabs/zord'
import { useCallback, useState } from 'react'
import { ETH_CURRENCY_SHIM } from '@shared/constants/currencies'

export function FilterPriceRange() {
  const [priceRangeSelect, setPriceRangeSelect] = useState<PriceRangeFilter | null>(null)
  const [invalidPriceRange, setInvalidPriceRange] = useState(true)

  const priceRangeSelection = useCallback((event: any) => {
    setPriceRangeSelect({
      min: event.min,
      max: event.max,
      currency: event.currency,
    })
    if (event.min >= 0 && event.max > 0 && !event.error) {
      setInvalidPriceRange(false)
    } else {
      setInvalidPriceRange(true)
    }
  }, [])

  const {
    filterStore: { setPriceRange },
  } = useCollectionFilters()

  return (
    <Box className={filterOptionsWrapper} pb="x0">
      <Accordion label="Price Range">
        <Stack gap="x4" pb="x4">
          <PriceRangeSelector
            onSelect={priceRangeSelection}
            currencyOptions={[ETH_CURRENCY_SHIM]}
          />
          <Button
            variant="outline"
            disabled={invalidPriceRange}
            onClick={() => setPriceRange(priceRangeSelect)}
          >
            Apply
          </Button>
        </Stack>
      </Accordion>
    </Box>
  )
}