import SubTitle from "../SubTitle/SubTitle"
import "./WhatIs.css"

const WhatIs = () => {
  return (
    <div className="whatis gradient_bg" id="whatisgpt">
      <div className="inner_div container">
        <div className="top__section">
            <div>
                <SubTitle title="What is GPT-3"/>
            </div>
            <div>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
        </div>
        <div className="middle__section">
            <div>
                <h1>The possibilities are beyond your imagination</h1>
            </div>
            <div>
                <p>Explore The Library</p>
            </div>
        </div>
        <div className="last__section">
            <SubTitle title="Chatbots" para="We so opinion friends me message as delight. Whole front do of plate heard oh ought. As put impossible own apartments."/>
            <SubTitle title="Knowledgebase" para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
            <SubTitle title="Education" para="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
        </div>
      </div>
    </div>
  )
}

export default WhatIs
