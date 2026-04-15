import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "Orcam 70",
    date: "Janvier 2026",
    rating: 5,
    text: "Un passage dans ce restaurant un samedi soir à 5 personnes.  Arrivée en avance, le personnel commençait seulement à ce préparer mais ça n'a pas posé de problème on c'est occupé de nous tout de suite, donc très bon accueil.",
  },
  {
    name: "Isabelle Gomes",
    date: "Février 2026",
    rating: 5,
    text: "Un super moment à 7 convives.  Miguel est exceptionnel comme le reste du personnel. C est beau et c est bon. Pas d attente... bref génial J ai retrouvé les saveurs de mon pays Un grand merci",
  },
  {
    name: "Meline Maussire",
    date: "Février 2026",
    rating: 5,
    text: "Accueil chaleureux et fidèle à l’esprit portugais. Les plats sont excellents et authentiques, on se sent vraiment comme là-bas. Une carte variée, pour tous les goûts.",
  },
  {
    name: "Xavier Kempa",
    date: "Janvier 2026",
    rating: 5,
    text: "Cuisine excellente et produits de qualité. La quantités était aussi au RDV. Le service est nickel et les gens sont sympathiques. Restaurant à découvrir !",
  },
  {
    name: "Mouton Fabrice",
    date: "Octobre 2025",
    rating: 5,
    text: "Pour gagner la porte de ce petit restaurant, il faut suivre la flèche aux couleurs des céramiques portugaises. Vous pénétrez alors dans un lieu où les effluves de la cuisine portugaise vous souhaitent la bienvenue.",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-accent" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="border border-border p-8 w-[340px] flex-shrink-0 hover:border-primary/30 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
    <div className="flex gap-1 mb-3">
      {Array.from({ length: review.rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <h3 className="font-heading text-lg text-foreground mb-2">{review.name}</h3>
    <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm">
      « {review.text} »
    </p>
    <div className="flex items-baseline justify-end">
      <span className="text-muted-foreground text-xs">{review.date}</span>
    </div>
  </div>
);

const ReviewsTrack = () => (
  <div className="flex gap-6">
    {reviews.map((review, i) => (
      <ReviewCard key={i} review={review} />
    ))}
  </div>
);

const ReviewsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Témoignages
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Avis de nos clients
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Ce que nos clients disent de nous
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <ReviewsTrack />
          <div className="pl-6">
            <ReviewsTrack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
