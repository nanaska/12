import DrawerHamburger from "./drawerHamburger";
import Link from "next/link";
import {setMenuFilter} from "../slices/menuSlice";
import {useDispatch, useSelector} from "react-redux";
import logo from "../public/logosagay.svg";
import Image from "next/image";

export default function NavBarStart(){
    const {typeMenuu} = useSelector(state => state.menuSlice)
    const dispatch = useDispatch()
    return(<>


            {typeMenuu == 0 && <>
                <div className="dropdown">

                    <DrawerHamburger/>

                </div>
                <Link href="/"><div className="px-1 hover:bg-[#AAAA] rounded duration-75">
                    <Image src="/vectorpaint.png" width={192} height={60}/>
                </div></Link>
            </>}
            {typeMenuu !== 0 && <div>
                <div className="ml-5 flex items-center justify-center"
                     onClick={() => dispatch(setMenuFilter(0))}>
                    <div className="border-[12px] border-transparent border-l-gray-600 ml-2
        rotate-180 transition-transform origin-left
        "></div>
                    <Link href="/"><div className="p-2 hover:bg-[#AAAA] rounded duration-75">
                        <Image src="/vectorpaint.png" width={180} height={60}/>

                    </div></Link>
                </div>

            </div>}



    </>)
}