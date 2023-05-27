import React from "react";
function Overlay ({onClose, clickDelete ,items=[]}) {

    return(
        <div  className="overlay w-full h-full absolute top-0 left-0 right-0 z-10 ">
        <div className="drawer xl:w-[450px] lg:w-[600px] h-full absolute right-0 bg-white flex flex-col">
          <div className="mx-4 my-4">
          <div className="flex items-center justify-between my-2 ">
            <h2 className="font-bold text-2xl">Корзина</h2>
            <button onClick={onClose} className="border rounded-[5px]"><img width={30} height={30} src="./img/close.png"></img></button>
          </div>
          </div>
          <div className="flex flex-col flex-1 mx-4">
            {
              items.map((obj) => (
                <div className="border rounded-[10px] flex items-center my-4 gap-4">
                  <img className="p-2 mb-4" width={150} height={150} src={obj.ImgUrl}></img>
                  <div className="w-48">
                      <p>{obj.Title}</p>
                      <span className="font-bold">{obj.Price} Руб</span>
                  </div>
                  <button onClick={() => clickDelete(obj.id)} className="border rounded-[5px]"><img width={30} height={30} src="./img/close.png"></img></button>
                </div>
                
              ))}
          </div>
          <div className="mx-4"> 
            <div>
              <button className="bg-[#9DD558] rounded-[20px] w-[420px] h-[55px] text-xl text-white my-4">Оформить заказ</button>
            </div>
          </div>
        </div>
       </div>
    )
}

export default Overlay;