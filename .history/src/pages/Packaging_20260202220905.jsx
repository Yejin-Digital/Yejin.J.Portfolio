import NavigationBar from '../components/NavigationBar.jsx';
import Footer from '../components/Footer.jsx';
import style from '../styles/Packaging.module.css';
import mangoImg from '../assets/mango.png';
import photoshopSvg from '../assets/photoshop.svg';
import illustratorSvg from '../assets/illustrator.svg';

export default function Packaging() {
  return (
    <div className={style.page}>
      <NavigationBar />
      <div className={style.content}>
        {/* Left: Product Label */}
        <section className={style.labelSection}>
          <div className={style.labelWrapper}>
            <div className={style.hexPattern} />
            <div className={style.leftVertical}>
              <span>Feel the Fizz, Taste the Fresh.</span>
              <span>Sentez le Fizz, Goûtez la fraîcheur.</span>
              <span>Real Fruit</span>
              <span>De vrais fruits</span>
            </div>
            <div className={style.rightVertical}>
              <span>Truly Organic</span>
              <span>Vraiment organique</span>
            </div>
            <div className={style.centerArea}>
              <div className={style.brandShape}>
                <h2 className={style.brandName}>StoneVine</h2>
                <p className={style.tagline}>Sparkling Fruit Juice</p>
                <p className={style.flavor}>Mango flavor</p>
                <p className={style.taglineFr}>Jus de fruits mousseux</p>
                <p className={style.flavorFr}>Saveur de mangue</p>
                <div className={style.fruitImageWrap}>
                  <img
                    src={mangoImg}
                    alt="Mango"
                    className={style.fruitImage}
                  />
                </div>
              </div>
            </div>
            <div className={style.bottomLeftInfo}>
              <span>100% Organic Concentrated Juice</span>
              <span>100% Jus concentré organique</span>
            </div>
            <div className={style.volume}>500 mL</div>
            <div className={style.nutritionPanel}>
              <h3>Nutrition Facts</h3>
              <p>Serving Size 1 can (355 mL)</p>
              <p>Calories 150</p>
              <p>Total Fat 0g</p>
              <p>Sodium 10mg</p>
              <p>Total Carbohydrate 38g</p>
              <p>Protein 0g</p>
              <h4>INGREDIENTS</h4>
              <p>Organic mango concentrate, carbonated water...</p>
            </div>
            <div className={style.returnRefund}>
              RETURN FOR REFUND WHERE APPLICABLE / Remboursement selon les
              conditions
            </div>
            <div className={style.bottleCanada}>
              Bottle in Canada / Embouteillé au Canada
            </div>
            <div className={style.contact}>1-234-567-8901</div>
            <div className={style.recycling}>♻</div>
            <div className={style.calBox}>
              <span>150 cal</span>
              <span>per/par can/canette</span>
            </div>
            <div className={style.barcodeWrap}>
              <div className={style.barcode} />
              <span className={style.barcodeNum}>7 54123 98562 0</span>
            </div>
          </div>
        </section>

        {/* Right: Design Concept */}
        <section className={style.infoSection}>
          <h1 className={style.conceptTitle}>Design Concept</h1>
          <p className={style.conceptText}>
            StoneVine is 100% organic sparkling fruit juice with three different
            flavors. Marketing to young children, overall design is. In order to
            appeal to young customers, the use of round and bubbly fonts and
            fruit photographs in the center of the designs allow easy
            identification of the flavors.
          </p>
          <p className={style.dieline}>Dieline Mango Peach Green Grape</p>
          <div className={style.tools}>
            <span className={style.toolsTitle}>Tools</span>
            <img
              src={photoshopSvg}
              alt="Photoshop"
              className={style.toolIcon}
            />
            <img
              src={illustratorSvg}
              alt="Illustrator"
              className={style.toolIcon}
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
