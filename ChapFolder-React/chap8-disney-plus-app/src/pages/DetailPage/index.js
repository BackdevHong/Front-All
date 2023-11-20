import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "../../api/axios";
const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});
  // eslint-disable-next-line
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/${params.get("type")}/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
    // eslint-disable-next-line
  }, [movieId]);

  if (!movie) return null;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="img"
      />
    </section>
  );
};

export default DetailPage;
