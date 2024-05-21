const Description = ({ data }) => {
  return (
    <div>
      <h1 className="text-green">{data.title}</h1>
      <p>{data.overview}</p>
      <p>
        <b className="text-green">Release date:</b> {data.releaseDate}
      </p>
      <p>
        <b className="text-green">Runtime:</b> {data.runtime}
      </p>
      <p>
        <b className="text-green">Rating:</b> {data.rating}%
      </p>
      <p>
        <b className="text-green">Genres:</b> {data.genres}
      </p>
      <p>
        <b className="text-green">Budget:</b> ${data.budget}
      </p>
      <p>
        <b className="text-green">Revenue:</b> ${data.revenue}
      </p>
    </div>
  );
};

export default Description;
