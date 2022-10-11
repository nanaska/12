import Image from "next/image";
import {useDispatch} from "react-redux";
import {setMenuFilter} from "../slices/menuSlice";

export default function CardForPhoneMenu({bgColor,text,click, imgType}) {
    const dispatch = useDispatch()
    return (<div onClick={() => {dispatch(setMenuFilter(click))}} className={`flex block ${bgColor} rounded-[16px] min-h-[150px] flex-col items-center justify-center`}>
        <div className="mt-3 ">
            <Image src={`/${imgType}`}  height={110} width={125} quality={100}/>
        </div>
        <div className="text-white text-[18px] mb-2 mt-0 font-[300]">
            {text}
        </div>
    </div>)
}