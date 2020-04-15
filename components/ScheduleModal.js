import React from 'react';
import { Text, View, Modal, Button, StyleSheet } from 'react-native';


const ScheduleModal = ({visible, cancelModal}) => {
    return(
        <Modal transparent={true} visible={visible}  animationType="slide">
            <View style={styles.modalView}>
            <Button title="close" onPress={cancelModal} />
            <Text>Hey</Text>
            
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        marginTop: 280,
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.25,
        elevation: 5
      },
})
export default ScheduleModal;