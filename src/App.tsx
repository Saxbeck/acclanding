import * as React from "react"
import {
    ChakraProvider,
    Box,
    Flex,
    Grid,
    Text,
    Stack,
    Spacer,
    Container,
    SimpleGrid,
    VStack, HStack,
    theme, Heading, UnorderedList, ListItem,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import {MemoImg} from "./MemoImg";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" visibility={"hidden"} />
        <VStack spacing={8}>
          <HStack>
              <Logo h="40vmin" pointerEvents="none" />
          </HStack>
        </VStack>
      </Grid>
    </Box>
    {/*<footer>*/}
    {/*  <Box minH="20vh" color="black" background="blackAlpha.50" p="4">*/}
    {/*    <Container>*/}
    {/*      <Text fontSize='xl' py="2">Kontakt</Text>*/}
    {/*      <Text>Tlf: 00 00 00 00</Text>*/}
    {/*      <Text>Email: email@email.dk</Text>*/}
    {/*      <Box py="4">*/}
    {/*        <Text as='b'>Tilsynsmyndighed: Radio- og tv-nævnet</Text>*/}
    {/*      </Box>*/}
    {/*    </Container>*/}
    {/*  </Box>*/}
    {/*</footer>*/}
  </ChakraProvider>
)
