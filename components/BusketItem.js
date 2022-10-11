import {addItem, minusItem, removeItem} from "../slices/busketSlice";
import {useDispatch} from "react-redux";
import Image from "next/image"

export default function BusketItem({id, title, price, count, img}) {
    const dispatch = useDispatch()
    const onClickPlus = () => {
        dispatch(addItem({
            id,
        }))
    }
    const onClickMinus = () => {
        dispatch(minusItem(id))
    }
    const onRemoveItem = () => {
        dispatch(removeItem(id))
    }
    return (
        <div className="flex mt-2  items-center  w-full 2xl:w-full justify-between">

            <div className="text-lg sm:text-[24px] ml-0.5 font-[500]"> {title} </div>
            <div className="flex flex-nowrap">
                <div className="flex flex-col w-full items-center justify-center md:flex-row">

                    <div
                        className="flex w-[118px] items-center  border-solid border-2 select-none rounded-[180px]  border-[#FF8932] ">

                        <div className=" flex text-[18px]  items-center cursor-pointer  justify-center   "
                             onClick={onClickMinus}>
                            <div className="p-3 flex items-center justify-center">
                                <Image src={`/minus.svg`} width={30} height={30}/>
                            </div>
                        </div>
                        <div
                            className="bg-[#FF8932] rounded-[180px] text-white text-[18px] md:text-[22px] py-1 px-3 md:px-4">{count}</div>
                        <div className=" flex text-[18px]  items-center cursor-pointer  justify-center   "
                             onClick={onClickPlus}>
                            <div className="p-2.5 flex items-center justify-center">
                                <Image src={`/plus.svg`} width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-[60px] mt-1 ml-2">
                        <div className="max-h-[40px] text-[16px] md:text-[18px]">  {price * count} ₽</div>
                    </div>
                </div>
                <div className="text-2xl  hidden md:flex hover:scale-110 " onClick={onRemoveItem}>
                    <Image src={`/remove.svg`} height={60} width={60}/>
                </div>
            </div>
        </div>
    )
}