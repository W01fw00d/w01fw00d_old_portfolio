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
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}> {this.props.modalTitle} </ModalHeader>
                <ModalBody>
                    <p>{this.props.paragraphs[0]}</p>
                    <p>{this.props.paragraphs[1]}</p>
                </ModalBody>
                <ModalFooter>
                    <a target="_blank" href={this.props.links[0].url}>
                        <Button className="pointer"> {this.props.links[0].label} </Button>
                    </a>
                    <a target="_blank" href={this.props.links[1].url}>
                        <Button className="pointer"> {this.props.links[1].label} </Button>
                    </a>
                </ModalFooter>
            </Modal>  
        );
    }
}

export default CustomModal;