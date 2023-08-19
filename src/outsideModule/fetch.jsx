import React, { useEffect, useState } from "react";
import axios from "axios";
export default function useFetch(url) {
  const [data, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  useEffect(async () => {
    async function fetchData() {
      try {
        // setTimeout(async () => {
        let res = await axios.get(url);
        let locations =
          res && res.data && res.data.locations ? res.data.locations : [];
        if (locations.length === 0) {
          throw new Error("No data found");
        }
        setDataCovid(locations);
        setIsLoading(false);
        // }, 1000);
        setIsErr(false);
      } catch (e) {
        setIsErr(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { data, isLoading, isErr };
}
