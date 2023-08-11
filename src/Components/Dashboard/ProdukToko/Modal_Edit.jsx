import css from "./Modal_Edit.module.css";
import { useState } from "react";
import { toRupiah } from "../../../Utils/toRupiahFormat";
import Counter from "../../Counter"

export const Modal_Edit = (props) => {
  const { data } = props;
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
            <Counter nameInput="edit_stock" number={data.stock} />
          </div>
          <button className={css.btn_confirm} type="submit">
            Simpan Perubahan
          </button>
        </form>
      </div>
    </>
  );
};
