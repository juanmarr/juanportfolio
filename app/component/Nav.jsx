import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="navbar sticky-top bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className='container-md '>
                <Link className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover ' href=''>Welcome</Link>
                <Link className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover ' href=''>About</Link>
                <Link className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover ' href=''>Skills</Link>
                <Link className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover ' href=''>Projects</Link>
                <Link className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-opacity-50-hover ' href=''>Contacts</Link>
            </div>

        </nav>
    )
}