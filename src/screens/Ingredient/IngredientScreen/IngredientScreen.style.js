import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    height: 180,
    alignItems: 'center',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },

  card: {
    width: '90%',
    height: 130,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.SECUNDARY_COLOR_DARK,
  },

  detail: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    color: 'white',
  },
  description: {
    width: '50%',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  screen: {
    paddingTop: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#123',
  },

  cardDetail: {
    width: '90%',
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
