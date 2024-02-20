import React from "react";
import cl from './MyModal.module.css';
import MyButton from "../button/MyButton";

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal];

    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header" style={{marginBottom: '.5rem'}}>
                    <MyButton style={{display: 'block', marginLeft: 'auto', padding: '0px', border: '0'}} onClick={() => setVisible(false)}>X</MyButton>
                </div>

                {children}
            </div>
        </div>
    )
}

export default MyModal;