import { AnimatedTestimonials } from "./Testimonials";
import { useLanguage } from '../language/LanguageContext';

export function AnimatedTestimonialsDemo() {
  const { language } = useLanguage();

  const content = {
    pt: {
      quote: 'Sobre Nós',
      name: 'Gabriel Silva Galdino',
      designation: 'Product Manager at TechFlow.',
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote1: 'Sou estudante de Ciência da Computação e estagiário na Prodemge, com uma grande paixão por tecnologia. Tenho interesse aprofundado em Java e experiência com diversas outras tecnologias, como Spring Boot e SQL, entre outras.',
      name1: 'Lucas Marques da Silva',
      designation1: 'Ciência da Computação - UNA Contagem.',
      src1: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    en: {
      quote: 'About Us',
      name: 'Gabriel Silva Galdino',
      designation: 'Computer Science - UNA Contagem',
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quote1: 'I am a Computer Science student and an intern at Prodemge with a deep passion for technology. I have a strong interest in Java and experience with various technologies, including Spring Boot and SQL, among others.',
      name1: 'Lucas Marques da Silva',
      designation1: 'Computer Science - UNA Contagem',
      src1: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  };

  const testimonials = [
    {
      quote: content[language].quote,
      name: content[language].name,
      designation: content[language].designation,
      src: content[language].src,
    },
    {
      quote: content[language].quote1,
      name: content[language].name1,
      designation: content[language].designation1,
      src: content[language].src1,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
