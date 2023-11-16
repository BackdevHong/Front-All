import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from '../App'

const CharactorCount = () => {
  const count = useRecoilValue(charCountState)

  return (
    <div>Charactor Count : {count}</div>
  )
}

export default CharactorCount