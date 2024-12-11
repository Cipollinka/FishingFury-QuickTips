import {createContext, useContext} from 'react';
import {User} from '../../types.ts';

interface UserContextProps {
  user: User | null;
  saveUser: (newState: {
    tips: any[];
    hasSeenOnboardingFour: boolean;
    hasSeenOnboardingTwo: boolean;
    hasSeenOnboardingThree: boolean;
    hasSeenOnboardingOne: boolean;
  }) => Promise<void>;
  clearUser: () => void;
  clearUserProgress: () => void;
  isLoading: boolean;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined,
);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserContext');
  }

  return context;
};
