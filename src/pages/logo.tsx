import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <Image src="/images/LogoBlanc_CMH.svg" width={90} height={100} alt="logo blanc CommeMyHome" priority />
            </Link>
        </div>
    );
}

export default Logo;
