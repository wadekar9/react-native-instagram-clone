import React from 'react'
import RootNavigator from './src/Navigations/RootNavigator'
import CustomStatusBar from './src/Component/CustomStatusBar'

const App = () => {
  return (
    <>
      <CustomStatusBar />
      <RootNavigator/>
    </>
  )
}

export default App