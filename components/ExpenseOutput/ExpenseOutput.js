import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import { GlobalStyles } from '../../constants/styles'

const ExpenseOutput = ({ expensePeriod }) => {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19'),
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2022-01-05'),
    },
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2021-12-01'),
    },
    {
      id: 'e4',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19'),
    },
    {
      id: 'e5',
      description: 'Another book',
      amount: 18.51,
      date: new Date('2022-02-18'),
    },
    {
      id: 'e6',
      description: 'Another book',
      amount: 18.51,
      date: new Date('2022-02-18'),
    },
    {
      id: 'e7',
      description: 'Another book',
      amount: 18.51,
      date: new Date('2022-02-18'),
    },
  ]
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensePeriod} />
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpenseOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
})
