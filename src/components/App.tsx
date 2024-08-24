import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CharacterName from './CharacterName';
import DoSkillModal from './Modals/DoSkillModal';
import NewSkillModal from './Modals/NewSkillModal';
import SkillList from './SkillList';
import ManageXPButton from './ManageXPButton';
import AddSkillButton from './AddSkillButton';
import RootProvider from './RootProvider';
import XPModal from './Modals/XPModal';
import { Skill } from '../store/skill-context';

const App = () => {
    const [showDoSkillModal, setShowDoSkillModal] = useState(false);
    const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
    const [showNewSkillModal, setShowNewSkillModal] = useState(false);
    const [showXPModal, setShowXPModal] = useState(false);

    const openDoSkillModal = (chosenSkill: Skill) => {
        setActiveSkill(chosenSkill);
        setShowDoSkillModal(true);
    };

    const resetActiveSkill = () => {
        setActiveSkill(null);
    };

    return (
        <RootProvider>
            <div className="bg-light" style={{ minHeight: '100vh' }}>
                <Navbar sticky="top" expand="lg" className="bg-light">
                    <Container fluid>
                        <CharacterName />
                        <Navbar.Brand className="text-center me-0" style={{ flex: 1 }}>
                            <h1 className="mb-0">Laces</h1>
                            <p className="h6 mb-0">
                                The unofficial{' '}
                                <a href="https://rollforshoes.com" title="Roll for Shoes official site">
                                    Roll for Shoes
                                </a>{' '}
                                companion app
                            </p>
                        </Navbar.Brand>
                        <Nav className="justify-content-end" style={{ flex: 1 }}>
                            <AddSkillButton showNewSkillModal={() => setShowNewSkillModal(true)} />
                            <ManageXPButton toggleXPModal={() => setShowXPModal(!showXPModal)} />
                        </Nav>
                    </Container>
                </Navbar>
                <Container fluid className="px-0">
                    <main className="flex-fill">
                        <SkillList openSkillModal={openDoSkillModal} />
                    </main>
                </Container>
                <XPModal show={showXPModal} hide={() => setShowXPModal(false)} />
                <NewSkillModal
                    activeSkill={activeSkill}
                    show={showNewSkillModal}
                    hide={() => setShowNewSkillModal(false)}
                    resetActiveSkill={resetActiveSkill}
                />
                {activeSkill && (
                    <DoSkillModal
                        activeSkill={activeSkill}
                        show={showDoSkillModal}
                        hide={() => setShowDoSkillModal(false)}
                        openNewSkillModal={() => setShowNewSkillModal(true)}
                        resetActiveSkill={resetActiveSkill}
                    />
                )}
            </div>
        </RootProvider>
    );
};

export default App;
