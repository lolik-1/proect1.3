import React from "react"

function Cards ({Title, Price, ImgUrl, plusCards}) {

  const [isChecked, setCheked] =React.useState(false)

  const onClickCheked = () =>{
    setCheked(!isChecked)
    plusCards({Title, Price, ImgUrl,});
  }
    return(
          <div className="border rounded-[12px] p-2 xl:w-[250px] flex flex-col lg:w-[280px] 
          sm:w-[380px]">
            <img src={ImgUrl}></img>
            <div className="flex flex-col">
              <p className="font-normal py-2 lg:w-48 w-72">{Title}</p>
              <div className="flex items-center justify-between py-2">
                <div className="flex flex-col">
                  <span>Цена:</span>
                  <span className="font-bold text-base">{Price} руб.</span>
                </div>
                <button onClick={onClickCheked} className="border  rounded-[10px] p-[5px]"><img src={isChecked ? "./img/ChekGreen.png" :"./img/ChekBlack.png"}></img></button>
              </div>
            </div>
          </div>
    )
}

export default Cards;