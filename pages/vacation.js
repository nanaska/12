import Barmen from "../components/Barmen";
import Interpreter from "../components/Interpreter";
import Uborshicha from "../components/Uborshicha";
import {Container} from "@chakra-ui/react";

export default function Vacation() {
    return (
        <Container maxWidth={1580}>
            <div className="mr-auto"><span className="text-[34px] font-bold">Вакансии</span></div>
            <div className="flex items-center justify-center min-h-[55vh]">

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:mt-8 space-x-2 items-center justify-center">
            <Barmen/>
            <Interpreter/>
            <Uborshicha/>
        </div>
    </div></Container>)
}