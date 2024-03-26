import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/myPic.png"
          alt="My profile image"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <h1>Hi I'm Smit</h1>
      <p>
        I blog about Web Development - especially frameworks like React and
        Next.
      </p>
    </section>
  );
}

export default Hero;
