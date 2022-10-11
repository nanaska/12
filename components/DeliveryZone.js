import Link from "next/link";

export default function DeliveryZone(){
    return( <div className="flex items-center justify-center font-[600] text-[24px] px-5 hover:underline whitespace-nowrap text-black cursor-pointer   border-[#FF8932]">
        <Link href="/delivery"><a className="">Зона доставки</a></Link>

    </div>)
}