import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = ()=>{
    
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=> {
            router.push('/')
        },3000);
    }, []);

    return (
        <div className="not-found">
            <h1>Oops...</h1>
            <h2>That page not found</h2>
            <p>Going to <Link href='/'>main page</Link> at 3 sec</p>
        </div>
    )
}

export default NotFoundPage;