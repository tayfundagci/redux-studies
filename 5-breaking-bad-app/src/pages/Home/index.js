import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

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
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="btn btn-info ">
                  Click for Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
