import * as React from "react"
import {
    ChakraProvider,
    Box,
    Grid,
    Text,
    SimpleGrid,
    Container,
    VStack, HStack,
    theme, Heading, UnorderedList, ListItem, Link,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="80vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" visibility={"hidden"} />
        <VStack spacing={8}>
          <HStack>
              <Logo h="60vmin" pointerEvents="none" />
          </HStack>
        </VStack>
        {/*Uncomment when updating to real url*/}
        <VStack>
          <iframe src="https://control.accradio.dk/public/acc_radio/embed?volume=100?&theme=light"
            style={{width: "80%", border:"0"}}>
          </iframe>
        </VStack>
      </Grid>
    </Box>
    <footer>
      <Box minH="20vh" color="black" background="blackAlpha.50" p="4">
        <Container maxW='container.md'>
            <SimpleGrid columns={[1,2,2]} spacing={5}>
              <Box py="2">
              <Text fontSize='xl' py="2">Info</Text>
                <Text>Frekvens: FM 93.1Mhz</Text>
                <Text>Sende tidspunkt: 12 & 13 Maj. 2023</Text>
                <Text>Studie Lokation: <Link href="geo:55.5915783,12.5807908,17">Nøragersmindevej 90, 2791 Dragør</Link></Text>
              </Box>
              <Box py="2">
              <Text fontSize='xl' py="2">Kontakt</Text>
                <Text><Link href="tel:81827012">Studie: 81 82 70 12</Link></Text>
                <Text><Link href="tel:40159615">Program chef: 40 15 96 15</Link></Text>
                <Text>Ansvarshavende: Ken Saxbeck</Text>
                <Text>Email: kontakt@saxproduction.dk</Text>
              </Box>
            </SimpleGrid>
          <Text as='b' py="2"><Link href="https://slks.dk/">Tilsynsmyndighed: Radio- og tv-nævnet</Link></Text>
        </Container>
      </Box>
    </footer>
  </ChakraProvider>
)
