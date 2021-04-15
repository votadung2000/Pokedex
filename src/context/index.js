import { createContext, useContext } from 'react';
import store from '../store';

export const Context = createContext(store);
export const useStore = () => useContext(Context);