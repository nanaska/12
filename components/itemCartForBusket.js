import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {addItem, minusItem, removeItem} from "../slices/busketSlice";
import { motion, AnimatePresence } from "framer-motion"
export default function ItemCartForBusket({id, title,price,img,description, weight}){
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.busketSlice.items.find(obj => obj.id === id)) || 0
    const onClickAdd = (id,title,price,img,weight) => {
        const item = {
            id,
            title,
            price,
            img,
            weight
        }
        dispatch(addItem(item))
    }

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
    return(


            <div

                className="flex relative  md:w-[250px]  2xl:p-0    h-full w-full  rounded  flex-row md:flex-col items-center justify-center">
                <div className="flex items-center h-[200px] w-[350px] justify-center w-[50%] md:w-full">
                    <Image className="" src={img} alt={title} height={180} width={380}/>
                </div>
                <div className="absolute top-1 right-2 ">
                    <span className="font-[400] text-[18px] text-[#CBCBCB]">{weight} Г</span>
                </div>
                <div className="flex  items-start md:items-center justify-start flex-col pr-2 w-[50%] md:w-full">
                    <div className="flex  items-center  font-normals justify-center text-center md:text-center font-normal sm:text-[24px] text-[16px]"><h3>{title}</h3></div>
                    <div className="flex items-center justify-between  w-full md:px-2">
                        <div className="md:p-0  sm:ml-0 sm:px-0 flex items-center justify-start md:justify-center whitespace-nowrap rounded text-[#313131] sm:text-[22px] text-[22px]">{price} ₽</div>
                        {count === undefined && <div className="outline outline-2  outline-[#FF8932] text-[18px] md:text-[18px] my-2 px-3 mx-1 py-2 md:px-4  whitespace-nowrap   text-black  duration-75 active:scale-105 select-none  flex justify-center  hover:text-white items-center hover:bg-[#FF8932] rounded-[90px]" onClick={()=> onClickAdd(id,title,price,img) }>Выбрать {count}</div>}
                        {count !== undefined && count > 0 &&
                            <div className="flex w-[93px]  sm:w-[118px] items-center justify-center  border-solid border-2 my-2 select-none rounded-[180px]  border-[#FF8932] ">
                                <div className=" flex text-[18px] items-center  cursor-pointer justify-center py-1  w-[40px] h-[10px] px-3"
                                     onClick={onClickMinus}>
                                    -
                                </div>
                                <div className="bg-[#FF8932] rounded-[180px] text-white text-[18px] md:text-[22px] py-1 px-3 md:px-4">{count}</div>
                                <div className=" flex text-[18px]    items-center cursor-pointer  justify-center py-1 w-[40px] h-[10px] px-3"
                                     onClick={onClickPlus}>
                                    +
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        )
}