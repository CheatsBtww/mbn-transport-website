import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { requestType, company, lastName, firstName, email, phone, message } = body;

    // Validation basique
    if (!requestType || !company || !lastName || !firstName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Email de destination (votre email)
    const recipientEmail = process.env.CONTACT_EMAIL || 'ismail.iy.pro@gmail.com';

    // Vérifier que la clé API Resend est configurée
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY n\'est pas configurée');
      return NextResponse.json(
        { error: 'Configuration email manquante. Veuillez contacter l\'administrateur.' },
        { status: 500 }
      );
    }

    // Préparer le contenu de l'email
    const emailSubject = `Nouvelle demande de contact - ${requestType}`;
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0369a1;">Nouvelle demande de contact</h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Type de demande:</strong> ${requestType}</p>
          <p><strong>Entreprise:</strong> ${company}</p>
          <p><strong>Nom:</strong> ${lastName}</p>
          <p><strong>Prénom:</strong> ${firstName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #0369a1;">Message:</h3>
          <p style="white-space: pre-wrap; background-color: #ffffff; padding: 15px; border-left: 4px solid #0369a1;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 12px;">
          Ce message a été envoyé depuis le formulaire de contact du site MBN TRANSPORT.
        </p>
      </div>
    `;

    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'MBN Transport <onboarding@resend.dev>', // Utilisez votre domaine vérifié dans Resend pour la production
      to: recipientEmail,
      subject: emailSubject,
      html: emailContent,
      replyTo: email, // Permet de répondre directement au client
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' },
        { status: 500 }
      );
    }

    console.log('Email envoyé avec succès via Resend:', data?.id);

    return NextResponse.json(
      { success: true, message: 'Email envoyé avec succès', id: data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors du traitement de la demande' },
      { status: 500 }
    );
  }
}
