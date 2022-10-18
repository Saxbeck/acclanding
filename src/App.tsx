import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" visibility={"hidden"} />
        <VStack spacing={50}>
          <Logo h="70vmin" pointerEvents="none" />
        </VStack>
          {/*
          <VStack>
            <iframe src="http://146.190.227.164/public/acc_radio/embed?volume=100?&theme=light"
                allowTransparency={true}
                style={{width: "80%", border:"0"}}>
            </iframe>
          </VStack>
          */}
      </Grid>
    </Box>
  </ChakraProvider>
)
