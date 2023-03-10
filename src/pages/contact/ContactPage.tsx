import "./contactPage.css";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Footer from "../../feature/footer/Footer";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>FLOOR&#8308; - Contact Us</title>
        <link rel="canonical" href="https://www.floortothefour.com/#/contact" />
        <meta name="description"
          content="Get in contact with the team at Floor to the Four. We are non-discriminatory as long as you can mix. Bedroom DJ or established label owner, doesn't matter." />
        <meta property="og:title" content="FLOOR&#8308; - Contact Us" />
        <meta name="og:description"
          content="Get in contact with the team at Floor to the Four. We are non-discriminatory as long as you can mix. Bedroom DJ or established label owner, doesn't matter." />
        <meta property="og:url" content="https://www.floortothefour.com/#/contact"></meta>
        <meta name="twitter:title" content="FLOOR&#8308; - Contact Us" />
        <meta name="twitter:description"
          content="Get in contact with the team at Floor to the Four. We are non-discriminatory as long as you can mix. Bedroom DJ or established label owner, doesn't matter." />
      </Helmet>
      <h1 className="contact-page-h1">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register("firstName", { required: true })} type="text" placeholder="Enter your first name..." />
        </div>
        <div>
          <label>Last Name</label>
          <input {...register("lastName", { required: true })} type="text" placeholder="Enter your last name..." />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email", { required: true })} type="email" placeholder="Enter your email..." />
        </div>
        <div>
          <label>Message</label>
          <textarea {...register("message", { required: true })} rows={10} placeholder="Type your message here..." />
        </div>
        <input type="submit" />
      </form>
      <Footer darkMode={false} />
    </div>
  );
};

export default ContactPage;
