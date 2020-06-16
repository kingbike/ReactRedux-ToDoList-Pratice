import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, InputGroup, FormControl, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddToDoText extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            input : ''
        };
    }

    onAdd = () => {
        this.props.onAdd( this.state.input ) ; 
    } 

    handleChange = ( e ) => {
        this.setState({
            input: e.target.value
        });
    }

    render() {
        return (
            <div style={{ marginTop: '15px' }} >
            <Container >
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter new todo"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={ this.handleChange }
                    />
                    <Button variant="primary" onClick={ this.onAdd } >Add</Button>{' '}
                </InputGroup>
            </Container>
        </div>
        );
    }
}

AddToDoText.defaultProps = {
    onAdd: () => {}
};

AddToDoText.propTypes = {
    onAdd: PropTypes.func
};

export default AddToDoText;
