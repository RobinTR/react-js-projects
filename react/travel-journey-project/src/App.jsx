import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'


function App() {
  const entryElements = data.map(item => {
    return (
      <Entry
        key={item.id}
        {...item}
        />
    )
  })

  return (
    <>
      <Header />
      <main className='container'>
        {entryElements}
      </main>
    </>
  )
}

export default App
