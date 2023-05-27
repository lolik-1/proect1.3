function Header ({onClickOpenDrawerMobail, onClickOpenDrawer,}){
    return(
        <nav>
            <div className="container m-auto xl:px-10 px-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src="./img/icons8-nike-100.png"></img>
                </div>
                    <img onClick={onClickOpenDrawerMobail} className="sm:hidden" src="./img/icons8-меню-50.png "></img>
                <div className="gap-4 hidden sm:flex ">
                    <img onClick={onClickOpenDrawer} src="./img/drawer.png"></img>
                </div>
            </div>
        </nav>
    )
}

export default Header;