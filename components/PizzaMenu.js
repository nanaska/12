import {useEffect, useState} from "react";
import ItemCart from "./itemCart";
import {useDispatch, useSelector} from "react-redux";
import {clearFilter, doFilter} from "../slices/busketSlice"
import {
    CircularProgress,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Portal,
} from "@chakra-ui/react";



export default function PizzaMenu() {
    const [content, setContent] = useState([])
    const dispatch = useDispatch()
    const {filters} = useSelector(state => state.busketSlice)
    function filterFunction(filterType) {

        if (filterType === 0) {
            dispatch(clearFilter())
        }
        if (filterType > 0) {
            dispatch(doFilter(filterType))
        }
    }

    const awdf = async (type, filters) => {
        if (filters.length !== 0) {

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "producttype": type,

                    "filtertype": [filters]
                })
            }

            fetch('api/findexactproduct', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setContent(data)
                });
        }
        if (filters.length === 0) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "producttype": type,
                    "filtertype": [1,2,3,4,5,6]

                })
            }
            fetch('api/findexactproduct', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setContent(data)
                });
        }


    }
    useEffect(() => {

        awdf(8, filters)
    }, [filters])


    const [typeFilters, setTypeFilters] = useState(true)
    const [typeFilter1, setTypeFilter1] = useState(false)
    const [typeFilter2, setTypeFilter2] = useState(false)
    const [typeFilter3, setTypeFilter3] = useState(false)
    const [typeFilter4, setTypeFilter4] = useState(false)
    const [typeFilter5, setTypeFilter5] = useState(false)
    useEffect(()=>{
        if(typeFilter1 && typeFilter2 && typeFilter3 && typeFilter4 && typeFilter5){
            setTypeFilters(true)
            setTypeFilter1(false)
            setTypeFilter2(false)
            setTypeFilter3(false)
            setTypeFilter4(false)
            setTypeFilter5(false)
        }
        if(!typeFilter1 && !typeFilter2 && !typeFilter3 && !typeFilter4 && !typeFilter5){
            setTypeFilters(true)
        }
    },[typeFilters,typeFilter1,typeFilter2,typeFilter3,typeFilter4,typeFilter5])
    return (<>

        <div className="md:p-3 flex flex-row items-center justify-between">
            <div className="text-4xl text-[#FB9347] font-bold md:pl-4">
                Пицца
            </div>

            <Popover>
                <PopoverTrigger>
                    <label  className="md:px-[50px] px-4 py-1 text-black cursor-pointer border border-2 rounded-[90px]  border-[#FF8932]">Фильтр пицц</label>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent p={0} m={2}>

                        <PopoverBody  p={0} m={0} >
                            <ul  className=" grid  grid-cols-1  items-center menu shadow bg-white">
                                <li onClick={() => {
                                    setTypeFilter1(false)
                                    setTypeFilter2(false)
                                    setTypeFilter3(false)
                                    setTypeFilter4(false)
                                    setTypeFilter5(false)
                                    setTypeFilters(true)
                                    filterFunction(0)
                                }}><div className={typeFilters ? "w-full flex items-center justify-start " :"w-full flex items-center justify-start  hover:underline"}><div className={typeFilters ? "rounded-[90px] p-1 border border-[#000] border-2 bg-[#FF8932]" :"rounded-[90px] p-1 border border-[#000] border-2"}></div>Всё</div></li>
                                <li onClick={() => {
                                    setTypeFilter1(!typeFilter1)
                                    setTypeFilters(false)
                                    filterFunction(1)
                                }}><a className={typeFilter1 ? "w-full flex items-center justify-start " :"w-full flex items-center justify-start  hover:underline"}><div className={typeFilter1 ? "rounded-[90px] p-1 border border-[#000] border-2 bg-[#FF8932]" :"rounded-[90px] p-1 border border-[#000] border-2"}></div>Популярные</a></li>
                                <li onClick={() => {
                                    setTypeFilter2(!typeFilter2)
                                    setTypeFilters(false)
                                    filterFunction(2)
                                }}><a className={typeFilter2 ? "w-full flex items-center justify-start " :"w-full flex items-center justify-start  hover:underline"}><div className={typeFilter2 ? "rounded-[90px] p-1 border border-[#000] border-2 bg-[#FF8932]" :"rounded-[90px] p-1 border border-[#000] border-2"}></div>Острые</a></li>
                                <li onClick={() => {
                                    setTypeFilter3(!typeFilter3)
                                    setTypeFilters(false)
                                    filterFunction(3)
                                }}><a className={typeFilter3 ? "w-full flex items-center justify-start " :"w-full flex items-center justify-start  hover:underline"}><div className={typeFilter3 ? "rounded-[90px] p-1 border border-[#000] border-2 bg-[#FF8932]" :"rounded-[90px] p-1 border border-[#000] border-2"}></div>Без лука</a></li>
                                <li onClick={() => {
                                    setTypeFilter4(!typeFilter4)
                                    setTypeFilters(false)
                                    filterFunction(4)
                                }}><a className={typeFilter4 ? "w-full flex items-center justify-start " :"w-full flex items-center justify-start  hover:underline"}><div className={typeFilter4 ? "rounded-[90px] p-1 border border-[#000] border-2 bg-[#FF8932]" :"rounded-[90px] p-1 border border-[#000] border-2"}></div>С копченостями</a></li>
                                <li onClick={() => {
                                    setTypeFilter5(!typeFilter5)
                                    setTypeFilters(false)
                                    filterFunction(5)
                                }}><a className={typeFilter5 ? "w-full flex items-center justify-start " :"w-full flex items-center justify-start  hover:underline"}><div className={typeFilter5 ? "rounded-[90px] p-1 border border-[#000] border-2 bg-[#FF8932]" :"rounded-[90px] p-1 border border-[#000] border-2"}></div>С грибами</a></li>

                            </ul>
                        </PopoverBody>

                    </PopoverContent>
                </Portal>
            </Popover>
        </div>
        {content.length == 0 && <div
            className="flex items-center justify-center min-h-150px">
           <div> <CircularProgress value={30}  className="animate-spin "  color='orange.400' size='120px' /></div>


        </div>
}
        {content.length > 0 && <div
            className="grid grid-cols-1 gap-4 mt-4 min-h-[200px] place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5">


            {content !== undefined && content.map((content, index) =>

                (<ItemCart id={content.id} description={content.description} key={index} img={content.img}
                           price={content.price} title={content.title} weight={content.weight}/>))}


        </div>}
    </>)
}