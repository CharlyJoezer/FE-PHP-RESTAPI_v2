import css from "./Content.module.css";
import { useEffect, useRef, useState } from "react";
import { toRupiah } from "../../../Utils/toRupiahFormat";
import BASEURL from "../../../Utils/baseURL"
import ErrorPage from "../../../Pages/Errors/ErrorPage"

const Content = () => {
  const inputCategory = useRef(null);
  const inputType = useRef(null);
  const btnCategory = useRef(null);
  const btnType = useRef(null);

  const [showListCategory, setListCategory] = useState(false);
  const [dataCategory, setDataCategory] = useState([]);
  const [searchCategory, setSearchCategory] = useState([])
  const [showType, setType] = useState(false);
  const [categoryStatus, setCategoryStatus] = useState(false);
  const [typeStatus, setTypeStatus] = useState(false);
  const [dataTypeCategory, setDataTypeCategory] = useState([])
  const [errorRequest = {
    show : false,
    code : null
  }, setErrorRequest] = useState([])

  function handlePickCategory(event) {
    const category = event.target.getAttribute("aria-label");
    inputCategory.current.value = category;
    btnCategory.current.style.transform = "rotate(0deg)";
    setListCategory(false);
    setCategoryStatus(true);
  }
  function handlePickType(event) {
    const type = event.target.getAttribute("aria-label");
    inputType.current.value = type;
    btnType.current.style.transform = "rotate(0deg)";
    setType(false);
    setTypeStatus(true);
  }

  useEffect(function(){
    async function sendRequestCategory(){
      try{
        const url = BASEURL()+"/api/sub-categories"
        const request = await fetch(url,{
          method : 'GET'
          
        })

        if(request.status === 200){
          const response = await request.json()
          const filterNameCategory = response.data.map(category => {
            return category.name;
          })
          setSearchCategory(filterNameCategory)
          setDataCategory(filterNameCategory)
        }else if(request.status === 500){
          throw new Error("500")
        }
        
      }catch(error){
        setErrorRequest({show : true, code : isNaN(error.message) ? "500" : error.message})
      }
    }
    sendRequestCategory()
  }, [])

  return (
    <>
      {errorRequest.show ? 
        <ErrorPage code={errorRequest.code} />
        :
      <div className={css.container_content}>
        
        <form onSubmit={(event) => {
          event.preventDefault()
          const data = Object.fromEntries(new FormData(event.target).entries())
          console.log(data)

        }} className={css.wrapper_form}>
          <div className={css.form_category_and_type}>
            <div className={css.input_category_text}>Kategori Produk</div>
            <div className={css.input}>
              <input
                aria-label="input"
                ref={inputCategory}
                type="text"
                name="category_product"
                placeholder="Pilih Kategori"
                autoComplete="off"
                onClick={(event) => {
                  const label = event.currentTarget.getAttribute("aria-label");
                  const element = btnCategory.current;
                  if (label === "svg") {
                    if (showListCategory === true) {
                      element.style.transform = "rotate(0deg)";
                      setListCategory(false);
                    } else {
                      element.style.transform = "rotate(180deg)";
                      setListCategory(true);
                    }
                  } else {
                    element.style.transform = "rotate(180deg)";
                    setListCategory(true);
                  }
                }}
                onChange={() => {
                  setCategoryStatus(false);
                  setTypeStatus(false);
                }}
                onKeyUp={(e) => {
                  const searchKeyword = e.target.value

                  const pattern = new RegExp(searchKeyword, 'i')
                  const filterCategory = dataCategory.filter(category => pattern.test(category))
                  setSearchCategory(filterCategory)
                }}
                style={{
                  border: showListCategory && "1px solid #307FE2",
                }}
              />
              <svg
                aria-label="svg"
                onClick={(event) => {
                  const label = event.currentTarget.getAttribute("aria-label");
                  const element = btnCategory.current;
                  if (label === "svg") {
                    if (showListCategory === true) {
                      element.style.transform = "rotate(0deg)";
                      setListCategory(false);
                    } else {
                      element.style.transform = "rotate(180deg)";
                      setListCategory(true);
                    }
                  } else {
                    element.style.transform = "rotate(180deg)";
                    setListCategory(true);
                  }
                }}
                ref={btnCategory}
                fill="#000000"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"></path>
                </g>
              </svg>
            </div>
            {showListCategory && (
              <div className={css.list_input_category}>
                {searchCategory.map(function(item){
                  return (
                    <div
                      className={css.list_item_category}
                      onClick={handlePickCategory}
                      aria-label={item}
                      key={item}
                    >
                      {item}
                    </div>
                  )
                })}
              </div>
            )}

            {categoryStatus && (
              <div className={css.input_type}>
                <div className={css.input}>
                  <input
                    aria-label="input"
                    type="text"
                    placeholder="Tipe Produk"
                    readOnly
                    ref={inputType}
                    name="category_type_product"
                    onClick={(event) => {
                      const label =
                        event.currentTarget.getAttribute("aria-label");
                      const element = btnType.current;
                      if (label === "svg") {
                        if (showType === true) {
                          element.style.transform = "rotate(0deg)";
                          setType(false);
                        } else {
                          element.style.transform = "rotate(180deg)";
                          setType(true);
                        }
                      } else {
                        element.style.transform = "rotate(180deg)";
                        setType(true);
                      }
                    }}
                  />
                  <svg
                    aria-label="svg"
                    onClick={(event) => {
                      const label =
                        event.currentTarget.getAttribute("aria-label");
                      const element = btnType.current;
                      if (label === "svg") {
                        if (showType === true) {
                          element.style.transform = "rotate(0deg)";
                          setType(false);
                        } else {
                          element.style.transform = "rotate(180deg)";
                          setType(true);
                        }
                      } else {
                        element.style.transform = "rotate(180deg)";
                        setType(true);
                      }
                    }}
                    ref={btnType}
                    fill="#000000"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"></path>
                    </g>
                  </svg>
                </div>
                {showType && (
                  <div className={css.list_type}>
                    <div
                      className={css.list_item_type}
                      onClick={handlePickType}
                      aria-label="Akun"
                    >
                      Akun
                    </div>
                    <div
                      className={css.list_item_type}
                      onClick={handlePickType}
                      aria-label="Lock"
                    >
                      Lock
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {typeStatus && (
            <>
              <div className={css.form_information_product}>
                <div className={css.information_product_text}>
                  Informasi Produk
                </div>
                <div className={css.input_name_product}>
                  <span>Nama Item</span>
                  <input
                    type="text"
                    name="name_product"
                    placeholder="Masukkan Nama Item yang kamu ingin jual"
                    autoComplete="off"
                  />
                </div>
                <div className={css.input_image_product}>
                  <div className={css.image_product_text}>Gambar Produk</div>
                  <div className={css.wrapper_input_file}>
                    <input
                      type="file"
                      name="image_product"
                      onChange={(event) => {
                        const selectedFile = event.target.files[0];
                        if (selectedFile) {
                          const reader = new FileReader();
                          reader.onload = function () {
                            event.target.style.backgroundImage =
                              "url(" + reader.result + ")";
                            event.target.style.backgroundSize = "cover";
                          };

                          reader.readAsDataURL(selectedFile);
                        }
                      }}
                    />
                  </div>
                  <div className={css.input_image_rules}>
                    *Ukuran gambar harus berukuran 200 x 200 jika lebih maka
                    akan otomatis di resize. dan harus berformat PNG,JPG atau
                    GIF.
                  </div>
                </div>
                <div className={css.input_desc_product}>
                  <div className={css.desc_product_text}>Deskripsi Produk</div>
                  <div className={css.wrapper_input_desc}>
                    <textarea
                      name="desc_product"
                      id=""
                      cols="1"
                      rows="5"
                      placeholder="Masukan deskripsi Produk"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className={css.form_information_stock_and_price}>
                <div className={css.information_stock_and_price_text}>
                  Informasi Stok dan Harga Produk
                </div>
                <div className={css.input_price_product}>
                  <div className={css.price_product_text}>Harga Produk</div>
                  <div className={css.wrapper_input_price}>
                    <span>Rp.</span>
                    <input
                      type="text"
                      placeholder="0"
                      name="price_product"
                      onChange={(event) => {
                        const valueInput = event.target.value.replace(
                          /\./g,
                          ""
                        );
                        if (isNaN(valueInput)) {
                          return false;
                        }
                        return (event.target.value = toRupiah(valueInput));
                      }}
                    />
                  </div>
                </div>
                <div className={css.input_stock_product}>
                  <div className={css.stock_product_text}>Stok Produk</div>
                  <div className={css.wrapper_input_stock}>
                    <input
                      type="numeric"
                      name="stock_product"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className={css.input_min_order_product}>
                  <div className={css.min_order_product_text}>
                    Minimal Pembelian
                  </div>
                  <div className={css.wrapper_input_min_order}>
                    <input
                      type="numeric"
                      name="min_order_product"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              <div className={css.confirm_form}>
                <button type="submit">Buat Produk</button>
              </div>
            </>
          )}
        </form>
      </div>
      }
    </>
  );
};

export default Content;
