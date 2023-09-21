import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '57a4a43263msh4b5f1e5d06ac778p1d19b0jsn9b03abaf158c',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    
    const res = await fetch(url, options,{
        revalidate: 60
      });
    const data = await res.json();
    //console.log(data)
    const main_data = data.titles;
    console.log(main_data)

    return (
        
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
        
    );
};

export default Movie;