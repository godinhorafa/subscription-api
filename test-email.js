import transporter, { accountEmail } from "./config/nodemailer.js";

const sendTestEmail = async () => {
  const mailOptions = {
    from: accountEmail,
    to: "seuemailteste@gmail.com",
    subject: "Teste de Email - SubDub",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1>Email de Teste</h1>
        <p>Olá! Este é um email de teste do sistema SubDub.</p>
        <p>Se você está recebendo este email, significa que a configuração do Nodemailer está funcionando corretamente!</p>
        <br>
        <p>Atenciosamente,</p>
        <p>Equipe SubDub</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado com sucesso:", info.response);
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
};

// Executar o teste
sendTestEmail();
