import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";

import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Item from "./Item";

function Quotes() {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Quotes</h1>
        {status === "loading" && <Loading />}

        {status === "succeeded" &&
          data.map((item) => <Item key={item.quote_id} item={item} />)}

        {status === "succeeded" && (
          <div className="text-center p-3">{data.length} quotes.</div>
        )}
      </div>
    </div>
  );
}

export default Quotes;
