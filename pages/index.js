import Head from 'next/head'
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import { Container } from '@chakra-ui/react'

// const easing = [0.6, -0.05, 0.01, 0.99]
// const fadeInUp = {
//     initial: {
//         y: 30,
//         opacity: 0
//     },
//     animate: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             type: "spring",
//             stiffness: 560,
//             duration: 1,
//             easy: easing
//         }
//     }
// }
// const stagger = {
//     animate: {
//         transition: {
//             staggerChildren: 0.1
//         }
//     }
// }
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


