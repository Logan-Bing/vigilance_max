export function Success() {
  const template = document.createElement("template");
  template.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      color: #333;
      text-align: center;
      padding: 40px 20px;
    ">
      <!-- Logo -->
      <img 
        src="/logos/fulllogo_transparent_nobuffer.png"
        alt="Vigilance Max" 
        width="180"
        style="margin-bottom: 40px;"
      />

      <!-- Icône succès -->
      <div style="
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #2ecc71;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>

      <!-- Message de confirmation -->
      <h1 style="font-size: 1.8rem; margin-bottom: 12px;">
        Demande envoyée avec succès !
      </h1>
      <p style="font-size: 1rem; color: #666; max-width: 420px; line-height: 1.6;">
        Merci de nous avoir contactés. Votre demande a bien été reçue par l'équipe <strong>Vigilance Max</strong>.
      </p>

      <!-- Délai de réponse -->
      <div style="
        margin: 28px 0;
        padding: 16px 28px;
        background-color: #fff;
        border-left: 4px solid #2ecc71;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        max-width: 380px;
      ">
        <p style="margin: 0; font-size: 0.95rem; color: #555;">
          🕐 Délai de réponse estimé : <strong>24 à 48h ouvrées</strong>
        </p>
      </div>

      <!-- Bouton retour accueil -->
      <a 
        href="/" 
        style="
          display: inline-block;
          margin-top: 10px;
          padding: 12px 32px;
          background-color: #333;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          font-size: 0.95rem;
          transition: background-color 0.2s;
        "
        onmouseover="this.style.backgroundColor='#555'"
        onmouseout="this.style.backgroundColor='#333'"
      >
        ← Retour à l'accueil
      </a>
    </div>
  `;

  return template.content;
}
