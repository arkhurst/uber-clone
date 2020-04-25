import React, {useState} from 'react';
import { Text, View, StyleSheet, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Backdrop } from 'react-native-backdrop';


const ScheduleModal = ({visible, cancelModal}) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = () => {
      setShow(true);
      setMode('datetime');

    };

    return(
        <Modal transparent={true} visible={visible}  animationType="slide">
            <View style={styles.modalView}>
                  <Text style={{ textAlign:'center', fontSize:22, marginTop:4}}>Schedule a trip</Text>
                <View style={styles.mainViews}>  
                  <Text style={{color:'grey'}}>Thu, 16 Apr</Text>
                  <Text style={styles.mainText}>4:40AM - 4:50AM</Text>
                </View>
                <View>
  
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={showMode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        
        />
   
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
        marginTop:500,
        backgroundColor: "whitesmoke",

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
          paddingTop:15,
          paddingBottom:40,
          marginLeft:40
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