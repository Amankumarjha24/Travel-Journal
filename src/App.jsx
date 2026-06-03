import Header from './component/Header'
import Entry from './component/Entry'
import Data from './Data.js'
const App = () => {
  const CardCreater = Data.map((v) => {
      return (
        <Entry
            key={v.id}
            image={v.img}
            countryName={v.countryName}
            heading={v.heading}
            link={v.link}
            date={v.date}
            p={v.p}
        >
            
        </Entry>
    )
  })
    return(
        <>
        <Header />
        {CardCreater}
        
        </>
    )
}

export default App
















