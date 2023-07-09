import { useState } from 'react'
import Main1 from './components/Main1'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
function App() {

  return (
    <div>
     <Sidenav/>
     <Main1/>
      <Work/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App
