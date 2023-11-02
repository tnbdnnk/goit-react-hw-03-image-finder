import Modal from 'react-modal';
import { BsXLg } from 'react-icons/bs';

import { BtnCloseImg } from './Modal.styled';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0',
        border: 'none',
        background: 'none',
    },
    overlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: '#2e2f4266',
    }
}

export const ModalImg = ({ isOpen, isClose, onRequestClose, src, alt }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel='Example Modal'
        >
            <img src={src} alt={alt} width={1000}/>
            <BtnCloseImg onClick={isClose}>
                <BsXLg size={30}/>
            </BtnCloseImg>
        </Modal>
    )
}