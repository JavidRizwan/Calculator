import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Element, Clear, Equal, Ce } from "./calculatorSlice";

export function Calculator() {
  const array = useSelector((state) => state.calculator.array);
  const result = useSelector((state) => state.calculator.result);
  let display = array.join("");
  const dispatch = useDispatch();

  return (
    <div id="calc" className="container-sm">
      <div className="row display-box">
        <h5 className="display">{result}</h5>
        <h4 className="display" id="display">
          {array.length !== 0 ? display : result}
        </h4>
      </div>
      <div className="row">
        <div className="col col-9">
          <div className="row">
            <button
              className="btn-danger col-4"
              id="clear"
              onClick={() => dispatch(Clear())}
            >
              AC
            </button>
            <button
              id="ce"
              className="col-4 btn"
              onClick={() => dispatch(Ce())}
            >
              CE
            </button>
            <button
              className="btn col-4"
              id="divide"
              onClick={() => dispatch(Element("/"))}
            >
              /
            </button>
          </div>
          <div className="row">
            <button
              className="btn col-4"
              id="seven"
              onClick={() => dispatch(Element("7"))}
            >
              7
            </button>
            <button
              className="btn col-4"
              id="eight"
              onClick={() => dispatch(Element("8"))}
            >
              8
            </button>
            <button
              className="btn col-4"
              id="nine"
              onClick={() => dispatch(Element("9"))}
            >
              9
            </button>
          </div>
          <div className="row">
            <button
              className="btn col-4"
              id="four"
              onClick={() => dispatch(Element("4"))}
            >
              4
            </button>
            <button
              className="btn col-4"
              id="five"
              onClick={() => dispatch(Element("5"))}
            >
              5
            </button>
            <button
              className="btn col-4"
              id="six"
              onClick={() => dispatch(Element("6"))}
            >
              6
            </button>
          </div>
          <div className="row">
            <button
              className="btn col-4"
              id="one"
              onClick={() => dispatch(Element("1"))}
            >
              1
            </button>
            <button
              className="btn col-4"
              id="two"
              onClick={() => dispatch(Element("2"))}
            >
              2
            </button>
            <button
              className="btn col-4"
              id="three"
              onClick={() => dispatch(Element("3"))}
            >
              3
            </button>
          </div>
          <div className="row">
            <button
              className="btn col-8"
              id="zero"
              onClick={() => dispatch(Element("0"))}
            >
              0
            </button>
            <button
              className="btn col-4"
              id="decimal"
              onClick={() => dispatch(Element("."))}
            >
              .
            </button>
          </div>
        </div>
        <div className="col col-3 p-0 m-0">
          <button
            className="btn w-100"
            id="multiply"
            onClick={() => dispatch(Element("*"))}
          >
            *
          </button>
          <button
            className="btn w-100"
            id="subtract"
            onClick={() => dispatch(Element("-"))}
          >
            -
          </button>
          <button
            className="btn w-100"
            id="add"
            onClick={() => dispatch(Element("+"))}
          >
            +
          </button>
          <button
            className="btn w-100"
            id="equals"
            onClick={() => dispatch(Equal())}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
