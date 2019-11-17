import * as React from 'react';


export const MovieCard = (props: {title: string}): JSX.Element => {
  const { title } = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width={ 280 } height={ 175 } />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{ title }</a>
      </h3>
    </article>
  );
};
