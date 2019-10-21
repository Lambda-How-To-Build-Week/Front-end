import React from "react";
import LogIn from "./logIn-form";
import styled from "styled-components";
import { login } from "../store/actions/index";
import { connect } from "react-redux";

const StyledDiv = styled.div`

    border: 1px solid  #E76E3C;
    height: 90vh;
    width: 70vw;
    margin 3% auto;
    border-radius: 5rem;
    padding: 1rem 2rem;

    @media only screen and (max-width :700px){
        border: none;
    }

    .container{
        display: flex;
        height: 100%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        .log-in-image{
            width: 30%;
            height: 70%;

            @media only screen and (max-width: 1000px){
              height: 50%;
            }


            img{
                height: 100%;
                width: 100%;
            }


        }

        .log-in-form{
            width: 50%;
        }

        @media only screen and (max-width :700px){
            .log-in-image{
                display: none;
            }

            .log-in-form{
                width: 80%;
            }

        }
    }


`;

function LogInPage(props) {
  const { login } = props;

  return (
    <StyledDiv>
      <div className="container">
        <div className="log-in-image">
          <img
            src="data:image/png;base64,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"
            alt="demo"
          />
        </div>
        <div className="log-in-form">
          <LogIn />
        </div>
      </div>
    </StyledDiv>
  );
}

const mapStateToProps = state => ({
  error: state.error,
  addUser: state.addUser,
  fetchingData: state.fetchingData
});

export default connect(
  mapStateToProps,
  { login }
)(LogInPage);
