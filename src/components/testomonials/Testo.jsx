import Marquee from "react-fast-marquee";
import "./testo.css";
import { PiQuotesBold } from "react-icons/pi";

const Testo = () => {
  return (
    <div id="praise-wall" className="testo_container">
      <div className="transformer">
        <Marquee
          gradient={true}
          gradientWidth={10}
          gradientColor="#fff"
          speed={20} // Adjust speed as needed
          direction="right" // Direction of the marquee
          loop={0} // 0 for infinite looping
          autoFill={true}
          pauseOnHover={true}
        >
          <div className="halo">
            <div className="testo_card">
              <p className="testo_para">
                It is my pleasure to tell you about the miraculous signs and
                wonders that the Most High God has performed for me. How great
                are his signs, how mighty his wonders! His kingdom is an eternal
                kingdom; his dominion endures from generation to generation.
              </p>
              <h2>Daniel 4:2, 3 NIV</h2>
            </div>{" "}
            <div className="testo_card">

              <p className="testo_para">
                You did it: you changed wild lament into whirling dance; You
                ripped off my black mourning band and decked me with
                wildflowers. I’m about to burst with song; I can’t keep quiet
                about you. GOD, my God, I can’t thank you enough
              </p>
              <h2>Psalm 30:11, 12 MSG</h2>
            </div>{" "}
            <div className="testo_card">

              <p className="testo_para">
                Yet this I call to mind and therefore I have hope: Because of
                the Lord’s great love we are not consumed, for his compassions
                never fail. They are new every morning; great is your
                faithfulness.
              </p>
              <h2>Lamentations 3:21-23 NIV</h2>
            </div>
            <div className="testo_card">

              <p className="testo_para">
                It is good to praise the Lord and make music to your name, O
                Most High, proclaiming your love in the morning and your
                faithfulness at night
              </p>
              <h2>Psalm 92:2</h2>
            </div>{" "}
            <div className="testo_card">

              <p className="testo_para">
                I will give thanks to the Lord because of his righteousness; I
                will sing the praises of the name of the Lord Most High
              </p>
              <h2>(pasalm NIV)</h2>
            </div>
            <div className="testo_card">

              <p className="testo_para">
                For you make me glad by your deeds, Lord; I sing for joy at what
                your hands have done.
              </p>
              <h2>(pasalm NIV)</h2>
            </div>{" "}
            <div className="testo_card">

              <p className="testo_para">
                I will give thanks to the Lord because of his righteousness; I
                will sing the praises of the name of the Lord Most High
              </p>
              <h2>(pasalm NIV)</h2>
            </div>{" "}
            <div className="testo_card">

              <p className="testo_para">
              Praise him for his acts of power; praise him for his surpassing greatness.
              </p>
              <h2>Psalm NIV</h2>
            </div> <div className="testo_card">

              <p className="testo_para">
              Praise the Lord, my soul; all my inmost being, praise his holy name.
              </p>
              <h2>Psalm 103 NIV</h2>
            </div> <div className="testo_card">

              <p className="testo_para">
              Praise the Lord, my soul, and forget not all his benefits—
              </p>
              <h2>Psalm 103 NIV</h2>
            </div> <div className="testo_card">

              <p className="testo_para">
              I will sing of your love and justice; to you, Lord, I will sing praise.
              </p>
              <h2>Psalm‬ ‭101‬:‭1‬ NIV</h2>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testo;
