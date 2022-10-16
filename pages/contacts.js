import {Container} from "@chakra-ui/react";
import {Map, YMaps} from "react-yandex-maps";
import Head from "next/head";

export default function Contacts() {
    return (<><Head>
        <title>Контакты</title>
    </Head><main className="flex items-center justify-center">
        <Container maxWidth={1580}>
            <div className="flex mt-10 items-start py-2 justify-center">
                <div className="flex flex-col items-start justify-start">
                    <h2 className="text-[24px]  font-bold ">Контакты</h2>
                    <div className="flex-col flex items-start justify-start">
                        <h2 className="font-bold">Семейный ресторан в городе Данилов
                        </h2>
                        <div>
                            <span className="font-bold">Адресс:</span>
                            <span><h3>г. Данилов  ул. Карла Маркса, дом 19Б</h3></span>
                        </div>
                        <div>
                            <span className="font-bold">Телефон для бронирования:</span>
                            <span><h3><a href="tel:89610220220">8 (961) 022-02-20</a></h3></span>
                        </div>
                        <div>
                            <span className="font-bold">График работы:</span>

                            <div className="grid grid-cols-2"><span><h6>Пн-Чт</h6></span> <span><h6>10-23</h6></span>
                                <span><h6>Пт-Вс</h6></span> <span><h6>10-23</h6></span></div>
                        </div>
                    </div>
                </div>
                <div>
                    <YMaps>
                        <Map width='400px'
                             height='400px'
                             strokeColor='#999'
                             defaultState={{
                                 center: [58.18599, 40.17155],
                                 zoom: 12.5
                             }}>

                        </Map>

                    </YMaps>
                </div>
            </div>
        </Container>


    </main></>)
}