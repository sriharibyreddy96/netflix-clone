import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";


const data = [
  {
    qus: "What is NetFlix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    qus: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.",
  },
  {
    qus: "Where can I Watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    qus: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    qus: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    qus: "Is Netflix good for Kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const Faq = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if(selected === i ) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>

        <div className="wrapper">
          <h1>Frequently Asked Questions</h1>
            <div className="accordion">
                {
                    data.map((item,i ) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle(i)}>
                                <div className="qus">
                                <h2>{item.qus}</h2>
                                <span>
                                {selected === i ?  <TiMinus /> : <FaPlus /> }
                                </span>
                                </div>
                                <div className={ selected === i ? 'content show' : 'content'}><p>{item.answer}</p></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="faq-cont">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="mail">
              <input type="email" placeholder="Email Address" />
              <button>
                Get Started{" "}
                <IoIosArrowForward size={20} style={{ paddingTop: "5px" }} />
              </button>
            </div>
        </div>

    </>
  )
};

export default Faq;
