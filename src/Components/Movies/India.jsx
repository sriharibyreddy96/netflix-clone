import React from "react";

const data = [
  {
    title: "Hi Nanna",
    img: 'https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWSA0vK5kXUKCC1f_S2KBwx5zNmpq5BlMG3iv7uKXd6pnbfFyTgySf0aWFeIS6fcE-9SEqrt6w2p73fm20aCO0Cw261oPFUQXCbikFwgOmeN3ZZWSEryDfP1iQ6CO4M-NnVLmw1IBjLzwZ8AL-tnyeYphCsRn4-tTUKyCRCoOtwZmSq3Dl7vO7HSIUWNJSuamNUaIBzqFrBMe3crbkAN4_qmhpr7AK0w3W4ZOchrTsOaw3-mVXr_YOluPF5P1Y2dfhOIXd48j2ArwihlRC6m57HSZftf.jpg?r=3e0'
  },
  {
    title: "OMG 2",
    img: 'https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV0WTGNGqZngfWdO1uhk3bVY9HjAm-11F5NbTlRh_jYQp5Ypb86a3ltTMd6mMaaDSMfLaU_qj-XiSROyLnJKQSEF_HFLQ-SM-Rs.jpg?r=62d'
  },
  {
    title: "Jawan",
    img: 'https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRecCEkfho1IsrdXdEiPxPBb-mI-XUR8cIverWsQNLoHAcuxe0fUs3SOqvrhr77z8kQircYZf_-gVVakvA-kPQzsW_BrTXgqEJU.jpg?r=cfe'
  },
  {
    title: "Leo",
    img: 'https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeG8zcw7HC0gWoJpHwsiXudOXMeQtQ2R1SMPnhzKdaZvAIRaa1fC0A6tq-z73ycNdlgy4XPElnm7ddS-QB7_Jiz3NutH5bWs665sl7JxFypeVT7YmymfOrvKTa6L6wlKMEJ_.jpg?r=650'
  },
  {
    title: "Hi Nanna",
    img: ''
  },
]

const India = () => {
  // const [title, img, index] = data;
  return (
    <div>
      <h3>Made in India</h3>
      <div>
        {
          data.map((item, index) => (
            <div className="movies" key={index}>
              <img src={item.img} alt="img" />
              <h1>{item.title}</h1>
            </div>
          ))
        }
    </div>
    </div>
  );
};

export default India;
