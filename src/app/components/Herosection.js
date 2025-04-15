import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from 'next/link';
const Herosection = ({title , imageUrl}) => {
    return (
       <main className={heroStyles.main_section}>
           <div className={styles.container}>
               <div className={styles.grid_two_section}>
                   <div className={heroStyles.hero_content}>
                       <h1>{title}</h1>
                       <p>From award-winning dramas to high-octane action hits — we’ve got it all. Explore our latest collection of must-watch movies and discover your next favorite today.</p>
                       <Link href="/movie">
                           <button>Explore Movies</button>
                       </Link>

               </div>
                   <div className={heroStyles.hero_image}>

                       {imageUrl && (
                           <Image src={imageUrl} alt="Movie image" width={400} height={300} />
                       )}


                   </div>
               </div>


           </div>
           <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
               <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                   <path
                       d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                       className={heroStyles["shape-fill"]}></path>
               </svg>
           </div>
       </main>
    );
};

export default Herosection;