import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack, HStack,
  Code,
  Grid,
  theme,
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
              <MemoImg h="30vmin" pointerEvents="none"/>
              <Logo h="40vmin" pointerEvents="none" />
          </HStack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
