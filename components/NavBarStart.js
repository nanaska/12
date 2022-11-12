import DrawerHamburger from "./drawerHamburger";

import {setMenuFilter} from "../slices/menuSlice";
import {useDispatch, useSelector} from "react-redux";


export default function NavBarStart(){
    const {typeMenuu} = useSelector(state => state.menuSlice)
    const dispatch = useDispatch()
    return(<>


            {typeMenuu == 0 && <>
                <div className="dropdown">

                    <DrawerHamburger/>


                </div>

            </>}
            {typeMenuu !== 0 && <div>
                <div className="ml-5 flex items-center justify-center"
                     onClick={() => dispatch(setMenuFilter(0))}>
                    <div className="border-[12px] border-transparent border-l-gray-600 ml-2
        rotate-180 transition-transform origin-left
        "></div>


                </div>

            </div>}



    </>)
}