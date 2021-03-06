// react
import { useEffect } from "react";

// react router dom
import { Redirect } from "react-router";

// components
import Groups from "../../components/Groups";
import Menu from "../../components/Menu";

// styles
import { Container, GroupContainer, SectionMenu, MenuItem } from "./styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// provider
import { useChecked } from "../../providers/user";
import { useId } from "../../providers/group";

//-----------------------------------------------
const GroupsPage = () => {
  const { isAuth, checkAuth } = useChecked();
  const {
    nextPage,
    previousPage,
    page,
    previousPageGroup,
    nextPageGroup,
  } = useId();

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isAuth ? (
        <>
          <Menu />
          <Container>
            <GroupContainer>
              <h1>Grupos</h1>
              <SectionMenu>
                <MenuItem>
                  <ArrowBackIosIcon
                    disabled={previousPage}
                    onClick={previousPageGroup}
                  />
                </MenuItem>
                <MenuItem>{page}</MenuItem>
                <MenuItem>
                  <ArrowForwardIosIcon
                    disabled={nextPage}
                    onClick={nextPageGroup}
                  />
                </MenuItem>
              </SectionMenu>
              <Groups />
            </GroupContainer>
          </Container>
        </>
      ) : (
        <Redirect to={"/register"} />
      )}
    </>
  );
};

export default GroupsPage;
