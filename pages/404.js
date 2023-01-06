import Head from "next/head";
import Link from "next/link"; 

export default function Home() {
    return (
        <>
            <Head >
                <title>404</title>
            </Head> 
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='text-l-1 m-auto p flex flex-col w-[200px] justify-center text-center' > 
                <h1>404</h1>
                <h2>not found</h2>
                <Link href={'/'} >
                    <a className="border-ui-1 border-2 p-2 rounded-xl mt-4 ui	">العودة للرئيسية</a>
                </Link>
            </div>

        </>
    )
}
