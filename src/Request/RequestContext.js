import { createContext } from 'react';

export const RequestContext = createContext({
  headers: {
    headername: 'headervalue'
  },
  setHeaders: () => {}
});
