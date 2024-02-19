import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DoAnything from './DoAnything';
import Player from './Player';
import DoSkillModal from './Modals/DoSkillModal';
import XPContextProvider from '../store/xp-context';
import SkillContextProvider from '../store/skill-context';
import NewSkillModal from './Modals/NewSkillModal';
import SkillList from './SkillList';

const App = () => {
    const [showDoSkillModal, setShowDoSkillModal] = useState(false);
    const [activeSkill, setActiveSkill] = useState<{ name: string; level: number }>({ name: '', level: 0 });
    const [showNewSkillModal, setShowNewSkillModal] = useState(false);

    const openDoSkillModal = (name: string, level: number) => {
        setActiveSkill({ name, level });
        setShowDoSkillModal(true);
    };

    // const openNewSkillModal = (prevLevel: number) => {};

    const resetActiveSkill = () => {
        setActiveSkill({ name: '', level: 0 });
    };

    return (
        <Container className="py-3 col-8 vh-100 d-flex flex-column bg-light">
            <Row>
                <h1 className="text-center">Laces</h1>
                <h2 className="text-center">
                    The unofficial{' '}
                    <a href="https://rollforshoes.com" title="Roll for Shoes official site">
                        Roll for Shoes
                    </a>{' '}
                    companion app
                </h2>
            </Row>
            <XPContextProvider>
                <Player showNewSkillModal={() => setShowNewSkillModal(true)} />
                <main className="flex-fill">
                    <SkillContextProvider>
                        <SkillList />
                        <NewSkillModal
                            prevLevel={activeSkill.level}
                            show={showNewSkillModal}
                            hide={() => setShowNewSkillModal(false)}
                            resetActiveSkill={resetActiveSkill}
                        />
                    </SkillContextProvider>
                </main>
                <DoAnything openSkillModal={openDoSkillModal} />
                <DoSkillModal
                    skillName={activeSkill.name}
                    level={activeSkill.level}
                    show={showDoSkillModal}
                    hide={() => setShowDoSkillModal(false)}
                    openNewSkillModal={() => setShowNewSkillModal(true)}
                />
            </XPContextProvider>
        </Container>
    );
};

export default App;
