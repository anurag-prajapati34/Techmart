import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";

const AdminContext = createContext();
const AdminContextProvider = ({ children }) => {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [listedProducts, setListedProducts] = useState([]);
  const [users,setAllUsers]=useState([])
  const [orders, setOrders] = useState([]);
  const fetchOrders = () => {
    try {
      fetch(`${SERVER_URL}/orders`).then(async (response) => {
        if (response.ok) {
          const responeData = await response.json();

          setOrders(responeData.orders);
        } else {
          toast.error("Error fetching products");
        }
      });
    } catch (error) {
      toast.error("Unexpected error");
    }
  };

  const fetchListeProducts = () => {
    try {
      fetch(`${SERVER_URL}/products`).then(async (response) => {
        if (response.ok) {
          const responeData = await response.json();

          setListedProducts(responeData.products);
        } else {
          toast.error("Unexpected products");
        }
      });
    } catch (error) {
      toast.error("Unexpected error");
    }
  };
  const updateOrderStatus = (_id, newStatus) => {
    const id=toast.loading("Updating...")
    try {
      fetch(`${SERVER_URL}/updateOrderStatus`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id,
          newStatus,
        }),
      }).then(async (response) => {
        if (response.ok) {
          const responeData = await response.json();

          toast.success(" Status updated !", {
          
           id:id
          });
          if (responeData) {
            fetchOrders();
          }
        }
      });
    } catch (erroor) {
      toast.error("Unexpected error",{id:id});
    }
  };
  const deleteAProduct = (_id) => {
    const id=toast.loading("Deleting...")
    try {
      fetch(`${SERVER_URL}/deleteAProduct/?product_id=${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }).then(async (response) => {
        if (response.ok) {
          const responeData = await response.json();

          if (responeData) {
            fetchListeProducts();
            toast.success("Deleted !",{id:id});
          }
        }
      });
    } catch (erroor) {
      alert("Error deleting prdduct !",{id:id});
    }
  };



  const fetchAllUsers = () => {
    try {
      fetch(`${SERVER_URL}/users`).then(async (response) => {
        if (response.ok) {
          const responeData = await response.json();

          setAllUsers(responeData?.users);
        } else {
          toast.error("Unexpected errors");
        }
      });
    } catch (error) {
      toast.error("Unexpected error");
    }
  };
  useEffect(() => {
    fetchListeProducts();
    fetchOrders();
    fetchAllUsers();
  }, []);

  return (
    <AdminContext.Provider
      value={{ orders, listedProducts, updateOrderStatus, deleteAProduct ,users}}
    >
      {children}
    </AdminContext.Provider>
  );
};
export { AdminContext, AdminContextProvider };
