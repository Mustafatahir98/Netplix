import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.RAPID_KEY

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);

    if (!res.ok) {
        console.error("❌ API call failed:", res.status);
        return <h2>Failed to load movies</h2>;
    }

    const data = await res.json();

    // ✅ Combine episodes from both items
    const main_data = [...(data?.[0]?.episodes || []), ...(data?.[1]?.episodes || [])];

    console.log("✅ main_data:", main_data);

    if (!Array.isArray(main_data) || main_data.length === 0) {
        return <h2>No movies available right now</h2>;
    }

    return (
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Series & Movie</h1>
                <div className={styles.card_section}>
                    {main_data.map((episode, index) => (
                        <MovieCard
                            key={episode?.summary?.id || `ep-${index}`}
                            episode={episode}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Movie;
