import "./Section4.css";

export default function Section4(params) {
  return (
    <div>
      <img
        className="section4-img"
        src={require("./poster2.PNG")}
        alt="poster2"
      />
      <div className="section4-content">
        <p>
          The road circling the Scottish Highlands has always existed, the
          single-tracks and winding lanes long providing a lifeline to farmers,
          fishermen and villagers along the coast. However, for years, it was
          without a name - and anyone who has dreamed of driving a cadillac
          along Route 66 knows just how important that can be. If you’re looking
          for a great British adventure this summer, add the North Coast 500 to
          your list.
        </p>
      </div>
    </div>
  );
}
