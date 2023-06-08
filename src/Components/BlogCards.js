import "./BlogPage.css";

export default function BlogCards(params) {
  return (
    <div className="blog-bg">
    <h2 className="h2-title">OUR MOST POPULAR POSTS</h2>
  <div className="blogcard-main">
    <a className="a-link" href="@">
      <div className="card1">
        <div>
          <img className="card-img" src={require("./card1.jpg")} alt="1" />
        </div>
        <div>
          <p className="card-title">
            THE 11 BEST BEACHES IN MONOPOLI, PUGLIA
          </p>
          <p className="card-content">
            Its stunning historic harbour is big factor in this - the perfect
            place to sit with a panzerotte watching boats painted red and blue
            bobbing away in the water - but its pretty backstreets, good
            restaurants, and range of affordable accommodations also help.
          </p>
        </div>
      </div>
    </a>
    {/* card 2 */}
    <a className="a-link" href="@">
      <div className="card1">
        <div>
          <img className="card-img" src={require("./card2.jpg")} alt="1" />
        </div>
        <div>
          <p className="card-title">
            A SHORT GUIDE TO TORRE DELL'ORSO, PUGLIA{" "}
          </p>
          <p className="card-content">
            Very much a summer resort town, but in the Italian style, Torre
            dell'Orso's proximity to Lecce and several of Puglia's most famous
            coastal spots make it a mandatory stop for first-timers and
            road-trippers in the southern Italian region.
          </p>
        </div>
      </div>
    </a>
    {/* card 3 */}
    <a className="a-link" href="@">
      <div className="card1">
        <div>
          <img className="card-img" src={require("./card3.jpg")} alt="1" />
        </div>
        <div>
          <p className="card-title">
            OUR GUIDE TO SCILLA | CALABRIA'S PRETTIEST FISHING VILLAGE
          </p>
          <p className="card-content">
            Standing twelve-feet tall with six heads - each with a neck
            composed of snakes and bearing a triple row of sharp shark's teeth
            - and packs of ferocious dogs emerging from her nether-regions,
            she ripped apart all that dared to fall within her reach.
          </p>
        </div>
      </div>
    </a>
    {/* card 4 */}
    <a className="a-link" href="@">
      <div className="card1">
        <div>
          <img className="card-img" src={require("./card4.jpg")} alt="1" />
        </div>
        <div>
          <p className="card-title">WHAT IS THE COPERTO IN ITALY?</p>
          <p className="card-content">
            It's higher than you expected, and there's something about a
            'coperto' charge. It may only be a few euro, or it could be in the
            double figures. Nobody told you about it, you certainly didn't eat
            that free bread at the start, and you have absolutely no idea what
            it's for.
          </p>
        </div>
      </div>
    </a>
    {/* card 5 */}
    <a className="a-link" href="@">
      <div className="card1">
        <div>
          <img className="card-img" src={require("./card5.jpg")} alt="1" />
        </div>
        <div>
          <p className="card-title">
            HOW TO VISIT CAPO VATICANO IN CALABRIA + WHERE TO STAY
          </p>
          <p className="card-content">
            Jutting out from just above the toe of Italy’s boot toward Sicily
            across the narrow Straits of Messina, its scenery is dramatic,
            rugged, and amongst the best you’ll find on this divine stretch of
            coast known as the Costa degli Dei (Coast of the Gods).
          </p>
        </div>
      </div>
    </a>
    {/* card 6 */}
    <a className="a-link" href="@">
      <div className="card1">
        <div>
          <img className="card-img" src={require("./card6.jpg")} alt="1" />
        </div>
        <div>
          <p className="card-title">
            THE BEST THINGS TO DO IN TROPEA, ITALY | THE PEARL OF CALABRIA
          </p>
          <p className="card-content">
            A pretty clifftop town on the west coast of this lesser-visited
            southern region, perched 150 metres above the irresistible blues
            of the Tyrrhenian Sea and overlooking a perfect pair of spiagge,
            just a glimpse is enough to make one's soul yearn for an Italian
            summer.
          </p>
        </div>
      </div>
    </a>
  </div>
  </div>



  );
}
