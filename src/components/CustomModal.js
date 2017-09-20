import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CustomModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    componentWillReceiveProps(nextProps) {  
        if(JSON.stringify(this.props.showModal) !== JSON.stringify(nextProps.showModal)) {
            this.setState({
                modal: true
            });
        }
    }
    
    render() {        
        return (
            <div>
                <Button onClick={this.toggle}> {this.props.modalButtonLabel} </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}> {this.props.modalTitle} </ModalHeader>
                    <ModalBody>
                        {this.props.description}
                    </ModalBody>
                    <ModalFooter>
                        <a target="_blank" href={this.props.links[0].url}>
                            <Button> {this.props.links[0].label} </Button>
                        </a>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CustomModal;