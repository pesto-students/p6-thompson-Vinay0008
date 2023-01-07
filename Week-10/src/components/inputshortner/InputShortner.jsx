import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import toast from "react-hot-toast";

const InputShortner = () => {
  const apiUrl = "https://api.shrtco.de/v2/shorten?url";
  const regexUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

  const [input, setInput] = useState("");
  const [originalLink, setOriginalLink] = useState("");
  const [shortenLink, setShortenLink] = useState("");
  const [loader, setLoader] = useState(false);
  const [urls, setUrls] = useState([]);

  const isValidURL = (st) => {
    let res = st.match(regexUrl);
    return (res !== null)
  };



  const shortenFn = async () => {
    try {
      setLoader(true);
      const shortURL = apiUrl + "=" + input;
      const res = await fetch(shortURL);
      const data = await res.json();
      console.log("data => ", data);
      // optional chaining
      if (data?.ok) {
        setInput("");
        setOriginalLink(data?.result?.original_link);
        setShortenLink(data?.result?.full_short_link);
        setLoader(false);
        // if(){

        // }
        // else{
        setUrls([
          ...urls,
          {
            originalLink: data?.result?.original_link,
            shortenLink: data?.result?.full_short_link,
          },
        ]);
      // }
        let temp = [];
        if (localStorage.getItem("data")) {
          temp = JSON.parse(localStorage.getItem("data"));
        }
        localStorage.setItem(
          "data",
          JSON.stringify([
            ...temp,
            {
              originalLink: data?.result?.original_link,
              shortenLink: data?.result?.full_short_link,
            },
          ])
        );
      } else {
        setInput("");
        setOriginalLink("");
        setShortenLink("");
        setLoader(false);
        toast.error("Something went wrong");
      }
    } catch (err) {
      setInput("");
        setOriginalLink("");
        setShortenLink("");
        setLoader(false);
      toast.error("You are offline");
      console.error(err);
    }
  };

  const copyText = async () => {
    typeof window !== "undefined" &&
      (await window.navigator.clipboard.writeText(shortenLink));
    toast.success("Url Copied !!!");
  };

  // const setInputURL = (e) => {
  //   console.log(e)
  //   setInput(e.target.value)
  // }

  return (
    <>
      <div className="inputShortnerContainer">
        <div className="inputShortner">
          <input
            type="url"
            placeholder="Enter URL"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // onChange={setInputURL}
          />
          <button
            className="shortenBtn"
            onClick={shortenFn}
            disabled={!isValidURL(input)}
          >
            {loader ? <ImSpinner2 className="rotate" /> : "Shorten it !"}
          </button>
        </div>
        {shortenLink !== "" ? (
          <div className="copyDiv">
            <div className="copyInnerDiv">
              <div>
                <a href={originalLink} target="_blank" rel="noreferrer" className="originalLink">
                  {originalLink}
                </a>
              </div>
              <div className="copyTextDiv">
                <p className="shortUrl">
                  <a href={shortenLink} target="_blank" rel="noreferrer" className="shortenLink">
                    {shortenLink}
                  </a>
                </p>
                <button className="copyBtn" onClick={copyText}>
                  Copy
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="shortenMainDiv">
        <table>
          <thead>
            {urls?.length > 0 ? (
              <tr>
                <th>Main Url</th>
                <th>Shortly</th>
              </tr>
            ) : (
              ""
            )}
          </thead>
          <tbody>
            {urls?.map((url, i) => (
              <tr key={i}>
                <td>
                  <a
                    href={url?.originalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="originalLink"
                  >
                    {url?.originalLink}
                  </a>
                </td>
                <td>
                  <a
                    href={url?.shortenLink}
                    target="_blank"
                    rel="noreferrer"
                    className="shortenLink"
                  >
                    {url?.shortenLink}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InputShortner;
