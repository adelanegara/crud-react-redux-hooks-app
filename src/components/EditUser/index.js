import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = ({ photos, updatePhotos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPhotos = photos.find((item) => item.id === parseInt(id));

  useEffect(() => {
    setTitle(currentPhotos.title);
    setUrl(currentPhotos.url);
  }, [currentPhotos]);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !url) {
      toast.warning("Please fill in all fields!!");
    }

    const data = {
      id: currentPhotos.id,
      title,
      url,
    };

    updatePhotos(data);
    toast.success("Photos updated successfully!!");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentPhotos ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={title}
                  placeholder={"Title"}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={url}
                  placeholder={"Url Photos"}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Photos
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Photos Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos,
});
const mapDispatchToProps = (dispatch) => ({
  updatePhotos: (data) => {
    dispatch({ type: "UPDATE_PHOTOS", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
