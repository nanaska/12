import {Popover, PopoverBody, PopoverContent, PopoverTrigger, Portal} from "@chakra-ui/react";
import Link from "next/link";

export default function NavBarMenu(){
    return(<Link href="/">


                <label  className=" flex items-center justify-center font-[600] text-[24px] px-5 hover:underline whitespace-nowrap text-black cursor-pointer   border-[#FF8932]">Меню</label>


    </Link>)
}