import Image from 'next/image';
import profile from '@/public/juan-headshot.jpg'


const imageStyle = {
    borderRadius: '80%',
    border: '2px solid black',
}

export default function Profile(){
    return(
        <>
        <Image 
        className='mx-auto d-block mt-3'
        src = {profile}
        width={200}
        height={200}
        quality={100}
        alt='picture of Juan'
        style={imageStyle}
        />
        </>
    )
}