import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'
import { getFormattedDate } from '../../utils/date'

const ExpenseItem = ({ Description, Amount, Date }) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.desc}>
          <Text style={styles.description}>{Description}</Text>
          <Text style={styles.date}>{getFormattedDate(Date)}</Text>
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
    elevation: 10,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
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
