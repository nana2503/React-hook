import React, { useEffect, useState } from "react";
import axios from "axios";
export default function useFetch(url) {
  const [data, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  useEffect(async () => {
    const source = axios.CancelToken.source();
    async function fetchData() {
      try {
        let res = await axios.get(url, { cancelToken: source.token });
        let locations =
          res && res.data && res.data.locations ? res.data.locations : [];
        setDataCovid(locations);
        setIsLoading(false);
        setIsErr(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request đã được bãi bỏ", e.message);
        } else {
          setIsErr(true);
          setIsLoading(false);
          console.log("lỗi");
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 1000);
    return () => {
      source.cancel();
    };
  }, [url]);
  return { data, isLoading, isErr };
}
