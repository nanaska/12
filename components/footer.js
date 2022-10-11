import footer from "../public/footersvg.svg"
import Image from "next/image";
import {Container} from "@chakra-ui/react";
import styles from "./footer.module.css"
import Link from "next/link";

export default function Footer() {
    return (<div className={`${styles.imgg} `}>

            <div className="flex  select-none text-[#4B4A4A] items-center justify-center min-h-[320px]">
                <Container
                    className=" flex flex-col  md:flex-row  items-center text-center md:text-start md:items-start  justify-center"
                    maxWidth={1580}>
                    <div className=" rounded p-4  flex flex-col md:flex-row">
                        <div className="p-2 flex flex-col  justify-start">
                            <div className="text-[24px] flex items-center justify-center mb-4">МЕНЮ</div>
                            <div className=" space-x-4">
                                <ul className="grid grid-cols-2 gap-2">
                                    <li className='cursor-pointer py-0.5 font-[500]'>Пицца</li>
                                    <li className='cursor-pointer py-0.5 font-[500]'>Пицца</li>
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