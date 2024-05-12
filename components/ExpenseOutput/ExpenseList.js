import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => {
        return (
          <ExpenseItem
            Description={item.description}
            Amount={item.amount}
            Date={item.date}
          />
        )
      }}
      keyExtractor={(item) => {
        item.id
      }}
    />
  )
}

export default ExpenseList

const styles = StyleSheet.create({})
