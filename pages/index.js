import Head from 'next/head'
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import { Container } from '@chakra-ui/react'



export default function Home() {

    return (
        <div className="min-h-[100vh] ">
            <Head>
                <title>Сагай Палермо</title>
                <meta name="description" content="Ресторан Сагай Палермо рад новым гостям"/>

                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/*<motion.div*/}
            {/*    exit={{opacity: 0}}*/}
            {/*    initial="initial"*/}
            {/*    animate="animate"*/}
            {/*>*/}
                    <img src="https://asset.cloudinary.com/dd7z5d3qu/97faf0f4c7e2fde8a19eb3087edf27e7" alt="123"/>
                <Hero/>
                {/*<motion.div variants={stagger}>*/}
                {/*    <motion.div variants={fadeInUp}>*/}
            <div className="flex items-center justify-center">
            <Container m={0} px={2} maxWidth={1580}>
                        <Menu/>
            </Container>
            </div>
                {/*    </motion.div>*/}
                {/*</motion.div>*/}
            {/*</motion.div>*/}

        </div>
    )
}


