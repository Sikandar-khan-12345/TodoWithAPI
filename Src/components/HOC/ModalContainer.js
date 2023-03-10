import React, { memo, useEffect, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import Colors from '../../constents/Colors';

const ModalContainer = ({
    show = true,
    onClose = () => { },
    style = {},
    children,
    animationType = 'fade',
    transparent = true,
    ...props
}) => {
    const [ShowModal, setShowModal] = useState(show);
    useEffect(() => {
        setShowModal(show);
    }, [show]);

    const onCloseHandler = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <Modal
            transparent={transparent}
            animationType={animationType}
            visible={ShowModal}
            onRequestClose={onCloseHandler}
            {...props}>
            <View style={[styles.view, style]}>
                <TouchableOpacity style={styles.dismiss} onPress={onCloseHandler} />
                {children}
            </View>
        </Modal>
    );
};

export default memo(ModalContainer);

const styles = StyleSheet.create({
    view: {
        backgroundColor: Colors.black + '70',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    
    },
    dismiss: {
        ...StyleSheet.absoluteFillObject,
    },
});