import React, { useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUser = ({}) => {
  const { photos, addPhotos } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !url) {
      toast.failed("Please fill in all fields!!");
    }

    const data = {
      id: photos.length > 0 ? photos[photos.length - 1].id + 1 : 0,
      title,
      url,
    };

    addPhotos(data);
    toast.success("Photos added successfully!!");
    navigate("/");
  };

  return (
    <div className="container-fluid" data-testid="container-add">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Url Photos"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Photos"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser();

// const mapStateToProps = (state) => ({
//   photos: state.photos,
// });
// const mapDispatchToProps = (dispatch) => ({
//   addPhotos: (data) => {
//     dispatch({ type: "ADD_PHOTOS", payload: data });
//   },
// });

// export { AddUser as AddUserUnwrapped };
// export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
