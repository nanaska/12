import { setMenuFilter } from "../slices/menuSlice";
import {Container} from "@chakra-ui/react";
import styles from "./footer.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function Footer() {
    const router = useRouter()
    const dispatch = useDispatch()
    const checkRoute = () => {
        if(router.path !== "/"){
            router.push("/")
        }
    }
    return (<div className={`${styles.imgg} `}>

            <div className="flex  select-none text-[#4B4A4A] items-center justify-center min-h-[320px]">
                <Container
                    className=" flex flex-col  md:flex-row  items-center text-center md:text-start md:items-start  justify-center"
                    maxWidth={1580}>
                    <div className=" rounded p-4  flex flex-col md:flex-row">
                        <div className="p-2 flex flex-col  justify-start">
                            <div className="text-[24px] flex items-center justify-center mb-4">МЕНЮ</div>
                            <div className=" space-x-4">
                                <ul className="grid grid-cols-2  gap-y-2 gap-x-0">
                                <span onClick={() => {dispatch(setMenuFilter(1))
                                checkRoute()}} className="my-2 text-[16px]">Бургеры</span>
                                    <li><span onClick={() => {dispatch(setMenuFilter(2))
                                    checkRoute()}} className="my-2 text-[16px]">Суши и роллы</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(3))
                                    checkRoute()}} className="my-2 text-[16px]">Салаты</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(4))
                                    checkRoute()}} className="my-2 text-[16px]">Закуски</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(5))
                                    checkRoute()}} className="my-2 text-[16px]">Супы</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(6))
                                    checkRoute()}} className="my-2 text-[16px]">Горячее</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(7))
                                    checkRoute()}} className="my-2 text-[16px]">Детское меню</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(8))
                                    checkRoute()}} className="my-2 text-[16px]">Пицца</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(9))
                                    checkRoute()}} className="my-2 text-[16px]">Десерты</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(10))
                                    checkRoute()}} className="my-2 text-[16px]">Кофе</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(11))
                                    checkRoute()}} className="my-2 text-[16px]">Напитки на основе кофе</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(12))
                                    checkRoute()}} className="my-2 text-[16px]">Чай</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(13))
                                    checkRoute()}} className="my-2 text-[16px]">Свежевыжатые соки</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(14))
                                    checkRoute()}} className="my-2 text-[16px]">Соки</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(15))
                                    checkRoute()}} className="my-2 text-[16px]">Газированные напитки</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(16))
                                    checkRoute()}} className="my-2 text-[16px]">Фирменные безалкогольные напитки</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(17))
                                    checkRoute()}} className="my-2 text-[16px]">Лимонады</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(18))
                                    checkRoute()}} className="my-2 text-[16px]">Молочные шейки</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(19))
                                    checkRoute()}} className="my-2 text-[16px]">Смузи</span></li>
                                    <li><span onClick={() => {dispatch(setMenuFilter(20))
                                    checkRoute()}} className="my-2 text-[16px]">Мороженное</span></li>
                                </ul>

                            </div>
                        </div>


                        <div className="divider divider-horizontal md:divider-horizontal w-[1%]"></div>
                        <div className="p-2 flex flex-col  justify-start">
                            <div className="text-[24px] flex items-center justify-center mb-4">ЕЩЁ</div>
                            <div className="flex flex-col space-x-4">
                                <ul className="grid text-center grid-cols-1 gap-2">

                                    <li className="cursor-pointer font-[500]"><Link href="/contacts">
                                               Контакты
                                    </Link></li>
                                    <li className="cursor-pointer font-[500]"><Link href="/vacation">
                                        Вакансии
                                    </Link></li>
                                    <li className="cursor-pointer font-[500]"><Link href="/about">
                                        О компании
                                    </Link></li>
                                    <li className="cursor-pointer font-[500]"><Link href="/delivery">
                                        Зона доставки
                                    </Link></li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    )
}