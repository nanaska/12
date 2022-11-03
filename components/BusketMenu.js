import {useDispatch, useSelector} from "react-redux";
import BusketItem from "./BusketItem";
import {clearItems} from "../slices/busketSlice";
import Image from "next/image";

import {authentication} from "../config/firebase";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";

import {  RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";

import {
    Alert,
    AlertIcon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure
} from '@chakra-ui/react'

import SimpleSlider from "./SimpleSlider";



export default function BusketMenu({}) {
    const [ad, setAD] = useState(true)
    const [ac, setAc] = useState(true)
    const dispatch = useDispatch()
    const [phone, setPhone] = useState("+7")
    const [code, setCode] = useState("")
    const [agrement, setAgrement] = useState(false)
    const [formData, setFormData] = useState(null)
    const [expandForm, setExpandForm] = useState(true)
    const [visible, setVisible] = useState(false)
    const [del, setDel] = useState(true)
    const [m, setM] = useState(false)
    const {totalPrice, items} = useSelector(state => state.busketSlice)
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
    const onSubmit = async e => {
        if(items.length === 0){
            return alert("Вы не выбрали товар")
        }
        setFormData(e)

        if (phone.length >= 12) {

            generateRecaptcha()
            let appVerifier = window.recaptchaVerifier
            signInWithPhoneNumber(authentication, phone, appVerifier)
                .then((confirmationResult)=>{
                    window.confirmationResult = confirmationResult
                }).catch(e => console.log(e))

            onOpen()
        }else if(phone.length < 12){
            alert("Неправильный формат телефона")
        }


    }
    async function fet(){
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
                console.log(error)
            });


    }
    useEffect(()=>{
        if(phone[1] !== "7"){
            setPhone("+7")
            console.log(7)
        }
        if(phone[0] !== "+"){
            setPhone("+7")
            console.log("+")
        }
    },[phone])
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
                        <div className="w-[130px] md:w-[230px]">
                            <Image src={`/sad-face-2692.svg`} height={200} width={200}/>
                        </div>
                        <div className="flex mt-4 items-center text-center justify-center">
                            Извините, вы пока еще ничего не добавили в корзину
                        </div>
                    </div>}

                </div>
                {items.map((content, index) =>
                    <BusketItem key={content.id} title={content.title} price={content.price}
                                img={content.img} count={content.count} id={content.id}/>
                )}

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
                            <div className="w-full flex flex-col ">
                                <input
                                    type="text"

                                    {...register("adress", {
                                        required: true,

                                    })
                                    }
                                    placeholder="Адрес: улица, дом"
                                    className="mt-5 mb-5 border border-2 focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[35px] p-1 border-[#FF8932]"/>
                                <div>{errors?.adress &&
                                    <p className="pl-4 text-red-500 font-normal">Не указан адресс</p>}</div>
                            </div>

                            <div className="flex w-full flex-col  items-start justify-start">
                                {agrement && <div className="w-full ml-2 text-grey-400 font-medium text-xs flex  justify-start items-start"> Подтверждено</div>}
                                <div className="w-full flex  justify-center items-start">
                                    <input

                                        {...register("phoneNumber", {
                                            required: true,

                                        })}
                                        maxLength="12"

                                        onChange={(e)=> {
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
                        <div className="flex flex-col my-3">
                            <h2 className="text-[28px] font-bold ">Советуем попробовать</h2>
                            <div className="mt-3 mb-1"> <SimpleSlider/>
                            </div> </div>
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
                                    {...register("time", {required:true})}
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
                Спасибо за заказ 🙏! Скоро вам перезвонят для проверки информации.
            </Alert></div>}
            <div>
            <Modal isOpen={isOpen} closeOnOverlayClick={false}  size="xl" isCentered={true} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalBody>
                        <div className="bg-grey-300 max-w-xl px-auto flex flex-col items-center justify-center">
                            <span className="text-2xl my-4 mb-6 text-[#A9A9A9]">Подтверждение номера телефона</span>
                            <input
                                onChange={(e)=> {

                                    setCode(e.target.value)



                                }}
                                type="number"
                                value={code}
                                placeholder="Код пришедший к вам через смс "
                                className="focus:border-red-500 border border-2 md:mr-1  focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[35px] py-2 px-4 border-[#FF8932] w-[70%]"/>
                            <button className="my-4 border px-3 bg-[#FF8932] border-2 border-[#FF8932] py-1.5 text-white rounded-[90px]" onClick={handleSignupForCode}>отправить код</button>
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
