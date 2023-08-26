import {useState} from "react"

const Counter = (props) => {
  const {min = 0, number = 0, sizeBtn = "40px", marginBtn = '0px 15px', nameInput} = props
  const [counter, setCounter] = useState(parseInt(number));
  return (
    <>
      <div className="container_counter" style={{
          display: 'flex',
          alignUItems: 'center',
          fontSize: '20px'
      }}>
        <img
          src="/assets/icon/minus.png"
          alt="minus"
          style={{
            opacity: counter <= min && "0.3",
            lineHeight: "none",
            margin: marginBtn,
            width: sizeBtn,
            height: sizeBtn,
            cursor: "pointer",
            transition: "0.1s",
            borderRadius: "50%",
          }}
          onClick={() => {
            const getValue = counter - 1;
            if (getValue < min) {
              return false;
            }
            setCounter(getValue);
          }}
        />
        <div
          style={{
            border: "none",
            fontSize: "16px",
            width: "auto",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <input
            type="number"
            name={nameInput}
            value={counter}
            style={{
              textAlign: "center",
              width: "50px",
              fontSize: "15px",
              border: "none",
              outline: "none",
              borderBottom: "1px solid #ccc",
              padding: "3px 0px",
              WebkitAppearance: "none",
              margin: "0",
            }}
            onChange={(event) => {
              if (event.target.value[0] === "0") {
                event.target.value = event.target.value.slice(1);
              }
              const getValue = event.target.value.toString();
              setCounter(parseInt(getValue));
            }}
            onKeyUp={(event) => {
              const getValue =
                event.target.value === ""
                  ? min
                  : parseInt(event.target.value.replace(/\D/g, ""));
              if (getValue >= 10000) {
                setCounter(9999);
              } else {
                setCounter(getValue);
              }
            }}
          />
        </div>
        <img
          src="/assets/icon/plus.png"
          alt="plus"
          style={{
            lineHeight: "none",
            margin: marginBtn,
            width: sizeBtn,
            height: sizeBtn,
            cursor: "pointer",
            transition: "0.1s",
            borderRadius: "50%",
          }}
          onClick={() => {
            const getValue = counter + 1;
            if (getValue < 10000) {
              setCounter(getValue);
            }
          }}
        />
      </div>
    </>
  );
};

export default Counter;
