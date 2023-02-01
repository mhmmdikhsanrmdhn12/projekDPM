import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PesananAktif} from '../../components';
import {WARNA_ABU_ABU} from '../../utils/constant';

const Pesanan = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pesananAktif}>
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
