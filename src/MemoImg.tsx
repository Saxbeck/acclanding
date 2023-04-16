import * as React from "react"
import {
    chakra,
    keyframes,
    ImageProps,
    forwardRef,
    usePrefersReducedMotion,
} from "@chakra-ui/react"

import memorial_png from "./memorial_png.png"


export const MemoImg = forwardRef<ImageProps, "img">((props, ref) => {
    const prefersReducedMotion = usePrefersReducedMotion()

    return <chakra.img src={memorial_png} ref={ref} {...props} />
})