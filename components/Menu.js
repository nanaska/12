import PizzaMenu from "./PizzaMenu";
import RollsMenu from "./RollsMenu"
import {useEffect, useState} from "react";
import CardForPhoneMenu from "./CardForPhoneMenu";
import { useSelector} from "react-redux";
import {AnimatePresence, motion} from "framer-motion";

import MenuTemplateForNonFilterterd from "./MenuTemplateForNonFilterterd";

export default function Menu() {
    const [width, setWidth] = useState()


    const {typeMenuu} = useSelector(state => state.menuSlice)
    function checkWidth(){
        if(typeof window !== "undefined") {
            setWidth(window.innerWidth)

        }
    }

    useEffect(()=>{
        if(typeof window !== "undefined") {
        window.addEventListener('resize', checkWidth)
        const a = window.innerWidth
            setWidth(a)
        return () => {
            window.removeEventListener('resize', checkWidth)
        }}

    },[])
    return (<div className="md:p-0">

        {typeMenuu == 0 && width < 768 && <AnimatePresence> <motion.div initial={{opacity: 0, x: -1000}} transition={{
            duration: .5,  type: "tween"}
        } animate={{opacity: 1, x:0}} exit={{opacity: 0, x:1000}}>

            <div className=" grid  place-content-stretch grid-cols-2 grid-rows-18  gap-2">

                <CardForPhoneMenu imgType="hamburger.png" click={1} text="Бургеры" bgColor="bg-[#4F85B6]"/>
                <CardForPhoneMenu imgType="rollspng.png" click={2} text="Суши и роллы" bgColor="bg-[#B440DD]"/>
                <CardForPhoneMenu imgType="salats.png" click={3} text="Салаты" bgColor="bg-[#91BB5B]"/>
                <CardForPhoneMenu imgType="zakuski.png" click={4} text="Закуски" bgColor="bg-[#D27643]"/>

            </div>
        </motion.div>
        </AnimatePresence>}
        {typeMenuu == 1 && width < 768 &&   <AnimatePresence> <motion.div initial={{opacity: 0, x: -1000}} transition={{
        duration: .5,
            type: "tween"}
        } animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-1000}}>


                <PizzaMenu/>


        </motion.div> </AnimatePresence>}
        {typeMenuu == 2 && width < 768 &&   <AnimatePresence> <motion.div initial={{opacity: 0, x: -1000}} transition={{
            duration: .5,
            type: "tween"}
        } animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-1000}}>



            <RollsMenu/>

        </motion.div> </AnimatePresence>}
        {width > 768 && <>
            <div name="BurgersMenu"><MenuTemplateForNonFilterterd typeForProducts={1} nameForMenu={`Бургеры`}/></div>
            <div name="RollsMenu"><RollsMenu/></div>
            <div name="SalatMenu"><MenuTemplateForNonFilterterd typeForProducts={3} nameForMenu={`Салаты`}/></div>
            <div name="FionceMenu"><MenuTemplateForNonFilterterd typeForProducts={4} nameForMenu={`Закуски`}/></div>
            <div name="SoapMenu"><MenuTemplateForNonFilterterd typeForProducts={5} nameForMenu={`Супы`}/></div>
            <div name="HotMenu"><MenuTemplateForNonFilterterd typeForProducts={6} nameForMenu={`Горячее`}/></div>
            <div name="KidsMenu"><MenuTemplateForNonFilterterd typeForProducts={7} nameForMenu={`Детское меню`}/></div>
            <div name="PizzaMenu"><PizzaMenu/></div>
            <div name="DesetMenu"><MenuTemplateForNonFilterterd typeForProducts={9} nameForMenu={`Десерты`}/></div>
            <div name="CofeMenu"><MenuTemplateForNonFilterterd typeForProducts={10} nameForMenu={`Кофе`}/></div>
            <div name="DrinksOnCofeMenu"><MenuTemplateForNonFilterterd typeForProducts={11} nameForMenu={`Напитки на основе кофе`}/></div>
            <div name="TeaMenu"><MenuTemplateForNonFilterterd typeForProducts={12} nameForMenu={`Чай`}/></div>
            <div name="FreshJuicyMenu"><MenuTemplateForNonFilterterd typeForProducts={13} nameForMenu={`Свежевыжатые соки`}/></div>
            <div name="JuicyMenu"><MenuTemplateForNonFilterterd typeForProducts={14} nameForMenu={`Соки`}/></div>
            <div name="FizzyMenu"><MenuTemplateForNonFilterterd typeForProducts={15} nameForMenu={`Газированные напитки`}/></div>
            <div name="NonAlcoholMenu"><MenuTemplateForNonFilterterd typeForProducts={16} nameForMenu={`Фирменные безалкогольные коктейли`}/></div>
            <div name="LemonadesMenu"><MenuTemplateForNonFilterterd typeForProducts={17} nameForMenu={`Лимонады`}/></div>
            <div name="MilkShakeMenu"><MenuTemplateForNonFilterterd typeForProducts={18} nameForMenu={`Молочные шейки`}/></div>
            <div name="SmizyMenu"><MenuTemplateForNonFilterterd typeForProducts={19} nameForMenu={`Смузи`}/></div>
            <div name="IceCreamMenu"><MenuTemplateForNonFilterterd typeForProducts={20} nameForMenu={`Мороженное`}/></div>


        </>}


    </div>)
}



