import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISession {
  isLoggedIn: boolean;
  token: string;
  updateToken: (value: string) => void;
  updateIsLoggedIn: (value: boolean) => void;
}

const initData: ISession = {
  isLoggedIn: false,
  token: '',
  updateToken: () => {},
  updateIsLoggedIn: () => {},
};
const useSession = create<ISession>()(
  persist(
    (set) => ({
      ...initData,
      updateIsLoggedIn: (isLoggedIn: boolean) =>
        set((state) => ({ ...state, isLoggedIn })),
      updateToken: (token: string) => set((state) => ({ ...state, token })),
    }),
    {
      name: 'session',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useSession;
