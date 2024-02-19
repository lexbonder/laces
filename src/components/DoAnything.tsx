import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { IDoAnythingProps } from '../types';

function DoAnything({ openSkillModal }: IDoAnythingProps) {
    return (
        <Row className="border-top border-dark pt-2">
            <Col className="text-center">
                <Button variant="dark" size="lg" onClick={() => openSkillModal('Do anything', 1)}>
                    Do Anything 🎲
                </Button>
            </Col>
        </Row>
    );
}

export default DoAnything;
