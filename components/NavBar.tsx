
'use client'

import { Flex, Button } from "@chakra-ui/react"
import Image from "next/image"
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <>
        <Flex    
            justify='space-between'
            align='center'
            padding='2rem'
            px='2rem'
            py='1rem'
            className={styles.navbar}
            wrap='wrap'
            as='nav'
            bg='white'
        
        >
            <Image 
                src='/logo.svg'
                alt='logo'
                width={60}
                height={46}
                className='object-contain'
            />
            <Button colorScheme="messenger">
                Connexion
            </Button>
        </Flex>
    </>
  )
}

export default NavBar
