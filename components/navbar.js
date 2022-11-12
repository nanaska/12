import NavBarStart from "./NavBarStart";
import NavBarEnd from "./NavBarEnd";
import DeliveryZone from "./DeliveryZone";
import {Link} from 'react-scroll'
import {Popover, PopoverBody, PopoverContent, PopoverTrigger, Portal} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import NavBarMenu from "./NavBarMenu";
import LinkToVacation from "./LinkToVacation";
import DrawerHamburger from "./drawerHamburger";
import Image from "next/image";
import {setMenuFilter} from "../slices/menuSlice";
import {useDispatch, useSelector} from "react-redux";
import LogoMenu from "./LogoMenu";

export default function Navbar() {
    const router = useRouter()
    const [notMenu, setNotMenu] = useState(true)
    const {typeMenuu} = useSelector(state => state.menuSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        if (router.pathname == "/") {
            setNotMenu(false)
        } else {
            setNotMenu(true)
        }
    }, [router.pathname])
    return (<>

            <div className="navbar   md:px-2.5 bg-base-100">
                <div className="navbar-start">
                    <NavBarStart/>
                        <div className="hidden md:flex"> <LogoMenu/>
                    </div>
                    <ul className="menu menu-horizontal p-0  hidden lg:flex">
                        {notMenu && <NavBarMenu/>}
                        {!notMenu && <Popover trigger="hover">
                            <PopoverTrigger>
                                <label
                                    className=" flex group items-center justify-center font-[600] text-[24px] px-5 hover:underline whitespace-nowrap text-black cursor-pointer gap-x-2  border-[#FF8932]">Меню
                                   <div className="items-center flex justify-center group-hover:rotate-180 duration-150 "><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.69183 7.99316L0.343994 6.64948L6.99999 0.00596428L13.656 6.64948L12.3082 7.99316L6.99999 2.69748L1.69183 7.99316Z" fill="#313131"/>
                                </svg></div>
                                </label>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent p={0} m={0}>

                                    <PopoverBody p={0} m={0}>
                                        <ul className=" grid text-center h-[310px] w-[350px] select-none grid-cols-2 mt-3 overflow-y-scroll  items-center place-items-center shadow bg-white border-none  ">
                                            <li className="bg-white p-3 ">
                                                <Link to="BurgersMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Бургеры</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="RollsMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Суши и роллы</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="SalatMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Салаты</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="FionceMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Закуски</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="SoapMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Супы</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="HotMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Горячее</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="KidsMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Детское меню</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="PizzaMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Пиццы</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="DesetMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Десерты</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="CofeMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Кофе</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="DrinksOnCofeMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Напитки на основе кофе</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="TeaMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Чай</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="FreshJuicyMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Свежевыжатые соки</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="JuicyMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Соки</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="FizzyMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Газированные напитки</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="NonAlcoholMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Фирменные безалкогольные коктейли</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="LemonadesMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Лимонады</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="MilkShakeMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Молочные шейки</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="SmizyMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Смузи</span>
                                                </Link>
                                            </li>
                                            <li className="bg-white p-3 ">
                                                <Link to="IceCreamMenu" spy={true} smooth={true} offset={-80}
                                                      duration={500}>
                                                    <span
                                                        className="text-[18px] cursor-pointer hover:underline">Мороженное</span>
                                                </Link>
                                            </li>

                                        </ul>
                                    </PopoverBody>

                                </PopoverContent>
                            </Portal>
                        </Popover>}

                        <Popover trigger="hover">
                            <PopoverTrigger>
                                <label
                                    className=" flex group gap-x-2 items-center justify-center font-[600] text-[24px] px-5 hover:underline whitespace-nowrap text-black cursor-pointer   border-[#FF8932]">Ещё <div className="items-center flex justify-center group-hover:rotate-180 duration-150 "><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.69183 7.99316L0.343994 6.64948L6.99999 0.00596428L13.656 6.64948L12.3082 7.99316L6.99999 2.69748L1.69183 7.99316Z" fill="#313131"/>
                                </svg></div></label>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent p={0} m={0}>

                                    <PopoverBody p={0} m={0}>
                                        <LinkToVacation/>

                                    </PopoverBody>

                                </PopoverContent>
                            </Portal>
                        </Popover>
                    </ul>
                </div>
                <div className="navbar-center md:hidden flex justify-center items-center">
                            <LogoMenu/>

                </div>
                <div className="navbar-end  flex flex-row space-x-1">
                    <NavBarEnd/>
                </div>

            </div>
        </>
    )
}