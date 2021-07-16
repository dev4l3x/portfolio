const { default: SocialNetwork } = require("../../components/SocialNetwork");

const Contact = (props) => {
  return (
    <section className="alternative-section text-center">
      <div>
        <a href="mailto:asiglesias478@gmail.com" className="font-bold">
          asiglesias478@gmail.com
        </a>
      </div>
      <div className="my-3">
        <a href="tel:+34 722 27 30 09">+34 722 27 30 09</a>
      </div>
      <div>
        <SocialNetwork
          icon="faLinkedin"
          link="https://es.linkedin.com/in/alex-s%C3%A1nchez-iglesias-56a19b195"
        />
        <SocialNetwork
          icon="faGithubSquare"
          link="https://github.com/dev4l3x"
          className="mx-5"
        />
        <SocialNetwork
          link="mailto:asiglesias478@gmail.com"
          icon="faEnvelopeSquare"
        />
      </div>
    </section>
  );
};

export default Contact;
