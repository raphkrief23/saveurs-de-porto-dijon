const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Saveurs de Dijon</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          22 Av. de Langres, 21000 Dijon
        </p>
        <a href="tel:+33761806946" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 7 61 80 69 46
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Saveurs de Dijon. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;