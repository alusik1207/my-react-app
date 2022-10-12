import React, {
  useState,
  useEffect,
  useCallback,
  useMemo
} from "react";
import axios from "axios";
import styles from "./AllCartoons.module.scss";
// import { Link } from "react-router-dom";

// import { MagnifyingGlass } from "react-loader-spinner";

export const AllCartoons = () => {
  const [cartoons, setCartoons] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [query, setQuery] = useState("");

//   const onQueryChange = useCallback((event) => {
//     setQuery(event.target.value);
//   }, []);

//   const filteredData = useMemo(() => {
//     if (!cartoons) {
//       return null;
//     }
//     return cartoons.filter((cartoon) =>
//       cartoon.title
//         .toLowerCase()
//         .includes(query.toLowerCase())
//     );
//   }, [cartoons, query]);
  useEffect(() => {
    const getCartoons = async () => {
      try {
        // setLoading(true);
        const response = await axios.get(
          "https://api.sampleapis.com/cartoons/cartoons2D"
        );
        setCartoons(response.cartoons);
        console.log(response.data);
      } catch (e) {
        console.log(e);
    }
        //  finally {
    //     setLoading(false);
    //   }
    };
    getCartoons();
  }, []);

    // if (loading) {
    //   return (
    //     <div>
    //       <MagnifyingGlass
    //         visible={true}
    //         height="80"
    //         width="80"
    //         ariaLabel="MagnifyingGlass-loading"
    //         wrapperStyle={{}}
    //         wrapperClass="MagnifyingGlass-wrapper"
    //         glassColor="#c0efff"
    //         color="#e15b64"
    //         margin='0 auto'
    //       />
    //     </div>
    //   );
    // }
//   if (!filteredData) {
//     return null;
//   }
  return (
    <div className={styles.title}>
      {cartoons.map((item) => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  );
};
