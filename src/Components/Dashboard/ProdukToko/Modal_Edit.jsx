import css from "./Modal_Edit.module.css";
import { useState } from "react";
import { toRupiah } from "../../../Utils/toRupiahFormat";

export const Modal_Edit = (props) => {
  const { data } = props;
  const [counter, setCounter] = useState(data.stock);
  const [price, setPrice] = useState(data.price);
  return (
    <>
      <div className={css.container_modal_edit}>
        <form
          className={css.modal}
          onSubmit={(event) => {
            event.preventDefault();
            const data = Object.fromEntries(
              new FormData(event.target).entries()
            );
            console.log(data);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            style={{
              width: "8%",
              height: "5px",
              borderRadius: "10px",
              backgroundColor: "grey",
              margin: "0 auto",
            }}
          ></div>
          <div className={css.header_text}>Edit Stok dan Harga</div>
          <div className={css.name_product}>{data.name}</div>
          <div className={css.category_product}>{data.category}</div>
          <div className={css.wrapper_input_price}>
            <span>Rp.</span>
            <input
              type="text"
              placeholder="0"
              name="edit_price"
              value={toRupiah(price)}
              onChange={(event) => {
                const changeFormat = event.target.value.replace(/\./g, "");
                setPrice(toRupiah(changeFormat))
              }}
            />
          </div>
          <div className={css.wrapper_input_stock}>
            <span>Stock Produk</span>
            <div className={css.counter_stock}>
              <img
                className={css.counter_number_min}
                src="/assets/icon/minus.png"
                alt="minus"
                style={{
                  opacity: counter === 0 && "0.3",
                }}
                onClick={() => {
                  const getValue = counter - 1;
                  if (getValue < 0) {
                    return false;
                  }
                  setCounter(getValue);
                }}
              />
              <div className={css.counter_number}>
                <input
                  type="number"
                  name="edit_stock"
                  value={counter}
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
                        ? 0
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
                className={css.counter_number_plus}
                src="/assets/icon/plus.png"
                alt="plus"
                onClick={() => {
                  const getValue = counter + 1;
                  if (getValue < 10000) {
                    setCounter(getValue);
                  }
                }}
              />
            </div>
          </div>
          <button className={css.btn_confirm} type="submit">
            Simpan Perubahan
          </button>
        </form>
      </div>
    </>
  );
};
