import { Image, StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* Materi Flexbox */}
        {/* -------------- */}

        {/*1. Tiga kotak urut kebawah */}
        <View>
          {/* Kotak Merah */}
          <View style={styles.merah} />
          {/* Kotak Biru */}
          <View style={styles.biru} />
          {/* Kotak Hijau */}
          <View style={styles.hijau} />
        </View>
        
        {/*2. Tiga kotak urut kesamping */}
        <View style={styles.wrapperKotak}>
          {/* Kotak Merah */}
          <View style={styles.merah} />
          {/* Kotak Biru */}
          <View style={styles.biru} />
          {/* Kotak Hijau */}
          <View style={styles.hijau} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  merah: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  biru: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
  hijau: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  wrapperKotak: {
    marginTop: 20,
    flexDirection: 'row',
  },
});
