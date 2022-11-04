
import BusketMenu from "../components/BusketMenu";
import {Container} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setMenuFilter } from "../slices/menuSlice";
import { useEffect } from "react";

export default function Busket() {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(setMenuFilter(0))},[])
    return (<div className="flex items-center justify-center">
    <Container maxWidth={1580} p={0} m={0} >

        <BusketMenu/>

        </Container>
    </div>)
}