import Form from 'react-bootstrap/Form';

export default function InputForm( props) {

    return (
        <Form.Group controlId={props?.name}>
            <Form.Label>{props?.name}</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder={props?.name}
                defaultValue={props?.defaultValue}
            />
            <Form.Control.Feedback type="invalid">
                required
            </Form.Control.Feedback>
        </Form.Group>
    )
}