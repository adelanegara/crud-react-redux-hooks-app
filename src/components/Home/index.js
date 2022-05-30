import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
// import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// const Home = ({ photos, deletePhotos, addPhotos, updatePhotos, userData }) => {
const Home = ({}) => {
  const { photos, deletePhotos, addPhotos, updatePhotos, userData } =
    useContext(GlobalContext);
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    const users = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
      {
        params: {
          _limit: 10,
        },
      }
    );
    users.data.forEach((item) => {
      const { id, title, url } = item;
      const payload = {
        id,
        title,
        url,
      };
      addPhotos(payload);
    });
  };

  useEffect(() => {
    if (photos.length === 0) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    setFilterData(photos);
  }, [photos]);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = filterData.filter((data) => {
      return data.title.search(value) !== -1;
    });
    setFilterData(result);
    if (value === "") {
      setFilterData(photos);
    }
  };

  const onDeletePhotos = (id) => {
    deletePhotos(id);
    toast.dark("Delete successfuly");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <div className="mb-2 mt-2">
            {userData?.name && (
              <p className="text-lg-center">
                Welcome{" "}
                <strong className="text-success">{userData.name}! </strong>
                Hi from{" "}
                <strong className="text-secondary">{userData.location}</strong>
              </p>
            )}
          </div>
          {userData.role === "admin" && (
            <div className="mb-2 mt-2">
              <button
                onClick={() => navigate("/add")}
                className="btn btn-outline-dark mr-1"
              >
                Add Photos
              </button>
            </div>
          )}

          <input
            type="text"
            className="form-control mb-2 mt-2"
            placeholder="Search"
            onChange={(e) => handleSearch(e)}
          />
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Photos</th>
                {userData.role === "admin" && <th scope="col">Action</th>}
              </tr>
            </thead>
            <tbody>
              {filterData.length > 0 ? (
                filterData.map((photos, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{photos.title}</td>
                    <td>
                      <img src={photos.url} className="photos" />
                    </td>
                    {userData.role === "admin" && (
                      <td className="d-flex flex-row">
                        <Link
                          to={`/edit/${photos.id}`}
                          className="btn btn-sm btn-primary mr-1"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => onDeletePhotos(photos.id)}
                          className="btn btn-sm btn-danger mr-1"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No photos found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home();

// const mapStateToProps = (state) => ({
//   photos: state.photos,
//   userData: state.userData,
// });

// const mapDispatchToProps = (dispatch) => ({
//   deletePhotos: (id) => {
//     dispatch({ type: "DELETE_PHOTOS", payload: id });
//   },
//   addPhotos: (data) => {
//     dispatch({ type: "ADD_PHOTOS", payload: data });
//   },
//   updatePhotos: (data) => {
//     dispatch({ type: "UPDATE_PHOTOS", payload: data });
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
