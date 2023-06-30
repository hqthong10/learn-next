import './styles.module.css';
import Link from 'next/link'
import Image from 'next/image';

export default function HeaderBar() {
    return (
        <header className='flex h-[60px] items-center bg-white gap-5 px-4 shadow'>
            <Image src={'/images/logo.png'} alt='piepmark' width={100} height={50}/>
            <Link href="/">Home</Link>
            <Link href="/dictionary">Dictionary</Link>
            <Link href="/phrase">Phrase</Link>
            <Link href="/posts">Post</Link>
            <span className='w-full'></span>
            <Link href="/login">Login</Link>
        </header>
    )
}