import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ISkillListProps } from '../types';
import Skill from './Skill';

function DoAnything({ openSkillModal }: ISkillListProps) {
    return (
        <Row className="pt-2">
            <Col className="text-center">
                <Skill name="Do Anything" level={1} openSkillModal={openSkillModal} />
            </Col>
        </Row>
    );
}

export default DoAnything;
