import Image from 'next/image';
import profile from '@/public/Juan_headshot.jpg'
import {motion} from 'framer-motion'

export default function Profile(){
    return(
        <>
        <Image 
        src = {profile}
        />

        </>
    )
}