import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider, Heading } from "@chakra-ui/react"

const App: React.VFC<{}> = () => {
  return (
    <ChakraProvider>
      <Heading>Hello, chakra-ui + parcel v2!</Heading>
    </ChakraProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
