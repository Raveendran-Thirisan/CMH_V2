import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <Image src="/images/LogoBlanc_CMH.svg"  className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-20" width={50} height={50} alt="logo blanc CommeMyHome" priority />
            </Link>
        </div>
    );
}

export default Logo;
