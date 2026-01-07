import { getFilms } from "../api/api";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getFilms()
      .then((films) => {
        setFilms(films);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h2 className="loading">Loading all films...</h2>
        <div className="lottie-gif">
          <DotLottieReact
            src="lottie-host-url-for-loading-animation"
            loop
            autoplay
          />
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <h2 className="loading">Oh no! Something went wrong...</h2>
        <div className="lottie-gif">
          <DotLottieReact
            src="lottie-host-url-for-error-animation"
            loop
            autoplay
          />
        </div>
      </>
    );
  }
  // TODO: find lottie animations for loading and error states

  return (
    <div>
      <h1>Films List</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
