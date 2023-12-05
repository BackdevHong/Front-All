import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../todoAtoms'

const TodoListStats = () => {
  const {
    totalNum,
    totalCompleteNum,
    totalUncompleteNum,
    percentCompleted
  } = useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total Items: {totalNum}</li>
      <li>Items completed: {totalCompleteNum}</li>
      <li>Items not completed: {totalUncompleteNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}

export default TodoListStats