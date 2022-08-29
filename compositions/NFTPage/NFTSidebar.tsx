import { Heading, Stack, Flex, Paragraph, Box, BoxProps } from '@zoralabs/zord'
import { CollectionThumbnail } from '@media/CollectionThumbnail'
import { useNFTProvider, useTitleWithFallback } from '@shared'
import { Link } from 'components'
import { clickAnimation } from 'styles/styles.css'
import { nftInfoSidebar, nftInfoSidebarWrapper } from './NFTPage.css'
import { NFTMarket } from './NFTMarket'
import { lightFont } from '@shared'

export interface NFTSidebarProps extends BoxProps {}

export function NFTSidebar({ ...props }: NFTSidebarProps) {
  const { initialData: nft, tokenId, contractAddress } = useNFTProvider()

  const { fallbackTitle } = useTitleWithFallback(
    contractAddress,
    tokenId,
    nft?.metadata?.name
  )

  if (!nft || !tokenId || !contractAddress) return null

  return (
    <Box id="nft-info-sidebar" className={nftInfoSidebar} {...props}>
      <Stack className={nftInfoSidebarWrapper}>
        <Flex>
          <Link href={`/collections/${nft?.nft?.contract.address}`}>
            <CollectionThumbnail
              collectionAddress={nft?.nft?.contract.address}
              useTitle
              size="xxs"
              radius="round"
              p="x2"
              pr="x5"
              backgroundColor="tertiary"
              borderRadius="round"
              className={clickAnimation}
            />
          </Link>
        </Flex>
        <Heading as="h1" size="xl">
          {fallbackTitle}
        </Heading>
        {nft?.metadata?.description && (
          <Paragraph size="lg" className={lightFont}>
            {nft?.metadata?.description}
          </Paragraph>
        )}

        {nft?.nft && (
          <NFTMarket
            contractAddress={nft.nft.contract.address}
            tokenId={nft.nft.tokenId}
            nft={nft}
          />
        )}
      </Stack>
    </Box>
  )
}