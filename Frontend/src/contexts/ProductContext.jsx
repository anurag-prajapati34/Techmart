import { createContext, useEffect, useRef, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebaseAuth";
import { toast } from "react-hot-toast";

const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {


  const [products, setProducts] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);

  const [cartProducts, setCartProducts] = useState([]);
  const [logedInUser, setLogedInUser] = useState();
  const newArrivalsRef = useRef();
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;


  const scrollToView = (sectionId) => {
    if (sectionId === "newArrivals") {
      newArrivalsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {

    setShopProducts(products)
  }, [products])
  const fetchProducts = async () => {
    try {
      fetch(`${SERVER_URL}/products`).then(async (response) => {
        const responseData = await response.json();

        setProducts(responseData.products);
      });
    } catch (error) {
      console.warn("Error fetching products:", error);
    }
  };

  const fetchCartProducts = async () => {
    fetch(`${SERVER_URL}/cart?userAuthId=${logedInUser.uid}`)
      .then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();

          setCartProducts(responseData.cart.reverse());
        }
      })
      .catch((err) => {
        console.warn("Error fetching cart products:", err);
      });
  };

  const addProductToUserCart = (product, sizeToBuy, quantityToBuy) => {
    const userAuthId = logedInUser.uid;
const id=toast.loading("Adding to cart...");
    fetch(`${SERVER_URL}/addToCart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userAuthId: userAuthId,
        product: product,
        sizeToBuy: sizeToBuy,
        quantityToBuy: quantityToBuy,
      }),
    })
      .then((product) => {
        toast.success("Successfully added to Cart !",{id:id});
        fetchCartProducts();
      })
      .catch((err) => toast.error("Unexpected error",{id:id}));
  };

  const removeProductFromUserCart = (product_id) => {
    const userAuthId = logedInUser.uid;
const id=toast.loading("Removing from cart...")
    fetch(`${SERVER_URL}/removeProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userAuthId: userAuthId,
        product_id: product_id,
      }),
    })
      .then(() => {
        fetchCartProducts();
        toast.success("Product removed !",{id:id});
      })
      .catch(() => toast.error("Unexpected error",{id:id}));
  };

  const updateCartProduct = (product_id, newQuantity) => {
    const userAuthId = logedInUser.uid;
    const id=toast.loading("Updating...")
    fetch(`${SERVER_URL}/updateCartProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userAuthId: userAuthId,
        product_id: product_id,
        newQuantity: newQuantity,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();

          if (responseData) {
            toast.success("Updated successfully",{id:id});
            fetchCartProducts();
          }
        }
      })
      .catch((err) => {
        toast.error("Unexpected error",{id:id});
      });
  };
  const addProductRating = (product_id, comment, rating) => {
    const userEmail = logedInUser?.email;
    const userName = logedInUser.displayName
      ? logedInUser.displayName
      : "No name";
      const id=toast.loading("Submiting review...")
    fetch(`${SERVER_URL}/productRatingAndReview`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        product_id,
        comment,
        rating,
        userEmail,
        userName,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();
          if (responseData) {
            toast.success("Review submited",{id:id});
          }
        }
      })
      .catch((err) => {
        toast.error("Unexpected error",{id:id});
      });
  };

  const handleFeedbackSubmission = (formData) => {
    const id=toast.loading("Removing from cart...")
    fetch(`${SERVER_URL}/feedback`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        'name': formData?.name,
        'email': formData?.email,
        'phone': formData?.phone,
        'message': formData?.message
      })
    }).then((response) => {
      if (response.ok) {
        toast.success("Thanks for your valuable feedback",{id:id})
      } else {
        toast.error("Unexpected error ",{id:id})
      }
    }).catch((err) => toast.error("Unexpected error",{id:id}))
  }


  useEffect(() => {
    const userResult = onAuthStateChanged(firebaseAuth, (user) => {
      setLogedInUser(user);
    });
  });

  useEffect(() => {
    fetchProducts();

    if (logedInUser) {
      fetchCartProducts();
    } else {
      setCartProducts(null);
    }
  }, [logedInUser]);

  return (
    <ProductContext.Provider
      value={{
        products,
        cartProducts,
        addProductToUserCart,

        logedInUser,
        removeProductFromUserCart,
        updateCartProduct,
        newArrivalsRef,
        scrollToView,
        addProductRating,
        shopProducts,
        setShopProducts,
        handleFeedbackSubmission

      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
