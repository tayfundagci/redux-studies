import { useEffect } from "react";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1 className="text-center">Characters</h1>

      <div className="container">
        <div className="row">
          {characters.map((character) => (
            <div
              className="card bg-dark border border-2 p-2 m-3 text-center"
              style={{ width: "18rem" }}
              key={character.char_id}
            >
              <img
                src={character.img}
                class="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title text-info">{character.name}</h5>
                <p className="card-text">{character.nickname}</p>
                <a href="/#" className="btn btn-info ">
                  Click for Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center p-3">
        {isLoading && <Loading />}
        {hasNextPage && !isLoading && (
          <button
            onClick={() => dispatch(fetchCharacters(nextPage))}
            className="btn btn-light text-center"
          >
            Load More ({nextPage})
          </button>
        )}
        {!hasNextPage && <div>There is nothing to show.</div>}
      </div>
    </div>
  );
}

export default Home;
