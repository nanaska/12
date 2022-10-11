import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,

    useDisclosure,
} from '@chakra-ui/react'


import {useState} from "react";
import {setMenuFilter} from "../slices/menuSlice";
import {useDispatch} from "react-redux";

export default function DrawerHamburger() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [placement, setPlacement] = useState('left')
    const dispatch = useDispatch()
    return (
        <div className="md:hidden">

            <Button colorScheme='blue' onClick={onOpen}>
                <label tabIndex="0" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                </label>
            </Button>
            <Drawer placement={placement} onClose={onClose} size={`xs`} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent>

                    <DrawerHeader borderBottomWidth='1px' className="flex items-center ">Меню <DrawerCloseButton
                        className="text-orange-600"/></DrawerHeader>
                    <DrawerBody m={0} p={0}>
                        <div className="divide-y-2">
                            <div className="flex w-full"></div>
                            <details className="group pl-4 ">

                                <summary className="list-none flex flex-wrap items-center cursor-pointer
    focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
    rounded group-open:rounded-b-none group-open:z-[1] relative
    ">
                                    <h3 className="flex flex-1 text-[22px] p-4 font-semibold">Меню</h3>
                                    <div className="flex w-10 items-center justify-center">
                                        <div className="border-8 border-transparent border-l-gray-600 ml-2
        group-open:rotate-90 transition-transform origin-left
        "></div>
                                    </div>
                                </summary>
                                <div className="pl-6 pr-2 flex flex-col ">
                                    <span onClick={() => {dispatch(setMenuFilter(1))}} className="my-2 text-[16px]">Пицца</span>
                                    <span onClick={() => {dispatch(setMenuFilter(2))}} className="my-2 text-[16px]">Суши</span>
                                    <span className="my-2 text-[16px]">Горячее</span>
                                </div>
                            </details>
                            <details className="group pl-4 ">

                                <summary className="list-none flex flex-wrap items-center cursor-pointer
    focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
    rounded group-open:rounded-b-none group-open:z-[1] relative
    ">
                                    <h3 className="flex flex-1 text-[22px] p-4 font-semibold">Меню</h3>
                                    <div className="flex w-10 items-center justify-center">
                                        <div className="border-8 border-transparent border-l-gray-600 ml-2
        group-open:rotate-90 transition-transform origin-left
        "></div>
                                    </div>
                                </summary>
                                <div className="pl-6 pr-2 flex flex-col ">
                                    <span className="my-2 text-[16px]">Пицца</span>
                                    <span className="my-2 text-[16px]">Суши</span>
                                    <span className="my-2 text-[16px]">Горячее</span>
                                </div>
                            </details>
                            <div className="flex w-full"></div>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
