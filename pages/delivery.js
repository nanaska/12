import {YMaps, Map, Polyline} from "react-yandex-maps";
import {motion, useScroll} from "framer-motion";
import {Container} from "@chakra-ui/react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setMenuFilter } from "../slices/menuSlice";
import { useEffect } from "react";

export default function Delivery() {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(setMenuFilter(0))},[])
    const {scrollYProgress} = useScroll();
    const geoPolyg = [
        [
            58.1622166,
            40.1510832
        ],
        [
            58.1656499,
            40.1491999
        ],
        [
            58.1671999,
            40.1503999
        ],
        [
            58.1685666,
            40.1538332
        ],
        [
            58.1696263,
            40.1538333
        ],
        [
            58.1700332,
            40.1538332
        ],
        [
            58.1702832,
            40.1575999
        ],
        [
            58.1718332,
            40.1568332
        ],
        [
            58.1727832,
            40.1556332
        ],
        [
            58.1749332,
            40.1430999
        ],
        [
            58.1779332,
            40.1354499
        ],
        [
            58.1802499,
            40.139
        ],
        [
            58.1816166,
            40.1417666
        ],
        [
            58.1837666,
            40.1438332
        ],
        [
            58.1853999,
            40.1528832
        ],
        [
            58.1868499,
            40.1564832
        ],
        [
            58.1877166,
            40.1548499
        ],
        [
            58.1898499,
            40.1517666
        ],
        [
            58.1887499,
            40.1486832
        ],
        [
            58.1876332,
            40.1466999
        ],
        [
            58.1878832,
            40.1435332
        ],
        [
            58.1905499,
            40.1418166
        ],
        [
            58.1927832,
            40.1397499
        ],
        [
            58.1939832,
            40.1387166
        ],
        [
            58.1956166,
            40.1384666
        ],
        [
            58.1979332,
            40.1393166
        ],
        [
            58.1996499,
            40.1383832
        ],
        [
            58.2006832,
            40.1366666
        ],
        [
            58.2008499,
            40.1347666
        ],
        [
            58.2016166,
            40.1347666
        ],
        [
            58.2024832,
            40.1404332
        ],
        [
            58.2029511,
            40.1434729
        ],
        [
            58.2013666,
            40.1461832
        ],
        [
            58.201317,
            40.1496024
        ],
        [
            58.2006228,
            40.1516634
        ],
        [
            58.2011832,
            40.1541666
        ],
        [
            58.2014499,
            40.1575166
        ],
        [
            58.2024832,
            40.1557999
        ],
        [
            58.2041999,
            40.1525499
        ],
        [
            58.2052166,
            40.1511666
        ],
        [
            58.2065166,
            40.1544332
        ],
        [
            58.2052999,
            40.1559832
        ],
        [
            58.2042832,
            40.1574332
        ],
        [
            58.2033332,
            40.1601832
        ],
        [
            58.2036832,
            40.1624999
        ],
        [
            58.2041166,
            40.1649832
        ],
        [
            58.2052999,
            40.1671332
        ],
        [
            58.2066832,
            40.1702166
        ],
        [
            58.2083166,
            40.1721999
        ],
        [
            58.2103666,
            40.1737332
        ],
        [
            58.2119166,
            40.1745999
        ],
        [
            58.2124332,
            40.1781166
        ],
        [
            58.2119999,
            40.1811166
        ],
        [
            58.2106798,
            40.1886682
        ],
        [
            58.2045332,
            40.1888621
        ],
        [
            58.1993329,
            40.1897824
        ],
        [
            58.1940666,
            40.1908999
        ],
        [
            58.1914832,
            40.1909999
        ],
        [
            58.1906257,
            40.2004975
        ],
        [
            58.1900171,
            40.2031453
        ],
        [
            58.1888171,
            40.2042642
        ],
        [
            58.1867214,
            40.2049652
        ],
        [
            58.1838638,
            40.2045419
        ],
        [
            58.1836209,
            40.2000051
        ],
        [
            58.1786999,
            40.1970832
        ],
        [
            58.1774166,
            40.1978666
        ],
        [
            58.1772499,
            40.2052332
        ],
        [
            58.1758666,
            40.2083332
        ],
        [
            58.1730332,
            40.2029166
        ],
        [
            58.174903,
            40.1976015
        ],
        [
            58.1743632,
            40.1957452
        ],
        [
            58.1745329,
            40.1929986
        ],
        [
            58.1696978,
            40.1791112
        ],
        [
            58.1693512,
            40.175331
        ],
        [
            58.1671999,
            40.1693666
        ],
        [
            58.1669499,
            40.1675666
        ],
        [
            58.1672832,
            40.1629332
        ],
        [
            58.1644499,
            40.1605166
        ],
        [
            58.1634346,
            40.1587107
        ],
        [
            58.1627195,
            40.1576069
        ],
        [
            58.1595195,
            40.153593
        ],
        [
            58.1597527,
            40.1526531
        ],
        [
            58.1622166,
            40.1510832
        ]
    ]
    return (
        <>
            <Head>
                <title>Доставка</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <div className="flex flex-col mx-auto  items-center justify-between">
                <div className="mr-auto my-3 font-bold text-[32px] md:text-[48px]">
                    <h2> Зона доставки </h2>
                </div>

                <YMaps>
                    <Map width='100%'
                         height='500px'
                         strokeColor='#999'
                         defaultState={{
                             center: [58.18599, 40.17155],
                             zoom: 12.5
                         }}>
                        <Polyline geometry={geoPolyg} options={{
                            balloonCloseButton: false,
                            strokeColor: '#1E5945',
                            strokeWidth: 3,
                            strokeOpacity: 0.4,
                            fillColor: "#1E5945"

                        }}/>
                    </Map>
                </YMaps>
                {/*<div className="flex flex-col mr-auto">*/}
                {/*    <div className="mr-auto my-3 font-bold text-[32px] md:text-[48px]">*/}
                {/*        Зона доставки*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto autem dolor ex*/}
                {/*            exercitationem, explicabo fuga fugiat in libero nobis, numquam odio rerum sequi temporibus,*/}
                {/*            tenetur vero voluptas? Corporis, soluta.*/}
                {/*        </div>*/}
                {/*        <div>A aspernatur consectetur culpa cupiditate impedit incidunt laborum, quis temporibus*/}
                {/*            veritatis voluptates? Autem doloribus eveniet laboriosam reiciendis repellendus. Consequatur*/}
                {/*            dolor ipsam labore perspiciatis rem. Dicta eligendi esse nesciunt quam sed!*/}
                {/*        </div>*/}
                {/*        <div>Accusantium debitis excepturi fuga ipsum perferendis quaerat, tempore! Assumenda cumque,*/}
                {/*            cupiditate ea expedita fuga illum iusto labore minima minus, modi nam obcaecati placeat quo*/}
                {/*            quod repellendus reprehenderit sed sunt tempore!*/}
                {/*        </div>*/}
                {/*        <div>Deserunt, id repudiandae. Amet architecto beatae delectus dolore ducimus fugit id impedit*/}
                {/*            in ipsum magni necessitatibus nesciunt omnis, possimus praesentium quaerat quis quo*/}
                {/*            repudiandae suscipit tempora vitae voluptas voluptate voluptatum.*/}
                {/*        </div>*/}
                {/*        <div>Aspernatur blanditiis fugit ipsa iste iusto minus nam, pariatur sunt temporibus velit.*/}
                {/*            Dolores eveniet minima quasi quia quod! Expedita mollitia, quas. Deserunt eum in inventore*/}
                {/*            nam odit quia repudiandae voluptates.*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </>)
}