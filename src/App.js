import './global.css';
import RouteManager from './routes';
import chakraTheme from '@chakra-ui/theme'
import { ChakraBaseProvider, Flex, Link, extendBaseTheme } from '@chakra-ui/react';
const { Button, Input, Radio, RadioGroup, Modal, Heading, Text } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button, Input, Radio, RadioGroup, Modal, Heading, Text
  },
});

function App() {
  return (
    <div className='app'>
      <ChakraBaseProvider theme={theme}>
        <Flex gap={"10px"}>
          <Link href="/add-gateway" color="teal" className="border-link">Add Gateway</Link>
          <Link href="/" color="teal" className="border-link">Gateways</Link>
        </Flex>
        <RouteManager />
      </ChakraBaseProvider>
    </div>
  );
}

export default App;
