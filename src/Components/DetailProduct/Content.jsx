import css from "./Content.module.css";
import { Link } from "react-router-dom";

const Content = (props) => {
  const product = props.product;
  return (
    <>
      <div className={css.container_content}>
        <div className={css.product_image}>
          <img
            src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F202325%2Fgssphrlpip6a7swcf46tbw.jpg&w=1033&q=75"
            alt="test"
          />
        </div>
        <div className={css.product_about}>
          <div className={css.product_name}>AKUN BARU + CUSTOM NAME</div>
          <div className={css.product_category}>Growtopia</div>
          <div className={css.product_price}>
            Rp 5000 <span>/ 1 Product</span>
          </div>

          <div className={css.product_statistic}>
            <div className={css.statistic_item}>
              <svg
                viewBox="0 0 32 32"
                enableBackground="new 0 0 32 32"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Packaging_Delivery31"></g>{" "}
                  <g id="Packaging_Delivery30"></g>{" "}
                  <g id="Packaging_Delivery29"></g>{" "}
                  <g id="Packaging_Delivery28"></g>{" "}
                  <g id="Packaging_Delivery27"></g>{" "}
                  <g id="Packaging_Delivery26"></g>{" "}
                  <g id="Packaging_Delivery25"></g>{" "}
                  <g id="Packaging_Delivery24"></g>{" "}
                  <g id="Packaging_Delivery23"></g>{" "}
                  <g id="Packaging_Delivery22"></g>{" "}
                  <g id="Packaging_Delivery21"></g>{" "}
                  <g id="Packaging_Delivery20"></g>{" "}
                  <g id="Packaging_Delivery19"></g>{" "}
                  <g id="Packaging_Delivery18"></g>{" "}
                  <g id="Packaging_Delivery17"></g>{" "}
                  <g id="Packaging_Delivery16"></g>{" "}
                  <g id="Packaging_Delivery15"></g>{" "}
                  <g id="Packaging_Delivery14"></g>{" "}
                  <g id="Packaging_Delivery13"></g>{" "}
                  <g id="Packaging_Delivery12"></g>{" "}
                  <g id="Packaging_Delivery11">
                    {" "}
                    <g>
                      {" "}
                      <path
                        d="M16,14.75c-0.0967,0-0.1938-0.0142-0.2871-0.042l-10-3c-0.5293-0.1587-0.8296-0.7163-0.6709-1.2451 C5.2012,9.9331,5.7588,9.6343,6.2871,9.792L16,12.7061l9.7129-2.9141c0.5288-0.1543,1.0859,0.1416,1.2451,0.6709 c0.1587,0.5288-0.1416,1.0864-0.6709,1.2451l-10,3C16.1938,14.7358,16.0967,14.75,16,14.75z"
                        fill="#231F20"
                      ></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        d="M27,11v12.75c0,0.41-0.25,0.78-0.63,0.93l-10,4c-0.12,0.05-0.24,0.07-0.37,0.07s-0.25-0.02-0.37-0.07 l-10-4C5.25,24.53,5,24.16,5,23.75V11c0-0.55,0.45-1,1-1h20C26.55,10,27,10.45,27,11z"
                        fill="#2F88FF"
                      ></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        d="M16.99,7.91c-0.06,0.38-0.34,0.69-0.7,0.8l-10,3C6.19,11.74,6.1,11.75,6,11.75 c-0.24,0-0.47-0.09-0.66-0.25l-4-3.5C1.07,7.77,0.95,7.4,1.02,7.05S1.34,6.41,1.68,6.3l9-3c0.3-0.1,0.63-0.05,0.89,0.13l5,3.5 C16.89,7.15,17.05,7.53,16.99,7.91z"
                        fill="#97C3FF"
                      ></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        d="M30.66,8l-4,3.5c-0.19,0.16-0.42,0.25-0.66,0.25c-0.1,0-0.19-0.01-0.29-0.04l-10-3 c-0.36-0.11-0.64-0.42-0.7-0.8s0.1-0.76,0.42-0.98l5-3.5c0.26-0.18,0.59-0.23,0.89-0.13l9,3c0.34,0.11,0.59,0.4,0.66,0.75 S30.93,7.77,30.66,8z"
                        fill="#97C3FF"
                      ></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        d="M27,10.75c0,0.44-0.29,0.83-0.71,0.96l-10,3c-0.1,0.03-0.19,0.04-0.29,0.04s-0.19-0.01-0.29-0.04l-10-3 C5.29,11.58,5,11.19,5,10.75s0.29-0.83,0.71-0.96l10-3c0.19-0.05,0.39-0.05,0.58,0l10,3C26.71,9.92,27,10.31,27,10.75z"
                        fill="#2F88FF"
                      ></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        d="M16.83,14.3l-4,6c-0.19,0.29-0.5,0.45-0.83,0.45c-0.12,0-0.25-0.02-0.37-0.07l-10-4 c-0.3-0.12-0.52-0.37-0.6-0.67C0.95,15.7,1.02,15.37,1.22,15.13l4-5c0.25-0.32-0.5162-0.8181-0.1262-0.7081L16.29,12.79 c0.3,0.09,0.54,0.32,0.65,0.62S17.01,14.04,16.83,14.3z"
                        fill="#97C3FF"
                      ></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        d="M30.97,15.94c-0.08,0.3-0.3,0.56-0.59,0.67l-10,4.07c-0.13,0.05-0.25,0.07-0.38,0.07 c-0.33,0-0.64-0.16-0.83-0.45l-4-6c-0.18-0.26-0.22-0.59-0.11-0.89s0.35-0.53,0.65-0.62l11.0244-3.3056 c0.39-0.12-0.2144,0.3256,0.0457,0.6356l4,4.94C30.98,15.3,31.05,15.63,30.97,15.94z"
                        fill="#97C3FF"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g id="Packaging_Delivery10"></g>{" "}
                  <g id="Packaging_Delivery09"></g>{" "}
                  <g id="Packaging_Delivery08"></g>{" "}
                  <g id="Packaging_Delivery07"></g>{" "}
                  <g id="Packaging_Delivery06"></g>{" "}
                  <g id="Packaging_Delivery05"></g>{" "}
                  <g id="Packaging_Delivery04"></g>{" "}
                  <g id="Packaging_Delivery03"></g>{" "}
                  <g id="Packaging_Delivery02"></g>{" "}
                  <g id="Packaging_Delivery01"></g>{" "}
                </g>
              </svg>
              <div>Minimal Beli:</div>
              <span>1</span>
            </div>
            <div className={css.statistic_item}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fffffff"
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5 21H12.5C16.2712 21 18.1569 21 19.3284 19.8284C20.5 18.6569 20.5 16.7713 20.5 13V6.99805C20.3548 7.00008 20.1509 7.00005 20 7.00002H4C3.84905 7.00005 3.6452 7.00008 3.5 6.99805V13C3.5 16.7713 3.5 18.6569 4.67157 19.8284C5.84315 21 7.72876 21 11.5 21ZM15.0595 11.4995C15.3353 11.1905 15.3085 10.7164 14.9995 10.4406C14.6905 10.1647 14.2164 10.1915 13.9406 10.5005L10.9286 13.8739L10.0595 12.9005C9.78359 12.5915 9.30947 12.5647 9.0005 12.8406C8.69152 13.1164 8.66468 13.5905 8.94055 13.8995L10.3691 15.4995C10.5114 15.6589 10.7149 15.75 10.9286 15.75C11.1422 15.75 11.3457 15.6589 11.488 15.4995L15.0595 11.4995Z"
                    fill="#2F88FF"
                  ></path>{" "}
                  <g opacity="0.5">
                    {" "}
                    <path
                      d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z"
                      fill="#2F88FF"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div>Transaksi Sukses:</div>
              <span>2999</span>
            </div>
            <div className={css.statistic_item}>
              <svg
                viewBox="0 0 48 48"
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
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    fillOpacity="0.01"
                  ></rect>{" "}
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    fill="#2F88FF"
                    stroke="#97C3FF"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M24.0083 12L24.0071 24.0088L32.4865 32.4882"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <div>Waktu Pengiriman:</div>
              <span>20 menit</span>
            </div>
          </div>

          <div className={css.hor_line}></div>

          <div className={css.shop_about_wrapper}>
            <div className={css.header}>Profil Toko</div>
            <Link className={css.shop_about}>
              <img
                src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20211013%2Fp0el1iqv1se7abjmy6l4np.png&w=48&q=75"
                alt="shop"
              />
              <div className={css.shop_profil}>
                <div className={css.shop_profil_name}>Lopix Store</div>
                <div className={css.shop_profil_active}>
                  Aktif 20 menit lalu
                </div>
              </div>
            </Link>
          </div>

          <div className={css.hor_line}></div>

          <div className={css.product_desc}>
            <div className={css.desc_header}>Deskripsi Produk</div>
            <div className={css.desc_content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              tempora quod reiciendis ut atque quia aliquid, vero voluptatibus
              mollitia explicabo. Fuga corporis minima deserunt illo amet error,
              laboriosam debitis fugiat consectetur voluptate id vel eveniet
              pariatur ab assumenda labore blanditiis porro consequatur dolor!
              Et tenetur ab amet, dolore minima aspernatur quisquam tempore
              sapiente fugiat facere harum rerum, odit consequatur praesentium
              ex eaque non pariatur sed nihil accusantium cum deleniti corrupti.
              Mollitia tempore voluptatibus enim corrupti provident similique
              voluptatem eveniet obcaecati vero odit necessitatibus odio fugit,
              ut placeat soluta assumenda nemo at veniam cumque recusandae. Aut
              temporibus porro ratione sequi facilis?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
