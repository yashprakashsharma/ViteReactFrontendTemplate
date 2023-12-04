import './App.css'
import { useSelector } from 'react-redux'
import { ContentSelectors, appContent } from '@state/content'

function App() {

  const content = useSelector(ContentSelectors.selectContent) as appContent

  return (
    <>
      {content.data}
    </>
  )
}

export default App
