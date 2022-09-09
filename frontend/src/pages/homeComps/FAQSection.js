import React from 'react'
import FAQSegment from './FAQSegment'
import '../styles/FAQSection.css'

const faqs = [
  {
    qst: "Est-ce que le calculateur m’engage ?",
    answer: `Non ! Le calculateur vous permet d’estimer le cout de vos projet web selon divers paramètres mais ne vous engage en rien. Seul un devis signé de votre part fait office d’engagement.`
  },
  {
    qst: "Est-ce que je peux être accompagné lors de l’utilisation du calculateur ?",
    answer : `Absolument ! Nous sommes là pour t’épauler de l’estimation à la livraison de ton projet web. Réserve un appel et l’un de nos chef de projet t’aidera à choisir entre les diverses options.`
  },
  {
    qst: "Comment est-ce que je peux suivre mon projet ?",
    answer:`Une fois le projet confirmé tu auras accès à ton espace dédié où tu trouveras l’ensemble de tes projets en cours. Tu pourras suivre son avancement en temps réel et donner ton feedback à tout moment. Un récapitulatif quotidien avec l’état d’avancement est envoyé par mail. Tu peux également aviser le chef de projet de toute demande particulière.`
  },
  {
    qst:"Est-ce que l’utilisation du calculateur est payante ?",
    answer:`Non. Et ça le restera toujours !`
  },
  {
    qst:"Est-ce que j’ai droit à des révisions ?",
    answer:`Tu n’en auras pas besoin ! La méthode Ubinair a été développé pour te permettre d’intervenir durant le processus de création du projet afin d’éviter tout écart entre tes attentes et le résultat final.`
  },
  {
    qst:"Est-ce que je dois communiquer avec les Freelance ?",
    answer:`Sauf situation particulière, le chef de projet qui t’es dédié est ton seul interlocuteur.`
  },
  {
    qst:"Qui prend la responsabilité des projets ?",
    answer:`Ubinair. Nous garantissant la qualité des prestations !`
  },
  {
    qst:"Que veux dire un projet web ?",
    answer:`C’est tout projet qui touche à la numérisation de ta boîte. Pour les énumérer :
    · Conception d’identité visuelle 
    · Conception et création de site internet 
    · Conception et création d’application mobile 
    · Conception et création d’application web 
    · Création de vidéos 
    · Conception de visuels
    · SEO / SEA 
    · Community Management 
    · Maintenance et sécurité 
    · Webmastering 
    · Branding 
    · Tu ne vois pas ton projet dans la liste ? Réserve un call pour en discuter avec nous de vive voix.`
  }
]

function FAQSection() {
  return (
    <div className='FAQ-section'>
        <div className="FAQ-header">FAQ</div>
        <div className="FAQ-main">
            {
              faqs.map((faq, index) => (
                <FAQSegment qst={faq.qst} text={faq.answer} key={index} />
              ))
            }
        </div>
    </div>
  )
}

export default FAQSection