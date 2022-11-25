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
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function DrawerHamburger() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [placement, setPlacement] = useState('left')
    const dispatch = useDispatch()
    const router = useRouter()
    const checkRoute = () => {
        if(router.path !== "/"){
            router.push("/")
        }
    }
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
                                    <h3 onClick={checkRoute} className="flex flex-1 text-[22px] p-4">Меню</h3>
                                    <div className="flex w-10 items-center justify-center">
                                        <div className="border-8 border-transparent border-l-gray-600 ml-2
        group-open:rotate-90 transition-transform origin-left
        "></div>
                                    </div>
                                </summary>
                                <div className="pl-6 pr-2 flex flex-col ">
                                    <span onClick={() => {dispatch(setMenuFilter(1))}} className="my-2 text-[16px]">Бургеры</span>
                                    <span onClick={() => {dispatch(setMenuFilter(2))}} className="my-2 text-[16px]">Суши и роллы</span>
                                    <span onClick={() => {dispatch(setMenuFilter(3))}} className="my-2 text-[16px]">Салаты</span>
                                    <span onClick={() => {dispatch(setMenuFilter(4))}} className="my-2 text-[16px]">Закуски</span>
                                    <span onClick={() => {dispatch(setMenuFilter(5))}} className="my-2 text-[16px]">Супы</span>
                                    <span onClick={() => {dispatch(setMenuFilter(6))}} className="my-2 text-[16px]">Горячее</span>
                                    <span onClick={() => {dispatch(setMenuFilter(7))}} className="my-2 text-[16px]">Детское меню</span>
                                    <span onClick={() => {dispatch(setMenuFilter(8))}} className="my-2 text-[16px]">Пицца</span>
                                    <span onClick={() => {dispatch(setMenuFilter(9))}} className="my-2 text-[16px]">Десерты</span>
                                    <span onClick={() => {dispatch(setMenuFilter(10))}} className="my-2 text-[16px]">Кофе</span>
                                    <span onClick={() => {dispatch(setMenuFilter(11))}} className="my-2 text-[16px]">Напитки на основе кофе</span>
                                    <span onClick={() => {dispatch(setMenuFilter(12))}} className="my-2 text-[16px]">Чай</span>
                                    <span onClick={() => {dispatch(setMenuFilter(13))}} className="my-2 text-[16px]">Свежевыжатые соки</span>
                                    <span onClick={() => {dispatch(setMenuFilter(14))}} className="my-2 text-[16px]">Соки</span>
                                    <span onClick={() => {dispatch(setMenuFilter(15))}} className="my-2 text-[16px]">Газированные напитки</span>
                                    <span onClick={() => {dispatch(setMenuFilter(16))}} className="my-2 text-[16px]">Фирменные безалкогольные напитки</span>
                                    <span onClick={() => {dispatch(setMenuFilter(17))}} className="my-2 text-[16px]">Лимонады</span>
                                    <span onClick={() => {dispatch(setMenuFilter(18))}} className="my-2 text-[16px]">Молочные шейки</span>
                                    <span onClick={() => {dispatch(setMenuFilter(19))}} className="my-2 text-[16px]">Смузи</span>
                                    <span onClick={() => {dispatch(setMenuFilter(20))}} className="my-2 text-[16px]">Мороженное</span>
                                </div>
                            </details>
                            <details className="group pl-4 ">

                                <summary className="list-none flex flex-wrap items-center cursor-pointer
    focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
    rounded group-open:rounded-b-none group-open:z-[1] relative
    ">
                                    <h3 className="flex flex-1 text-[22px] p-4 ">Еще</h3>
                                    <div className="flex w-10 items-center justify-center">
                                        <div className="border-8 border-transparent border-l-gray-600 ml-2
        group-open:rotate-90 transition-transform origin-left
        "></div>
                                    </div>
                                </summary>
                                <div className="pl-6 pr-2 flex flex-col ">
                                    <span className="my-2 text-[16px]"><Link href='/contacts'><a >Контакты</a></Link></span>
                                    <span className="my-2 text-[16px]"><Link href='/vacation'><a >Вакансии</a></Link></span>
                                    <span className="my-2 text-[16px]"><Link href='/about'><a >О компании</a></Link></span>
                                    <span className="my-2 text-[16px]"><Link href='/delivery'><a >Зона доставки</a></Link></span>
                                </div>
                            </details>
                            <details className="group pl-4 ">

                                <summary className="list-none flex flex-wrap items-center cursor-pointer
    focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
    rounded group-open:rounded-b-none group-open:z-[1] relative
    ">                               <div>
                                    <h3 className="flex flex-1 text-[22px] p-2 pl-4 ">Данилов</h3>
                                    <h3 className="flex flex-1 text-[22px] p-2 pl-4 pt-0 "><a href="tel:+79610220220">8-961-022-02-20</a></h3>
                                </div>
                                </summary>

                            </details>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
