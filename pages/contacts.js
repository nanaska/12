import {Container} from "@chakra-ui/react";
import {Map, Polyline, YMaps, GeoObject, Placemark} from "react-yandex-maps";

export default function Contacts() {
    return (<div className="flex items-center justify-center">
        <Container maxWidth={1580}>
            <div className="flex mt-10 items-center py-2 justify-center">
                <div className="flex flex-col items-start justify-start">
                    <div className="text-[24px]  font-bold ">Контакты</div>
                    <div className="flex-col flex items-start justify-start">
                        <h1 className="font-bold">Семейный ресторан в городе Данилов
                        </h1>
                        <div>
                            <span className="font-bold">Адресс:</span>
                            <span><h3>г. Данилов  ул. Карла Маркса, дом 19Б</h3></span>
                        </div>
                        <div>
                            <span className="font-bold">Телефон для бронирования:</span>
                            <span><a href="tel:89610220220"><h3>8 (961) 022-02-20</h3></a></span>
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


    </div>)
}