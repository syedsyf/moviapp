import React from "react";

function Product({ productName, rating, price,inCart,onAdd,onRemove}) {

    const handelAdd=()=>{
        onAdd()
    }
    const handelRemove=()=>{
        onRemove()
    }
  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Product image*/}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">{productName}</h5>
              {/* Product reviews*/}
              <div className="d-flex justify-content-center small text-warning mb-2">
                {[...Array(rating)].map((index,value) => {
                  return <i className="bi-star-fill" key={index} />;
                })}
              </div>
              {price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {inCart?<button 
              className="btn btn-dark mt-auto" 
              onClick={handelRemove}
              >
                Remove from Cart
              </button>:<button  
              className="btn btn-outline-dark mt-auto" 
              onClick={handelAdd}
              >
                Add to Cart
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
