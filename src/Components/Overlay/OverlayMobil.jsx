import DrawerMobailHeader from "./DrawerMobailHeader";
import DrawerMobailMain from "./DrawerMobailMain";

function OverlyMobail ({onCloseMobail}){
    return(
        <div className="overlay_mobail sm:hidden w-full h-full absolute top-0 left-0 right-0 z-10">
            <div className="drawer h-full w-full absolute right-0 bg-black flex flex-col">
                <div className="flex flex-col text-white">
                    <DrawerMobailHeader onCloseMobail = {onCloseMobail}/>
                    <DrawerMobailMain/>
                </div>  
            </div>
        </div>
    )
}
export default OverlyMobail;