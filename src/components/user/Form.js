import React from "react";
import AsideBar from "../AsideBar";
import Input from "./Inputs";
import Button from "../Button";
import "../../stylesheets/Form.scss";
import "../../assets/icons/calendar-icon.svg";

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="request__wrap">
          <div className="wrap__aside">
            <AsideBar />
          </div>
          <div className="wrap__form">
            <form className="request__form">
              <h2 className="request__form--title">Solicitud de vacaciones</h2>
              <div className="request__form--inputs">
                <div className="left-inputs">
                  <Input
                    classLabel="date"
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
                    classLabel="date"
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
            <Button />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Form;
