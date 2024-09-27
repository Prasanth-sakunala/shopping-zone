import { StyleSheet, View,TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function header({searchQuery,setSearchQuery}) {
  
  return (
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={20} color="black" style={styles.iconStyle}/>
            <TextInput
                style={styles.inputStyle}
                placeholder="Search products..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            
            <MaterialIcons name="mic" size={24} color="black" style={styles.iconStyle} />
        </View>
        <MaterialIcons name="qr-code-scanner" size={24} color="black" style={styles.qrStyle} />
          </View>
  )
}

const styles = StyleSheet.create({
  header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:"#B0E0E6",
        padding:10
    },
    searchContainer: {
        flexDirection: 'row', 
        marginTop: 10,
        padding: 5,
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    qrStyle: {
        marginTop:10,
        marginRight: 6,
    },
    iconStyle: {
        marginRight: 6, 
    },
    inputStyle: {
        flex: 1, 
        backgroundColor: '#B0E0E6', // Adds a plain background color
        width:'80%'
    },
})