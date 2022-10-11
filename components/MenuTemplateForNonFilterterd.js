
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



export default function MenuTemplateForNonFilterterd( {typeForProducts, nameForMenu}) {
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
                    "producttype": typeForProducts,
                    "filtertype": [1]

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

        awdf(4, filters)
    }, [filters])


    const [typeFilters, setTypeFilters] = useState(true)
    const [typeFilter1, setTypeFilter1] = useState(false)
    const [typeFilter2, setTypeFilter2] = useState(false)
    const [typeFilter3, setTypeFilter3] = useState(false)
    useEffect(()=>{
        if(typeFilter1 && typeFilter2 && typeFilter3){
            setTypeFilters(true)
            setTypeFilter1(false)
            setTypeFilter2(false)
            setTypeFilter3(false)
        }
        if(!typeFilter1 && !typeFilter2 && !typeFilter3){
            setTypeFilters(true)
        }
    },[typeFilters,typeFilter1,typeFilter2,typeFilter3])
    return (<>

        <div className="md:p-3 flex flex-row items-center justify-between">
            <div className="text-4xl text-[#FB9347] font-bold md:pl-4">
                {nameForMenu}
            </div>


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