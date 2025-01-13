import ChangeTextCss from "./ChangeText.module.css";

const ChangeText = ({text, setText}) => {
    return (
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-md-6 border rounded shadow p-3 text-center">
            <h1 className={ChangeTextCss.changeTextHeading}>Text Change</h1>
            <div className="display-6">
              {text}
            </div>
            <div className="d-flex gap-2 justify-content-center mt-3">
              <button className="btn btn-primary btn-lg rounded-0" onClick={() => setText("Hello World")}>Hello World</button>
              <button className="btn btn-primary btn-lg rounded-0" onClick={() => setText("Hello React")}>Hello React</button>
              <button className="btn btn-primary btn-lg rounded-0" onClick={() => setText("Hello Universe")}>Hello Universe</button>
            </div>
          </div>
        </div>
    );
};

export default ChangeText;