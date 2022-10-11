import Link from "next/link";

export default function LinkToVacation() {
    return (
        <ul className=" grid select-none grid-cols-1  items-center place-items-center shadow bg-white border-none  ">
            <li className="text-[18px] py-2 cursor-pointer hover:underline"><Link href="/contacts">
                                                <span
                                                    className="text-[18px] py-2 cursor-pointer hover:underline">Контакты</span>
            </Link></li>
            <li className="text-[18px] py-2 cursor-pointer hover:underline"><Link href="/vacation">

                                                    <span
                                                        className="text-[18px] py-2 cursor-pointer hover:underline">Вакансии</span>

            </Link></li>
            <li className="text-[18px] py-2 cursor-pointer hover:underline"><Link href="/about">
                <span className="text-[18px] py-2 cursor-pointer hover:underline">О компании</span></Link>
            </li>
            <li className="text-[18px] py-2 cursor-pointer hover:underline"><Link href="/delivery">
                <span className="text-[18px] py-2 cursor-pointer hover:underline">Зона доставки</span></Link>
            </li>

        </ul>
    )
}