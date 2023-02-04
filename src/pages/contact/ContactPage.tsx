import "./contactPage.css";
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
