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

const App = () => {
    const [showDoSkillModal, setShowDoSkillModal] = useState(false);
    const [activeSkill, setActiveSkill] = useState<{ name: string; level: number }>({ name: '', level: 0 });
    const [showNewSkillModal, setShowNewSkillModal] = useState(false);

    const openDoSkillModal = (name: string, level: number) => {
        setActiveSkill({ name, level });
        setShowDoSkillModal(true);
    };

    const resetActiveSkill = () => {
        setActiveSkill({ name: '', level: 0 });
    };

    return (
        <RootProvider>
            <div className="vh-100 bg-light">
                <Navbar sticky="top" expand="lg">
                    <Container fluid>
                        <CharacterName />
                        <Navbar.Brand className="text-center me-0" style={{ flex: 1 }}>
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
                        <Nav className="justify-content-end" style={{ flex: 1 }}>
                            <AddSkillButton showNewSkillModal={() => setShowNewSkillModal(true)} />
                            <ManageXPButton />
                        </Nav>
                    </Container>
                </Navbar>
                <Container fluid className="px-0">
                    <main className="flex-fill">
                        <SkillList openSkillModal={openDoSkillModal} />
                        <NewSkillModal
                            prevLevel={activeSkill.level}
                            show={showNewSkillModal}
                            hide={() => setShowNewSkillModal(false)}
                            resetActiveSkill={resetActiveSkill}
                        />
                    </main>
                </Container>
                <DoSkillModal
                    skillName={activeSkill.name}
                    level={activeSkill.level}
                    show={showDoSkillModal}
                    hide={() => setShowDoSkillModal(false)}
                    openNewSkillModal={() => setShowNewSkillModal(true)}
                    resetActiveSkill={resetActiveSkill}
                />
            </div>
        </RootProvider>
    );
};

export default App;
