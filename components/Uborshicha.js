import Image from "next/image";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {useState} from "react";

export default function Uborshicha() {
    const [name, setName] = useState("")
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = async data => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                work: "Уборщица",
                name: data.firstName,
                age: data.age,
                phone: data.phone,
                previousWork: data.previousWork
            })
        }
        fetch("api/vacationmessage", requestOptions)
        console.log(data)
    }

    return (


        <div className="flex flex-col items-center justify-center">
            <Image src={`/Uborshicha.png`} width={200} height={200}/>

            <div className="mt-2">
                <span className="text-[24px] font-normal"><h3>Уборщица</h3></span>
            </div>
            <div className="mt-4">

                <div onClick={onOpen}
                     className="p-2 cursor-pointer hover:scale-95 duration-75 active:scale-100 px-8 bg-[#FF8932] text-white border border-[#FF8932] rounded-[35px]">Подробнее
                </div>


                <Modal isOpen={isOpen} size="xl" onClose={onClose}>
                    <ModalOverlay/>
                    <ModalContent>

                        <ModalCloseButton color="red" zIndex={50} onClick={onClose}/>
                        <ModalBody>
                            <div className="flex relative flex-col items-center justify-center">
                                <div className="mb-2"><Image src={`/Uborshicha.png`} width={200} height={200}/>

                                    <div className="mt-2 items-center flex justify-center">
                                        <span className="text-[24px] py-2 font-bold">Уборщица</span>
                                    </div>
                                </div>
                                <div className="mr-auto text-[18px]">
                                    <h3 className="py-4">Мы в поиске Уборщицы</h3>
                                </div>
                                <div className="mr-auto mt-3">
                                    <h3 className="text-[16px] font-bold">Обязанности:</h3>
                                    <ul className="ml-6 list-disc">
                                        <li className="">Уборка помещений кафе</li>
                                    </ul>
                                </div>
                                <div className="mr-auto mt-3">
                                    <h3 className="text-[16px] font-bold">Условия:</h3>
                                    <ul className="ml-6 list-disc">
                                        <li className="">График работы 2/2 с 8:00 до 11:00</li>
                                        <li>Бесплатные обеды</li>
                                        <li>Развозка в ночное время после работы</li>
                                        <li>Работа рядом с домом</li>
                                    </ul>
                                </div>
                                <div className="mr-auto mt-3">
                                    <h3 className="text-[16px] font-bold">Требования:</h3>
                                    <ul className="ml-6 list-disc">
                                        <li>Готовность к физическому труду</li>
                                        <li>Желание работать и зарабатывать</li>
                                        <li>Готовность работы в коллективе</li>
                                        <li>Опыт работы будет преимущество </li>
                                    </ul>
                                </div>
                                <div className="flex w-full flex-col items-center justify-center">
                                    <span className="text-[24px] py-4 font-bold">Заполнить анкету</span>
                                    <div className="w-full">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="w-full flex flex-col justify-start items-start">
                                                <input

                                                    {...register("firstName", {
                                                        required: true,

                                                    })}
                                                    placeholder="Имя:"
                                                    className="mt-5 border border-2 md:mr-1  focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[35px] p-1 border-[#FF8932] w-full"/>
                                                <div>{errors?.firstName &&
                                                    <p className="pl-4 text-red-500 font-normal">Не указано имя</p>}
                                                </div>

                                            </div>
                                            <div className="w-full space-x-3 flex  justify-start items-start">
                                                <div className="flex flex-col justify-start items-start w-3/4">
                                                    <input

                                                        {...register("phone", {
                                                            required: true,

                                                        })}
                                                        placeholder="Номер телефона:"
                                                        className="mt-5 border border-2 md:mr-1  focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[35px] p-1 border-[#FF8932] w-full"/>
                                                    <div>{errors?.phone &&
                                                        <p className="pl-4 text-red-500 font-normal">Не указан номер
                                                            телефона</p>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <input

                                                        {...register("age", {
                                                            required: true,

                                                        })}
                                                        placeholder="Ваш возраст:"
                                                        className="mt-5 border border-2 md:mr-1  focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[35px] p-1 border-[#FF8932] w-full"/>
                                                    <div>{errors?.age &&
                                                        <p className="pl-4 text-red-500 font-normal">Не указан
                                                            возраст</p>}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="w-full flex flex-col ">
                                                <input
                                                    {...register("previousWork", {maxLength: 500, required: true})}
                                                    placeholder="Прошлые места работы:"
                                                    className="mt-5 border border-2 h-[100px] focus:ring focus:ring-[#FF8932] focus:outline-none rounded-[12px] p-1 border-[#FF8932]"/>

                                                <div className="flex flex-col">{errors?.previousWork &&
                                                    <p className="pl-4 text-red-500 font-normal"> Максимальная длина
                                                        сообщения 500
                                                        символов</p>}
                                                    {errors?.previousWork &&
                                                        <p className="pl-4 text-red-500 font-normal"> Опишите пожалуйста свой опыт работы</p>}</div>
                                            </div>
                                            <button type="submit"
                                                    className="w-full mt-4 hover:filter hover:grayscale hover:scale-95 duration-75 active:scale-100 bg-[#FF8932] text-white rounded-[35px] py-1.5 ">Отправить
                                                анкету
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal></div>

        </div>)
}