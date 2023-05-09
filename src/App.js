import './global.css';
import RouteManager from './routes';
import chakraTheme from '@chakra-ui/theme'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
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
        <RouteManager />
      </ChakraBaseProvider>
    </div>
  );
}

export default App;
