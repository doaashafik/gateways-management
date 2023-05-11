import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddGateway from '../container/AddGateway/AddGateway';

// import { server } from './mocks/server';




// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// // Enable request interception.
// beforeAll(() => server.listen())
// // Reset handlers so that each test could alter them
// // without affecting other, unrelated tests.
// afterEach(() => server.resetHandlers())
// // Don't forget to clean up afterwards.
// afterAll(() => server.close())


test('rendering and submitting addGateway form', async () => {
  // const handleSubmit = jest.fn()
  render(<AddGateway />)

  await userEvent.type(screen.getByRole("textbox", { name: /Gateway Name/i }), 'Gateway XYZ')
  await userEvent.type(screen.getByRole("textbox", { name: /Serial Number/i }), '22-52418-598635')
  await userEvent.type(screen.getByRole("textbox", { name: /IPv4 address/i }), ' 192.0.2.146')

  await userEvent.click(screen.getByRole('button', { name: /submit/i }))

  // await waitFor(() =>
  //   expect(handleSubmit).toHaveBeenCalledWith({
  //     email: 'john.dee@someemail.com',
  //     firstName: 'John',
  //     lastName: 'Dee',
  //   }),
  // )
})