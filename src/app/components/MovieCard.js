'use client';

import styles from '@/app/styles/common.module.css';
import Link from "next/link";
import Image from "next/image";

const MovieCard = ({ episode }) => {
    if (!episode || !episode.summary) return null;

    const id = episode.summary?.id;
    const title = episode.title;

    const synopsis = episode.contextualSynopsis?.text;

    // ✅ Only use image if it's valid
    const imageUrl = episode?.interestingMoment?._342x192?.webp?.value?.url;


    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={title || "Netflix Episode"}
                        width={260}
                        height={200}
                    />
                )}

                <div className={styles.card_data}>
                    <h2>{title}</h2>
                    <p>{synopsis}</p>
                    <Link href={`/movie/${id}`}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
