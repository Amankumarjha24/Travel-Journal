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





//  <Entry img={imgONe}
//             countryName={"Japan"}
//             link={"#"}
//             date={"12-03-2026 to 13-02-2026"}
//             heading={"Japnese world"}
//             p={"If you walk through the small lanes of Kyoto, you’ll see old wooden houses, glowing lanterns, and soft rain falling quietly. It feels as if time itself is moving slowly."}
//         />











