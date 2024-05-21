const Cast = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt="" className="rounded-pill" />
      <div className="text-center">
        <h4>{data.name}</h4>
        <span>{data.character}</span>
      </div>
    </div>
  );
};

export default Cast;
