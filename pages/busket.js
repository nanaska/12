
import BusketMenu from "../components/BusketMenu";
import {Container} from "@chakra-ui/react";


export default function Busket() {


    return (<div className="flex items-center justify-center">
    <Container maxWidth={1580} p={0} m={0} >

        <BusketMenu/>

        </Container>
    </div>)
}