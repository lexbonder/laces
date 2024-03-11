import { ReactNode } from 'react';
import SkillContextProvider from '../store/skill-context';
import XPContextProvider from '../store/xp-context';

const RootProvider = ({ children }: { children: ReactNode }) => (
    <XPContextProvider>
        <SkillContextProvider>{children}</SkillContextProvider>
    </XPContextProvider>
);

export default RootProvider;
