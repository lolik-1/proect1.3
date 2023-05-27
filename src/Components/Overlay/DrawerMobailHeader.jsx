function DrawerMobailHeader ({onCloseMobail}){
    return(
        <div className="flex items-center justify-between m-4">
            <h2 className="text-3xl font-bold">Меню</h2>
            <button onClick={onCloseMobail} className="border rounded-[5px]"><img width={30} height={30} src="./img/close.png"></img></button>
        </div>
    )
}
export default DrawerMobailHeader;