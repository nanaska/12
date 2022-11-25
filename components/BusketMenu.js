import {useDispatch, useSelector} from "react-redux";
import BusketItem from "./BusketItem";
import {clearItems} from "../slices/busketSlice";
import Image from "next/image";

import {authentication} from "../config/firebase";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";

import {RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";

import {
    Alert,
    AlertIcon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure
} from '@chakra-ui/react'

import SimpleSlider from "./SimpleSlider";
import Link from "next/link";
import {setPromoCheck} from "../slices/menuSlice";


export default function BusketMenu({}) {
    const [ad, setAD] = useState(true)
    const [ac, setAc] = useState(true)
    const dispatch = useDispatch()
    const [agree, setAgree] = useState(false)
    const [change, setChange] = useState("")
    const [phone, setPhone] = useState("+7")

    const [statusOfPromoCode, setStatusOfPromocode] = useState(null)
    const [titleOfPromoCode, setTitleOfPromoCode] = useState("")

    const [code, setCode] = useState("")
    const [agrement, setAgrement] = useState(false)
    const [formData, setFormData] = useState(null)
    const [expandForm, setExpandForm] = useState(true)
    const [visible, setVisible] = useState(false)
    const [del, setDel] = useState(true)
    const [m, setM] = useState(false)
    const {totalPrice, items} = useSelector(state => state.busketSlice)
    const {promoChecker} = useSelector(state => state.menuSlice)
    const [ale, setAle] = useState(false)
    const onDeleteItems = () => {
        dispatch(clearItems())
    }

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const {isOpen, onOpen, onClose} = useDisclosure()

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.

            }
        }, authentication);
    }

    useEffect(()=> {setTitleOfPromoCode(titleOfPromoCode.toUpperCase())},[titleOfPromoCode])
    const onSubmit = async e => {
        if (items.length === 0) {
            return alert("Вы не выбрали товар")
        }
        setFormData(e)
        if (!agree) {
            return alert("Вы не ознакомились с условиями публичной оферты")
        }
        if (phone.length >= 12) {

            generateRecaptcha()
            let appVerifier = window.recaptchaVerifier
            signInWithPhoneNumber(authentication, phone, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult
                }).catch(e => console.log(e))

            onOpen()
        } else if (phone.length < 12) {
            alert("Неправильный формат телефона")
        }


    }
    const checkPromoCode = async (jopa) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                promo: jopa,
            })
        }

        await fetch('api/checkpromo', requestOptions)
            .then(response => response.json())
            .then(dataa => {
                if(dataa.msg === true){
                    setStatusOfPromocode(true)
                    dispatch(setPromoCheck(dataa.desc))
                    console.log(promoChecker)
                }
                if(dataa.msg === false){
                    setStatusOfPromocode(false)

                }

            });
    }
    async function fet() {
        const newFormat = Object.values(items).map(elem => elem.title + " " + "x" + elem.count + " " + elem.price * elem.count + "Р").join("\n")
        let place = ""
        let payaproach = ""
        let time = ""
        if (del == true) place = "Доставка на дом"
        if (del == false) place = "Клиент заберет товар в ресторане"
        if (ad == false) payaproach = "Картой при получении"
        if (ad == true) payaproach = "Наличными"
        if (ac == true) time = "Как можно быстрее"
        if (ac == false) time = "Ко времени"

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                items,
                totalPrice,
                data: formData,
                place,
                change,
                promoDesc: promoChecker,
                time,
                payaproach

            })
        }

        await fetch('api/message', requestOptions)
            .then(response => response.json())
            .then(dataa => {
                console.log(dataa)
            });

        setAle(true)

        function adawdsf() {
            setAle(false)
        }

        setTimeout(adawdsf, 10000)
    }

    const createPhoneNumber = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                number: phone

            })
        }
        await fetch('api/createnumber', requestOptions)
            .then(response => response.json())
            .then(dataa => {

            });
    }
    const handleSignupForCode = async (e) => {


        let confirmationResult = window.confirmationResult
        confirmationResult.confirm(code).then(async (result) => {
            // User signed in successfully.
            const user = result.user;

            await fet()

            setExpandForm(false)
            setAgrement(true)
            onClose()

        }).catch((error) => {
            alert("Неправильный код")

        });


    }
    useEffect(() => {
        if (phone[1] !== "7") {
            setPhone("+7")
            console.log(7)
        }
        if (phone[0] !== "+") {
            setPhone("+7")
            console.log("+")
        }
    }, [phone])
    return (<div>
        <div className="items-center justify-center flex flex-col ">
            <div className="w-full mx-0 flex px-2 md:px-6 flex-col">

                <div className="flex  items-center justify-center  py-2">
                    {items.length > 0 && <div className="flex w-full items-center ">
                        <div className="text-3xl font-bold">Корзина</div>
                        <div className="cursor-pointer ml-auto  select-none text-[#ACACAC]"
                             onClick={onDeleteItems}>Удалить все
                            товары
                        </div>
                    </div>}
                    {items.length == 0 && <div className="text-4xl m-2  flex flex-col  items-center justify-center">
                        <div className="w-[130px] flex items-center justify-center md:w-[230px]">
                            <svg width="168" height="168" viewBox="0 0 168 168" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M59 75.66C63.6005 75.66 67.33 71.9307 67.33 67.33C67.33 62.7295 63.6005 59 59 59C54.3995 59 50.67 62.7295 50.67 67.33C50.67 71.9307 54.3995 75.66 59 75.66Z"
                                    fill="#ACACAC"/>
                                <path
                                    d="M100.66 125.66C100.66 116.459 93.2013 109 84 109C74.7987 109 67.34 116.459 67.34 125.66H50.68C50.68 107.258 65.5979 92.34 84 92.34C102.402 92.34 117.32 107.258 117.32 125.66H100.66Z"
                                    fill="#ACACAC"/>
                                <path
                                    d="M117.33 67.33C117.33 71.9307 113.601 75.66 109 75.66C104.399 75.66 100.67 71.9307 100.67 67.33C100.67 62.7295 104.399 59 109 59C113.601 59 117.33 62.7295 117.33 67.33Z"
                                    fill="#ACACAC"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M167.3 84C167.3 130.005 130.005 167.3 84 167.3C37.9947 167.3 0.700012 130.005 0.700012 84C0.700012 37.9947 37.9947 0.700012 84 0.700012C130.005 0.700012 167.3 37.9947 167.3 84ZM150.64 84C150.64 120.804 120.804 150.64 84 150.64C47.1957 150.64 17.36 120.804 17.36 84C17.36 47.1957 47.1957 17.36 84 17.36C120.804 17.36 150.64 47.1957 150.64 84Z"
                                      fill="#ACACAC"/>
                            </svg>


                        </div>
                        <div className="flex mt-4 text-[#acacac] font-semibold items-center text-center justify-center">
                            Вы пока ничего не выбрали
                        </div>
                        <div><Link href="/"><a>
                            <button
                                className="my-4  border text-[18px] hover:text-white hover:bg-[#FF8932] duration-75 px-6 text-black border-2 border-[#FF8932]  font-normal rounded-[90px]">Перейти
                                в меню
                            </button>

                        </a></Link></div>
                    </div>}

                </div>
                {items.map((content, index) =>
                    <BusketItem key={content.id} title={content.title} price={content.price}
                                img={content.img} count={content.count} id={content.id}/>
                )}
                <div className="flex items-center gap-x-2 justify-start mt-3 select-none cursor-pointer flex max-w-[360px] items-center justify-center bg-[#646464]  p-1 rounded-[12px]">
                    <input placeholder="Промокод" value={titleOfPromoCode} onChange={e => setTitleOfPromoCode(e.target.value)} className="bg-[#fff] px-5 py-1 my-1 rounded-[45px] "/>
                    <button onClick={() => checkPromoCode(titleOfPromoCode)} className="bg-[#FF8932] px-5 py-1 my-1 rounded-[45px] ">Применить</button>
                </div>
                {statusOfPromoCode && statusOfPromoCode !== null && <div className="pl-4 text-green-600">Промокод активирован</div>}
                {!statusOfPromoCode && statusOfPromoCode !== null &&<div className="pl-4 text-red-600">Извините, такого промокода не существует</div>}
                <div className="flex flex-col my-3">
                    <h2 className="text-[28px] text-3xl font-bold ">Советуем попробовать</h2>
                    <div className="mt-3 mb-1"><SimpleSlider/>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col  lg:mx-0 mt-10 py-2">
                        <span className="text-3xl font-bold">Доставка :</span>
                        <div className=" flex flex-col">

                            <div
                                className="mt-3 select-none cursor-pointer flex max-w-[360px] items-center justify-center bg-[#646464]  p-1 rounded-[12px]">
                                <div onClick={() => {
                                    setDel(true)
                                }}
                                     className={del ? "bg-[#FF8932] px-5 py-1 my-1 rounded-[45px] " : "bg-[#fff] px-5 py-1 my-1 rounded-[45px]"}>Доставка
                                    на дом
                                </div>
                                <div onClick={() => {
                                    setDel(false)
                                }}
                                     className={del ? "bg-[#fff] px-5 py-1 my-1 ml-2 rounded-[45px]" : "bg-[#FF8932] ml-2 px-5 py-1 my-1 rounded-[45px] "}>Забрать
                                    самому
                                </div>
                            </div>
                            {del && <div className="w-full flex flex-col ">
                                <input
                                    type="text"

                                    {...register("adress", {
                                        required: true,

                                    })
                                    }
                                    placeholder="Адрес: улица, дом"
                                    className="mt-5  border border-2 focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[35px] p-1 border-[#FF8932]"/>
                                <div>{errors?.adress &&
                                    <p className="pl-4 text-red-500 font-normal">Не указан адресс</p>}</div>
                            </div>}

                            <div className="flex w-full mt-5 flex-col  items-start justify-start">
                                {agrement && <div
                                    className="w-full ml-2 text-grey-400 font-medium text-xs flex  justify-start items-start"> Подтверждено</div>}
                                <div className="w-full flex  justify-center items-start">
                                    <input

                                        {...register("phoneNumber", {
                                            required: true,

                                        })}
                                        maxLength="12"

                                        onChange={(e) => {
                                            setPhone(e.target.value)


                                        }}
                                        type="tel"
                                        value={phone}
                                        placeholder="Номер мобильного телефона: "
                                        className={`  border border-2 md:mr-1  focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[35px] p-1 border-[#FF8932] ${agrement && "ring-green-700 border-green-700 w-full"} w-full`}/>


                                </div>

                            </div>
                            <div className="w-full flex flex-col ">
                                <input
                                    type="text"
                                    {...register("firstName", {
                                        required: true,

                                    })}
                                    placeholder="Ваше имя:"
                                    className="mt-5 border border-2  focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[35px] p-1 border-[#FF8932] w-full"/>
                                <div>{errors?.firstName &&
                                    <p className="pl-4 text-red-500 font-normal">Не указано имя</p>}</div>
                            </div>
                        </div>

                        <div className=" flex flex-col">

                            <div
                                className="mt-10 select-none cursor-pointer flex max-w-[360px] items-center justify-center bg-[#646464]  p-1 rounded-[12px]">
                                <div onClick={() => {
                                    setAc(true)
                                }}
                                     className={ac ? "bg-[#FF8932] px-5 py-1 my-1 rounded-[45px] " : "bg-[#fff] px-5 py-1 my-1 rounded-[45px]"}>Как
                                    можно быстрее
                                </div>
                                <div className="flex flex-col ">
                                    <div onClick={() => {
                                        setAc(false)
                                    }}
                                         className={ac ? "bg-[#fff] px-5 py-1 my-1 ml-2 rounded-[45px]" : "bg-[#FF8932] ml-2 px-5 py-1 my-1 rounded-[45px] "}>Ко
                                        времени
                                    </div>

                                </div>
                            </div>
                            {!ac && <div>
                                <input
                                    {...register("time", {required: true})}
                                    type="time"
                                    min="9:00"
                                    max="23:00"

                                    className="mt-5 border border-2  focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[12px] p-1 border-[#FF8932]"/>

                            </div>}
                            <div className="w-full flex flex-col ">
                                <input
                                    {...register("Comment", {maxLength: 150})}
                                    placeholder="Комментарий для курьера:"
                                    className="mt-5 border border-2 h-[100px] focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[12px] p-1 border-[#FF8932]"/>

                                <div>{errors?.Comment &&
                                    <p className="pl-4 text-red-500 font-normal"> Максимальная длина сообщения 150
                                        символов</p>}</div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col  lg:mx-0 mt-10 py-2">
                        <span className="text-3xl font-bold">Оплата</span>

                        <div className=" flex flex-col">

                            <div
                                className="mt-4 select-none cursor-pointer flex max-w-[360px] items-center justify-center bg-[#646464]  p-1 rounded-[12px]">
                                <div onClick={() => {
                                    setAD(true)
                                }}
                                     className={ad ? "bg-[#FF8932] px-5 py-1 my-1 rounded-[45px] " : "bg-[#fff] px-5 py-1 my-1 rounded-[45px]"}>Наличными
                                </div>
                                <div onClick={() => {
                                    setAD(false)
                                }}
                                     className={ad ? "bg-[#fff] px-5 py-1 my-1 ml-2 rounded-[45px]" : "bg-[#FF8932] ml-2 px-5 py-1 my-1 rounded-[45px] "}>Картой
                                    при получении
                                </div>
                            </div>
                        </div>
                        <div className="w-full  my-4 border-b border-[#646464]"></div>
                        <motion.div whileInView={() => {
                            setVisible(true)
                        }} className="flex flex-col max-w-2xl">
                            <div className="flex justify-between  items-center">
                                <span className="text-3xl font-bold">Стоимость заказа:</span>
                                <span className="text-3xl font-bold">{totalPrice} ₽</span>
                            </div>
                            <div className="flex my-5 items-center justify-start">
                                <input
                                    {...register("change", {required: true})}
                                    type="number"
                                    placeholder="Нужна сдача с:"
                                    value={change}
                                    onChange={(e) => setChange(e.currentTarget.value)}

                                    className=" border border-2  focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[12px] p-1 border-[#FF8932]"/>
                                <div className="flex flex-wrap ml-5 items-center justify-center">
                                    <span
                                        className="px-1 underline cursor-pointer duration-75 text-[18px] hover:text-[#FF8932]"
                                        onClick={() => setChange("500")}>500</span>
                                    <span
                                        className="px-1 underline cursor-pointer duration-75 text-[18px] hover:text-[#FF8932]"
                                        onClick={() => setChange("1000")}>1000</span>
                                    <span
                                        className="px-1 underline cursor-pointer duration-75 text-[18px] hover:text-[#FF8932]"
                                        onClick={() => setChange("2000")}>2000</span>
                                    <span
                                        className="px-1 underline cursor-pointer duration-75 text-[18px] hover:text-[#FF8932]"
                                        onClick={() => setChange("5000")}>5000</span></div>
                            </div>
                            <div className="my-1">
                                <div onClick={() => {
                                    setChange("")
                                }}
                                     className={change === "" ? "w-full flex items-center justify-start " : "w-full flex items-center justify-start  hover:underline"}>
                                    <div
                                        className={change === "" ? "rounded-[90px] p-1 border border-[#000] border-2 bg-[#FF8932]" : "rounded-[90px] p-1 border border-[#000] border-2"}></div>
                                    <span className="pl-2 text-[16px]">Без сдачи</span></div>
                            </div>
                            <div className="my-1">
                                <div onClick={() => setAgree(!agree)}
                                     className={agree ? "w-full flex items-center justify-start " : "w-full flex items-center justify-start  "}>
                                    <div
                                        className={agree ? "rounded-[90px] p-1 border border-[#000] border-2 bg-[#FF8932]" : "rounded-[90px] p-1 border border-[#000] border-2"}></div>
                                    <span className="pl-2 text-[16px]">Соглашаюсь на распространение указанных в заказе персональных данных третьим лицам. С условиями <span
                                        className="underline cursor-pointer"><a download href="/offerta.pdf">Публичной оферты</a></span> ознакомлен.</span>
                                </div>
                            </div>

                            <button type="submit"

                                    className="w-full mt-4
                                     hover:filter hover:grayscale hover:scale-95 duration-75
                                      active:scale-100 bg-[#FF8932]
                                      text-white rounded-[35px] py-1.5 ">Оформить
                                заказ
                            </button>
                        </motion.div>
                    </div>
                </form>
            </div>

            <div
                className={visible ? "hidden" : "md:hidden flex items-center justify-center sticky bottom-0 bg-white w-full py-4"}>
                <div className="flex justify-center  items-center">
                    <span className="text-xl font-bold">Стоимость заказа:</span>
                    <span className="text-xl pl-1 font-bold">{totalPrice} ₽</span>
                </div>
            </div>

            {ale == true && <div className="fixed top-24 right-0"><Alert status='success'>
                <AlertIcon/>
                Спасибо за заказ! Скоро вам перезвонят для проверки информации.
            </Alert></div>}
            <div>
                <Modal isOpen={isOpen} closeOnOverlayClick={false} size="xl" isCentered={true} onClose={onClose}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalBody>
                            <div className="bg-grey-300 max-w-xl px-auto flex flex-col items-center justify-center">
                                <span className="text-2xl my-4 mb-6 text-[#A9A9A9]">Подтверждение номера телефона</span>
                                <input
                                    onChange={(e) => {
                                        setCode(e.target.value)
                                    }}
                                    type="number"
                                    value={code}
                                    placeholder="Код пришедший к вам через смс "
                                    className="focus:border-red-500 border border-2 md:mr-1  focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[35px] py-2 px-4 border-[#FF8932] w-[70%]"/>
                                <button
                                    className="my-4 border px-3 bg-[#FF8932] border-2 border-[#FF8932] py-1.5 text-white rounded-[90px]"
                                    onClick={handleSignupForCode}>отправить код
                                </button>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
            <div id="recaptcha-container"></div>
            {/*<div>Всего будет стоить: {totalPrice}</div>*/}
            {/*<div>Всего пицц: {totalCount}</div>*/}
        </div>

    </div>)
}