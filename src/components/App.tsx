import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DoAnything from './DoAnything';
import Player from './Player';
import DoSkillModal from './Modals/DoSkillModal';
import XPContextProvider from '../store/xp-context';

const App = () => {
    const [showDoSkillModal, setShowDoSkillModal] = useState(false);

    const toggleSkillModal = () => {
        setShowDoSkillModal(!showDoSkillModal);
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
                <Player />
                <main className="flex-fill">
                    <p className="text-center">This is where the list goes.</p>
                </main>
                <DoAnything openSkillModal={toggleSkillModal} />
                <DoSkillModal skillName="Do Anything" level={1} show={showDoSkillModal} hide={toggleSkillModal} />
            </XPContextProvider>
        </Container>
    );
};

export default App;
