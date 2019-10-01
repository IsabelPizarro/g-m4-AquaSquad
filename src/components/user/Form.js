import React from "react";
import Header from "./../Header";
import Input from "./Inputs";
// import Button from "../Button";
import "../../stylesheets/Form.scss";
import "../../assets/icons/calendar-icon.svg";

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="request__wrap">
          <form className="request__form">
            <h2 className="request__form--title">Solicitud de vacaciones</h2>
            <div className="request__form--inputs">
              <div className="left-inputs">
                <Input
                  classInput="request__date"
                  label="Desde"
                  placeholder="13/09/2019"
                />
                <Input
                  classInput="request__job"
                  type="select"
                  placeholder="Jefe de proyecto"
                />
                <Input
                  classInput="request__chapter"
                  type="select"
                  placeholder="Chapter"
                />
              </div>
              <div className="right-inputs">
                <Input
                  classInput="request__date"
                  label="Hasta"
                  placeholder="16/09/2019"
                />
                <Input
                  classInput="request__text"
                  type="text"
                  placeholder="Asunto"
                />
              </div>
            </div>
            <button className="request__form--submitButton">Enviar</button>
          </form>
          {/* <Button /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default Form;
