import Head from 'next/head'
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import { Container } from '@chakra-ui/react'



export default function Home() {

    return (
        <div className="min-h-[100vh] ">
            <Head>
                <title>Сагай Палермо</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            {/*<motion.div*/}
            {/*    exit={{opacity: 0}}*/}
            {/*    initial="initial"*/}
            {/*    animate="animate"*/}
            {/*>*/}
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


