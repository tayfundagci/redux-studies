import { useState } from "react";

import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactSelectors, updateContact } from "../../redux/contactSlice";
import { useHistory } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: number,
        },
      })
    );

    if (!contact) {
      return <Redirect to="/" />;
    }

    history.push("/");
  };

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <div className="btn">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
