function DrawerMain ({Title , ImgUrl, Price, clickDelete}){
    return(
            <div className="border rounded-[10px] flex items-center my-4 gap-4">
                <img className="p-2 mb-4" width={150} height={150} src={ImgUrl}></img>
                <div className="w-48">
                    <p>{Title}</p>
                    <span className="font-bold">{Price} Руб</span>
                </div>
                <button  className="border rounded-[5px]"><img width={30} height={30} src="./img/close.png"></img></button>
            </div>
    )
}

export default DrawerMain;