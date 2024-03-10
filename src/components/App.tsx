import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import DoAnything from './DoAnything';
import Player from './Player';
import DoSkillModal from './Modals/DoSkillModal';
import XPContextProvider from '../store/xp-context';
import SkillContextProvider from '../store/skill-context';
import NewSkillModal from './Modals/NewSkillModal';
import SkillList from './SkillList';
import ManageXPButton from './ManageXPButton';
import AddSkillButton from './AddSkillButton';

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
        <div className="vh-100 d-flex flex-column bg-light">
            <XPContextProvider>
                <Navbar sticky="top" expand="lg">
                    <Container fluid>
                        Stuff before
                        <Navbar.Brand>
                            <span className="h1">Laces</span>
                            <br />
                            <span className="h6">
                                The unofficial{' '}
                                <a href="https://rollforshoes.com" title="Roll for Shoes official site">
                                    Roll for Shoes
                                </a>{' '}
                                companion app
                            </span>
                        </Navbar.Brand>
                        <Nav>
                            <AddSkillButton showNewSkillModal={() => setShowNewSkillModal(true)} />
                            <ManageXPButton />
                        </Nav>
                    </Container>
                </Navbar>
                <Player />
                <DoAnything openSkillModal={openDoSkillModal} />
                <main className="flex-fill">
                    <SkillContextProvider>
                        <SkillList openSkillModal={openDoSkillModal} />
                        <NewSkillModal
                            prevLevel={activeSkill.level}
                            show={showNewSkillModal}
                            hide={() => setShowNewSkillModal(false)}
                            resetActiveSkill={resetActiveSkill}
                        />
                    </SkillContextProvider>
                </main>
                <DoSkillModal
                    skillName={activeSkill.name}
                    level={activeSkill.level}
                    show={showDoSkillModal}
                    hide={() => setShowDoSkillModal(false)}
                    openNewSkillModal={() => setShowNewSkillModal(true)}
                    resetActiveSkill={resetActiveSkill}
                />
            </XPContextProvider>
        </div>
    );
};

export default App;
