import './global.css';
import RouteManager from './routes';
import chakraTheme from '@chakra-ui/theme'
import { ChakraBaseProvider, Flex, Link, extendBaseTheme } from '@chakra-ui/react';
const { Button, Input, Radio, RadioGroup, Modal, Heading, Text, Card, CardBody, CardHeader , CardFooter} = chakraTheme.components

const theme = extendBaseTheme({
  styles: {
    global: {
      body: {
        color: 'default',
        bg: '#f7f7f7',
        height: '100%'
      },
    }
  },
  components: {
    Button, Input, Radio, RadioGroup, Modal, Heading, Text, Card, CardBody, CardHeader, CardFooter
  },
});

function App() {
  return (
    <div className='app'>
      <ChakraBaseProvider theme={theme}>
        <Flex gap={"10px"}>
          <Link href="/add-gateway" color="teal">Add Gateway</Link>
          <Link href="/" color="teal">Gateways</Link>
        </Flex>
        <RouteManager />
      </ChakraBaseProvider>
    </div>
  );
}

export default App;
