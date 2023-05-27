import Overlay from "./Components/Overlay/Overlay";
import OverlyMobail from "./Components/Overlay/OverlayMobil";
import Header from "./Components/Header";
import Cards from "../src/Components/Cards";
import React from "react";
import SliderNike from "./Components/SliderNike";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";





function App() {

  React.useEffect(()=>{
    axios.get('https://6444f92a914c816083c3205c.mockapi.io/Card') .then((res) =>{
      setItems(res.data)
    })
    axios.get('https://6444f92a914c816083c3205c.mockapi.io/Drawer') .then((res) =>{
      setDrawerItems(res.data)
    })
   
  },[]);



  const [items, setItems] = React.useState([])
  const [isDrawerItems, setDrawerItems] = React.useState([])



  const [isOpenDrawer, setOpenDrawer] = React.useState(false)
  const [isOpenDrawerMobail, setOpenDrawerMobail] = React.useState(false)



  const [isSerch, setSerch] = React.useState('')
  const InputSerch = (event) => {
      setSerch(event.target.value)
  }



  const  plusCards = (obj) =>{
    axios.post('https://6444f92a914c816083c3205c.mockapi.io/Drawer', obj)
    setDrawerItems((prev) => [...prev, obj])
  }
  const clickDelete = (id) =>{
    axios.delete(`https://6444f92a914c816083c3205c.mockapi.io/Drawer/${id}`)
    setDrawerItems((prev) => prev.filter((item) => item.id !== id));
  }


  return (
    <div className="sm:p-5">
       {isOpenDrawer ? <Overlay items={isDrawerItems} clickDelete={clickDelete} onClose={() => setOpenDrawer(false)}/> : null}
       {isOpenDrawerMobail ? <OverlyMobail onCloseMobail={() => setOpenDrawerMobail(false)}/> : null}
      <div className="wraper m-auto w-full xl:max-w-[1200px] border rounded-lg bg-white">
        <header className="border-b">
          <Header 
          onClickOpenDrawer={() => setOpenDrawer(true)} 
          onClickOpenDrawerMobail={() => setOpenDrawerMobail(true)}
          />
        </header>
        <main >
          <div>
              <SliderNike/>
            <div className="sm:flex xl:items-center px-10 py-10 justify-between ">
              <h2 className="font-bold text-3xl">{isSerch ? `По запросу: ${isSerch}` : "Все кросовки"}
              </h2>
              <input onChange={InputSerch} value={isSerch}  className="sm:border sm:rounded-[10px] sm:p-2 sm:mt-0  px-8 mt-4 p-2 border rounded-[10px]" placeholder="Поиск..."></input>
            </div>
            <div className="px-10 flex flex-wrap xl:gap-[39px] gap-10 justify-center pb-10 ">
           {items
            .filter((item) => item.Title.includes(isSerch)).map((item, index) =>(
              <Cards
                key = {index}
                Title = {item.Title}
                ImgUrl = {item.ImgUrl}
                Price = {item.Price}  
                plusCards = {plusCards}
                /> 
            ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;
