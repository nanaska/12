
import BusketMenu from "../components/BusketMenu";
import {Container} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setMenuFilter } from "../slices/menuSlice";
import { useEffect } from "react";
import Head from "next/head";

export default function Busket() {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(setMenuFilter(0))},[])
    return (<div className="flex items-center justify-center">
    <Container maxWidth={1580} p={0} m={0} >
        <Head>
            <title>О компании</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <BusketMenu/>

        </Container>
    </div>)
}