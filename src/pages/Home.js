import { useState, useEffect, useRef } from "react";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, image } = personalDetails;
  const [visibleWords, setVisibleWords] = useState([]);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!tagline) return;

    const words = tagline.split('');
    setVisibleWords([]);
    indexRef.current = 0;

    const interval = setInterval(() => {
      if (indexRef.current < words.length) {
        setVisibleWords(prev => [...prev, words[indexRef.current]]);
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [tagline]);

 return (
    <div className="container page-content">
      <div className="row align-items-center flex-column-reverse flex-md-row">
        
        <div className="col-md-6">
          <h2>Hi, 👋<br />My name is {name}</h2>
          <h2>I am a <span className="text-primary">{visibleWords.join('')}</span></h2>
        </div>

        
        <div className="col-md-6 text-center">
          <img src={image} alt="profile" className="img-fluid rounded" style={{  maxWidth: "80%" }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
