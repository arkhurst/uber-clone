import React from 'react';
import { Text, View, Modal, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ScheduleModal = ({visible, cancelModal}) => {
    return(
        <Modal transparent={true} visible={visible}  animationType="slide">
            <View style={styles.modalView}>
                  <Text style={styles.mainText}>Schedule a trip</Text>
                <View style={styles.mainViews}>  
                  <Text style={{color:'grey'}}>Thu, 16 Apr</Text>
                  <Text style={styles.mainText}>4:40AM - 4:50AM</Text>
                </View>
                <View style={styles.mainViews}>
                   <Text>dropdown</Text>
                </View>
                {/* Button View */}
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={cancelModal}  style={styles.cancel}>
                        <Text style={{fontWeight:'600', fontSize:16}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.set}>
                      <Text style={{fontWeight:'600', fontSize:16,color:'white'}}>Set</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        marginTop: 500,
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
      },
      mainViews:{
          paddingTop:20,
          justifyContent:'center',
          alignItems:'center'
      },
      mainText:{
          fontSize:20
      },
      buttonView:{
          flexDirection:'row',
          paddingTop:90
      },
      cancel:{
          width:155,
          height:45,
          backgroundColor:'rgba(0, 0, 0, 0.05)',
          justifyContent:'center',
          alignItems:'center'
      },
      set:{
        width:155,
        height:45,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20

      }
})
export default ScheduleModal;