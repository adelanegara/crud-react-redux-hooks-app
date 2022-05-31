export default (state, action) => {
  switch (action.type) {
    case "ADD_PHOTOS":
      return {
        ...state,
        photos: [...state.photos, action.payload],
      };
    case "DELETE_PHOTOS":
      const contactFilter = state.photos.filter((photos) =>
        photos.id === action.payload ? null : photos
      );
      return {
        ...state,
        photos: contactFilter,
      };
    case "UPDATE_PHOTOS":
      const contactUpdate = state.photos.filter((photos) =>
        photos.id === action.payload.id
          ? Object.assign(photos, action.payload)
          : photos
      );
      return {
        ...state,
        photos: contactUpdate,
      };
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
