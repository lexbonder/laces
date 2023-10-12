import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DoAnything from './DoAnything';
import Player from './Player';
import { useState } from 'react';
// import DoSkillModal from "./Modals/DoSkillModal";

const App = () => {
    const [showDoSkillModal, setShowDoSkillModal] = useState(false);

    const openSkillModal = () => {
        setShowDoSkillModal(true);
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
            <Player />
            <main className="flex-fill">
                <p className="text-center">This is where the list goes.</p>
            </main>
            <DoAnything openSkillModal={openSkillModal} />
            {/* <DoSkillModal skillName="Do Anything" level={1} xp={xp} /> */}
        </Container>
    );
};

export default App;
