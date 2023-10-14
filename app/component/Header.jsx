import Image from 'next/image'
import banner from '@/public/cop3813_header.jpg'

export default function Header() {
    return (
        <header className='d-flex' style={{ position: 'relative', height: '20vh', width: '100vw' }}>
            <div style={{  position: 'absolute', zIndex: 1, width: '100%', height: '100%' }}>
                <Image
                    alt='banner'
                    src={banner}
                    fill
                    objectFit='cover'
                />
            </div>
            <h1 className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 2, position:'relative', color:'white' }}>Juan Marrugo's Web portfolio</h1>
        </header >
    )
}