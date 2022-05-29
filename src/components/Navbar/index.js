import * as React from "react";
import { connect } from "react-redux";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Navbar = ({ isLogin, onLogout }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} data-testid="navbar">
        <AppBar sx={{ bgcolor: "#06304B", p: "10px" }} position="static">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              BANK ABC{" "}
            </Typography>
            {isLogin && (
              <Button
                style={{
                  textDecoration: "none",
                  backgroundColor: "#FFCE3F ",
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
const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => {
    dispatch({ type: "LOGOUT" });
  },
});

export { Navbar as NavbarUnwrapped };
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
