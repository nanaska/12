import Image from "next/image";
import Garbage from "../public/Garbage.svg";
import Link from "next/link";
import {useSelector} from "react-redux";

export default function NavBarEnd(){
    const {items} = useSelector(state => state.busketSlice)
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    return(<Link href="/busket">
        <div
            className="hover:bg-base-300 flex flex-row items-center justify-center rounded p-2 cursor-pointer">
            <div className="flex  flex items-center justify-center">
                {items.length > 0  && <div className="absolute ml-5 mb-5 z-20">
                    <div
                        className="rounded-[90px] px-[7px] py-[0px]  bg-orange-300 text-white">{totalCount}</div>

                </div>}
                <Image className="" alt="Корзина" src={Garbage} height={40} width={40}/>
            </div>
            <a className="hidden  md:flex items-center justify-center text-xl font-medium">Корзина</a>
        </div>
    </Link>)
}