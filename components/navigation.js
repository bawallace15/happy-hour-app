import Link from 'next/link'

export default function Navigation() {
    return (
        <header>
            <div className='nav_header'>
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/about-us"><a>About Us</a></Link>
                        </li>
                        <li>
                            <Link href="/advertise"><a>Advertise</a></Link>
                        </li>
                        <li>
                            <Link href="/random-happy-hour"><a>Random Happy Hour</a></Link>
                        </li>
                        <li>
                            <Link href="/random-miami-fact"><a>Random Miami Fact</a></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}