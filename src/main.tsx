import './index.css';
import { App } from './App.tsx';
import { createContext } from "react";
import { createRoot } from 'react-dom/client';
import { AuthStore } from './store/auth.store.ts';
import { UserStore } from './store/user.store.ts';
import { State } from './types/state.ts';

const authStore = new AuthStore();
const userStore = new UserStore();

export const Context = createContext<State>({
    authStore,
    userStore,
  });

createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
        authStore,
        userStore
      }}>
        <App />
      </Context.Provider>
);
