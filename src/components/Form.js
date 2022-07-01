import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {colors} from '../utils/colors';

export function Form(props) {
  const {setPromocion, setCantPromocion, setLugar} = props;

  return (
    <View style={styles.contentForm}>
      <View style={styles.contentInputs}>
        <RNPickerSelect
          style={pickerSelectStyle}
          placeholder={{
            label: 'Selecciona una Promocion',
          }}
          onValueChange={value => setPromocion(value)}
          items={[
            {label: 'Promocion 1', value: 10000},
            {label: 'Promocion 2', value: 13000},
            {label: 'Promocion 3', value: 16000},
          ]}
        />

        <TextInput
          placeholder="Cantidad promocion a pedir"
          keyboardType="numeric"
          style={styles.input2Android}
          onChange={event => setCantPromocion(event.nativeEvent.text)}
        />

        <RNPickerSelect
          style={pickerSelectStyle}
          placeholder={{
            label: 'Desea Servir o Llevar ?',
          }}
          onValueChange={value => setLugar(value)}
          items={[
            {label: 'Servir', value: 2000},
            {label: 'Llevar', value: 10000},
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentForm: {
    width: '85%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
  contentInputs: {
    flexDirection: 'column',
  },

  input2Android: {
    height: 50,
    width: 250,
    backgroundColor: 'white',
  },
});

const pickerSelectStyle = StyleSheet.create({
  inputAndroid: {
    height: 50,
    width: 250,
    backgroundColor: 'white',
    marginBottom: 12,
    marginTop: 10,
  },
});
