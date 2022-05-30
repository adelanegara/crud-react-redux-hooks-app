import React, { useContext } from "react"; // import { connect } from "react-redux";
import { GlobalContext } from "../../Context/GlobalState";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

// const Navbar = ({ isLogin, onLogout }) => {
const Navbar = ({}) => {
  const { isLogin, onLogout } = useContext(GlobalContext);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} data-testid="navbar">
        <AppBar sx={{ bgcolor: "#06304B", p: "10px" }} position="static">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              context api{" "}
            </Typography>
            {isLogin && (
              <Button
                data-testid="button-logout"
                style={{
                  textDecoration: "none",
                  backgroundColor: "red ",
                  padding: "8px 12px",
                  fontWeight: "bold",
                  color: "#0094b6",
                }}
                onClick={onLogout}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   isLogin: state.isLogin,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onLogout: () => {
//     dispatch({ type: "LOGOUT" });
//   },
// });

export { Navbar as NavbarUnwrapped };
export default Navbar();

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
