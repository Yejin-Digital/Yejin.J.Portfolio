export default function Mockup(image1, image2) {
  return (
    <div className={style.mockup}>
      <img src={image1} alt="can mockup 1" />
      <div className={style.moreMockup}>
        <p>More Mockup</p>
        <img src={image2} alt="can mockup 2" />
      </div>
    </div>
}
