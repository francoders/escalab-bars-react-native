import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardIngredientes} from '../../../components/CardIngredientes';

export function IngredientListScreen() {
  return (
    <View style={styles.content}>
      <CardIngredientes
        title="Vodka"
        description="El o la vodka es una bebida destilada. Se discute el origen de la misma aunque el nombre actual es ruso. 
        Se produce generalmente a través de la fermentación de granos y otras plantas ricas en almidón, como el centeno, trigo, patata o remolacha"
      />
      <CardIngredientes
        title="Tequila"
        description="El tequila es una bebida alcohólica obtenida del destilado, originaria de Tequila, en el estado de Jalisco, México."
      />
      <CardIngredientes
        title="Ron"
        description="El ron es una bebida alcohólica, elaborada a partir de la fermentación y destilación de la melaza o el jugo de la caña de azúcar.
         La mayoría de su producción se encuentra en las Américas, y concretamente el Caribe."
      />
      <CardIngredientes
        title="Gin"
        description="La ginebra es una bebida alcohólica destilada que posee un sabor predominante a nebrinas, los frutos del enebro.
         La ginebra es una de las categorías de destilados más amplia, con diversas regiones de producción."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#222'
  },
});
