import { render } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom'


//smoke test
test('should run without breaking', () => {
  render(<MemoryRouter> <App /> </MemoryRouter>);
});
