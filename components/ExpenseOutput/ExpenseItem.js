import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

const ExpenseItem = ({ Description, Amount, Date }) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.desc}>
          <Text style={styles.description}>{Description}</Text>
          <Text style={styles.date}>2012-2-19</Text>
        </View>
        <TouchableOpacity style={styles.Amount}>
          <Text style={styles.amountButton}>{Amount}</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 4,
    padding: 16,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descBox: {
    borderWidth: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary200,
  },
  Amount: {
    backgroundColor: 'white',
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  amountButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
})
