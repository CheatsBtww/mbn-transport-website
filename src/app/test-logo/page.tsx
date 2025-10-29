import Image from 'next/image';

export default function TestLogoPage() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '20px', 
      background: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        background: 'white', 
        padding: '40px', 
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#333', marginBottom: '30px' }}>
          🧪 Test d&apos;affichage du logo MBN TRANSPORT
        </h1>
        
        <div style={{ 
          background: '#e3f2fd', 
          padding: '15px', 
          borderRadius: '4px', 
          marginBottom: '20px' 
        }}>
          <strong>Fichier :</strong> /logo-mbn.png<br/>
          <strong>Dimensions originales :</strong> 1280 x 850 px<br/>
          <strong>Format :</strong> PNG avec transparence
        </div>

        <h2>Logo en taille réelle :</h2>
        <div style={{ 
          border: '2px solid #ddd', 
          padding: '20px', 
          margin: '20px 0', 
          background: 'white' 
        }}>
          <Image 
            src="/logo-mbn.png" 
            alt="MBN TRANSPORT Logo" 
            width={1280}
            height={850}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <h2>Logo dans le header (hauteur 48px) :</h2>
        <div style={{ 
          border: '2px solid #ddd', 
          padding: '20px', 
          margin: '20px 0', 
          background: 'white' 
        }}>
          <Image 
            src="/logo-mbn.png" 
            alt="MBN TRANSPORT Logo" 
            width={192}
            height={128}
            className="h-12 w-auto"
            style={{ height: '48px', width: 'auto' }}
          />
        </div>

        <h2>Logo dans le footer (hauteur 64px) :</h2>
        <div style={{ 
          border: '2px solid #ddd', 
          padding: '20px', 
          margin: '20px 0', 
          background: 'white' 
        }}>
          <Image 
            src="/logo-mbn.png" 
            alt="MBN TRANSPORT Logo" 
            width={192}
            height={128}
            style={{ height: '64px', width: 'auto' }}
          />
        </div>

        <h2>Logo dans CaseStudy (hauteur 96px) :</h2>
        <div style={{ 
          border: '2px solid #ddd', 
          padding: '20px', 
          margin: '20px 0', 
          background: 'white' 
        }}>
          <Image 
            src="/logo-mbn.png" 
            alt="MBN TRANSPORT Logo" 
            width={256}
            height={170}
            style={{ height: '96px', width: 'auto' }}
          />
        </div>

        <div style={{ 
          background: '#e3f2fd', 
          padding: '15px', 
          borderRadius: '4px', 
          marginTop: '20px' 
        }}>
          ✅ Si vous voyez le logo ci-dessus, l&apos;image est correctement chargée !<br/>
          ❌ Si vous ne voyez rien, vérifiez la console du navigateur pour les erreurs.
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <a 
            href="/" 
            style={{ 
              display: 'inline-block',
              background: '#1e40af',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            ← Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </div>
  );
}

