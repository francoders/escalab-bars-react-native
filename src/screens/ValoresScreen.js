import {Button} from '@rneui/base';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Form} from '../components/Form';
import ResultValues from '../components/ResultValues';
import {colors} from '../utils/colors';

export function ValoresScreen() {
  const [promocion, setPromocion] = useState(null);
  const [cantPromocion, setCantPromocion] = useState(null);
  const [lugar, setLugar] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = () => {
    Clear();
    if (!promocion) {
      setErrorMessage('Selecciona una promocion');
    } else if (!cantPromocion) {
      setErrorMessage('Selecciona una cantidad');
    } else if (!lugar) {
      setErrorMessage('Selecciona el lugar de consumo');
    } else {
      const TotalPromocion = promocion * cantPromocion + lugar;
      setTotal({
        contentFinal: TotalPromocion,
      });
      console.log('TOTAL: ', TotalPromocion);
    }
  };

  const Clear = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text}>Cotiza Promociones</Text>
        <Form
          setPromocion={setPromocion}
          setCantPromocion={setCantPromocion}
          setLugar={setLugar}
        />
      </SafeAreaView>

      <View>
        <Button onPress={onSubmit}>CALCULAR</Button>
      </View>

      <View>
        <ResultValues
          promocion={promocion}
          cantPromocion={cantPromocion}
          lugar={lugar}
          total={total}
          errorMessage={errorMessage}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 280,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: colors.PRIMARY_COLOR_LIGHT,
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
  },
});
