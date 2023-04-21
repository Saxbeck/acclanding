import * as React from "react"
import {
    ChakraProvider,
    Box,
    Grid,
    Text,
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
        {/*<VStack>*/}
        {/*  <iframe src="https://demo.azuracast.com/public/azuratest_radio/embed?volume=100?&theme=light"*/}
        {/*    style={{width: "80%", border:"0"}}>*/}
        {/*  </iframe>*/}
        {/*</VStack>*/}
      </Grid>
    </Box>
    <footer>
      <Box minH="20vh" color="black" background="blackAlpha.50" p="4">
        <Container>
          <Text fontSize='xl' py="2">Kontakt</Text>
          <Box>
            <Text><Link href="tel:81827012">Studie tlf: 81 82 70 12</Link></Text>
            <Text><Link href="tel:40159615">Kontakt tlf: 40 15 96 15</Link></Text>
            <Text>Ansvarshavende: Ken Saxbeck</Text>
            <Text>Email: kontakt@saxproduction.dk</Text>
          </Box>
          <Box py="4">
            <Text>Sende tidspunkt: 12 & 13 Maj. 2023</Text>
            <Text as='b'><Link href="https://slks.dk/">Tilsynsmyndighed: Radio- og tv-nævnet</Link></Text>
          </Box>
        </Container>
      </Box>
    </footer>
  </ChakraProvider>
)
