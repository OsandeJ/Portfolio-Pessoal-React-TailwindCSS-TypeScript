import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/enviar-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus(response.ok ? "success" : "error");
      if (response.ok) setFormData({ nome: "", email: "", telefone: "", mensagem: "" });

    } catch {
      setStatus("error");
    }

    // Fecha o modal após 3 segundos
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="flex flex-col items-center px-4 w-full" id="Contacta-me">
      <div className="text-center p-5 w-full max-w-lg bg-[#25272c] rounded-2xl shadow-lg mt-[-10px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          {["nome", "email", "telefone", "mensagem"].map((field, i) =>
            field === "mensagem" ? (
              <textarea
                key={i}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Seu ${field}`}
                required
                className="w-full bg-[#111214b4] border-0 outline-none p-4 rounded-xl text-neutral-400 placeholder-neutral-300 h-48 resize-none"
              />
            ) : (
              <input
                key={i}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Seu ${field}`}
                required={field !== "telefone"}
                className="w-full bg-[#111214b4] border-0 outline-none p-4 rounded-xl text-neutral-400 placeholder-neutral-300"
              />
            )
          )}
          <button type="submit" className="w-32 text-[#f8efb6] font-bold bg-[#111214b4] rounded-3xl px-4 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_1px_#ffffff54]">
            Enviar
          </button>
        </form>

        {/* Modal de Sucesso / Erro */}
        <div
          className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 w-72 text-center p-4 rounded-lg shadow-lg z-50
          transition-opacity duration-500
          ${status ? "opacity-100 visible" : "opacity-0 invisible"}
          ${status === "success" ? "text-[#48ff51] bg-black/80" : "text-red-500 bg-black/80"}`}>
          {status === "success" ? "Email enviado com sucesso!" : "Erro ao enviar o email. Tente novamente!"}
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
