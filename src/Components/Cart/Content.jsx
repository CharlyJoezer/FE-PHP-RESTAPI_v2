import css from "./Content.module.css";
import Counter from "../Counter";
import { useRef, useState } from "react";

const Content = () => {
  const [checklist, setChecklist] = useState([]);
  return (
    <>
      <div className={css.container_content}>
        <div className={css.feature_checklist_all}>
          <input type="checkbox" />
          <span>Pilih Semua</span>
        </div>
        <div className={css.list_cart_item}>
          <div className={css.cart_item}>
            <div className={css.checklist_cart_item}>
              <input type="checkbox" />
            </div>

            <div className={css.info_product_and_action}>
              <div className={css.wrapper_data_product}>
                <div className={css.data_product}>
                  <div className={css.image_product}>
                    <img
                      src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20221228%2Fqe293ia8fi34jphkz6n6p.jpg&w=96&q=75"
                      alt="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20221228%2Fqe293ia8fi34jphkz6n6p.jpg&w=96&q=75"
                    />
                  </div>
                  <div style={{ paddingLeft: "10px" }}>
                    <div className={css.name_product}>
                      AKUN BARU + CUSTOM NAME
                    </div>
                    <div className={css.category_product}>Growtopia</div>
                    <div className={css.price_product}>Rp5.000</div>
                  </div>
                </div>
                <div className={css.product_shop_name}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M3.77791 3.65484C3.59687 4.01573 3.50783 4.46093 3.32975 5.35133L2.73183 8.34093C2.35324 10.2339 3.8011 12 5.73155 12C7.30318 12 8.61911 10.8091 8.77549 9.24527L8.8445 8.55515C8.68141 10.4038 10.1385 12 11.9998 12C13.8737 12 15.338 10.382 15.1515 8.51737L15.2245 9.24527C15.3809 10.8091 16.6968 12 18.2685 12C20.1989 12 21.6468 10.2339 21.2682 8.34093L20.6703 5.35133C20.4922 4.46095 20.4031 4.01573 20.2221 3.65484C19.8406 2.89439 19.1542 2.33168 18.3337 2.10675C17.9443 2 17.4903 2 16.5823 2H14.4998H7.41771C6.50969 2 6.05567 2 5.66628 2.10675C4.84579 2.33168 4.15938 2.89439 3.77791 3.65484Z"
                        fill="#2F7FE1"
                      ></path>{" "}
                      <path
                        d="M18.2685 13.5C19.0856 13.5 19.8448 13.2876 20.5 12.9189V14C20.5 17.7712 20.5 19.6568 19.3284 20.8284C18.3853 21.7715 16.9796 21.9554 14.5 21.9913V18.5C14.5 17.5654 14.5 17.0981 14.299 16.75C14.1674 16.522 13.978 16.3326 13.75 16.201C13.4019 16 12.9346 16 12 16C11.0654 16 10.5981 16 10.25 16.201C10.022 16.3326 9.83261 16.522 9.70096 16.75C9.5 17.0981 9.5 17.5654 9.5 18.5V21.9913C7.02043 21.9554 5.61466 21.7715 4.67157 20.8284C3.5 19.6568 3.5 17.7712 3.5 14V12.9189C4.15524 13.2876 4.91439 13.5 5.73157 13.5C6.92864 13.5 8.02617 13.0364 8.84435 12.2719C9.67168 13.0321 10.7765 13.5 11.9998 13.5C13.2232 13.5 14.3281 13.032 15.1555 12.2717C15.9737 13.0363 17.0713 13.5 18.2685 13.5Z"
                        fill="#2F7FE1"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span>Lopix Store</span>
                </div>
              </div>
              <h5 className={css.information_product_text}>Informasi Produk</h5>
              <div className={css.input_note}>
                <span className={css.input_note_label}>
                  Catatan untuk Penjual :
                </span>
                <input type="text" />
              </div>
              <div className={css.other_action}>
                <div className={css.delete_and_counter}>
                  <img src="/assets/icon/trash.png" alt="" />
                  <Counter
                    number="0"
                    sizeBtn="35px"
                    marginBtn="0px 3px"
                    nameInput="purchase_amount"
                  />
                </div>
                <span className={css.info_stock}>Stok 999</span>
              </div>
            </div>
          </div>
          <div className={css.cart_item}>
            <div className={css.checklist_cart_item}>
              <input type="checkbox" />
            </div>

            <div className={css.info_product_and_action}>
              <div className={css.wrapper_data_product}>
                <div className={css.data_product}>
                  <div className={css.image_product}>
                    <img
                      src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20221228%2Fqe293ia8fi34jphkz6n6p.jpg&w=96&q=75"
                      alt="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20221228%2Fqe293ia8fi34jphkz6n6p.jpg&w=96&q=75"
                    />
                  </div>
                  <div style={{ paddingLeft: "10px" }}>
                    <div className={css.name_product}>
                      AKUN BARU + CUSTOM NAME
                    </div>
                    <div className={css.category_product}>Growtopia</div>
                    <div className={css.price_product}>Rp5.000</div>
                  </div>
                </div>
                <div className={css.product_shop_name}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M3.77791 3.65484C3.59687 4.01573 3.50783 4.46093 3.32975 5.35133L2.73183 8.34093C2.35324 10.2339 3.8011 12 5.73155 12C7.30318 12 8.61911 10.8091 8.77549 9.24527L8.8445 8.55515C8.68141 10.4038 10.1385 12 11.9998 12C13.8737 12 15.338 10.382 15.1515 8.51737L15.2245 9.24527C15.3809 10.8091 16.6968 12 18.2685 12C20.1989 12 21.6468 10.2339 21.2682 8.34093L20.6703 5.35133C20.4922 4.46095 20.4031 4.01573 20.2221 3.65484C19.8406 2.89439 19.1542 2.33168 18.3337 2.10675C17.9443 2 17.4903 2 16.5823 2H14.4998H7.41771C6.50969 2 6.05567 2 5.66628 2.10675C4.84579 2.33168 4.15938 2.89439 3.77791 3.65484Z"
                        fill="#2F7FE1"
                      ></path>{" "}
                      <path
                        d="M18.2685 13.5C19.0856 13.5 19.8448 13.2876 20.5 12.9189V14C20.5 17.7712 20.5 19.6568 19.3284 20.8284C18.3853 21.7715 16.9796 21.9554 14.5 21.9913V18.5C14.5 17.5654 14.5 17.0981 14.299 16.75C14.1674 16.522 13.978 16.3326 13.75 16.201C13.4019 16 12.9346 16 12 16C11.0654 16 10.5981 16 10.25 16.201C10.022 16.3326 9.83261 16.522 9.70096 16.75C9.5 17.0981 9.5 17.5654 9.5 18.5V21.9913C7.02043 21.9554 5.61466 21.7715 4.67157 20.8284C3.5 19.6568 3.5 17.7712 3.5 14V12.9189C4.15524 13.2876 4.91439 13.5 5.73157 13.5C6.92864 13.5 8.02617 13.0364 8.84435 12.2719C9.67168 13.0321 10.7765 13.5 11.9998 13.5C13.2232 13.5 14.3281 13.032 15.1555 12.2717C15.9737 13.0363 17.0713 13.5 18.2685 13.5Z"
                        fill="#2F7FE1"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span>Lopix Store</span>
                </div>
              </div>
              <h5 className={css.information_product_text}>Informasi Produk</h5>
              <div className={css.input_note}>
                <span className={css.input_note_label}>
                  Catatan untuk Penjual :
                </span>
                <input type="text" />
              </div>
              <div className={css.other_action}>
                <div className={css.delete_and_counter}>
                  <img src="/assets/icon/trash.png" alt="" />
                  <Counter
                    number="0"
                    sizeBtn="35px"
                    marginBtn="0px 3px"
                    nameInput="purchase_amount"
                  />
                </div>
                <span className={css.info_stock}>Stok 999</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={css.action_checkout}>
        <div className={css.count_checklist_item}>
          <div className={css.text_count_checklist}>
            Total Pembelian : (1 Produk)
          </div>
          <div className={css.total_price}>Rp5.000</div>
        </div>
        <button className={css.btn_checkout}>Checkout</button>
      </div>
    </>
  );
};

export default Content;