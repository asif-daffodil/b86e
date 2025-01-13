import CounterCSS from './Counter.module.css';

const Counter = ({count, increment, decrement}) => {
    return (
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-md-6 border rounded shadow p-3 text-center">
            <h1 className={CounterCSS.counterHeading}>Counter</h1>
            <div className="display-6">
              {count}
            </div>
            <div className="d-flex gap-2 justify-content-center mt-3">
              <button className="btn btn-success btn-lg rounded-0" onClick={() => increment()}>+</button>
              <button className="btn btn-danger btn-lg rounded-0" onClick={() => decrement()}>-</button>
            </div>
          </div>
        </div>
    );
};

export default Counter;