import ContactForm from "./ContactForm";


function Contact() {
  return (
    <div className="border-b-2 border-neutral-600 lg:mb-7 mt-5 px-4 sm:px-8 pb-24">
        <h2 className="my-20 text-center text-3xl lg:text-4xl font-extralight">Contacte-me</h2>
        <ContactForm />
    </div>
  );
}
export default Contact;