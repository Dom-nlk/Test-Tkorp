import Image from "next/image";
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
        src={"/people_animal.png"} 
        alt='contact icon'
        width={400}
        height={400}
      />
      <h1>Bienvenue dans mon App</h1>
      <div className="buttons flex">
        <Link href="/persons" className='btn-link'>Visiter nos clients</Link>
        <Link href="/animals" className='btn-link'>Visiter nos animaux</Link>
      </div>
    </div>
  );
}
