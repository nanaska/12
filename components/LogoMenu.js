import Image from "next/image";
import Link from "next/link";

export default function LogoMenu(){
     return(<>
         <Link href="/"><div className="px-1 flex  hover:bg-[#AAAA] rounded duration-75">
             <Image src="/vectorpaint.png" alt="Лого Сагай Палермо" width={150} height={60}/>
         </div></Link>

     </>)
}