import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TopicName} from "../../pages/topic-page/topic-page.component";
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

const content: Record<string, {
  type: string;
  link?: string;
  content?: string;
  embed?: string;
  first?: true;
  width?: string;
  href?: string;
}[]> = {
  'frame1': [
    { first: true, type: 'text', content: 'IREA est une marque de vêtements streetwear chrétienne qui vise à révolutionner ce secteur en véhiculant un message fort. J\'ai conceptualisé IREA il y a quelques années, mais sans une idée concrète de comment le réaliser. À partir de mi-2023, je me suis intensément concentré sur ce projet, et en septembre 2023, j\'ai lancé une première collection. Le but est qu\'une partie des bénéfices soit reversée à des églises dans le besoin.' },
    { type: 'text', content: 'J\'ai collaboré avec des influenceurs et intensifié la communication sur les réseaux sociaux pour concrétiser cette vision.' },
    { type: 'text', content: 'En tant qu\'étudiant, j\'ai dû apprendre à gérer mon budget, diriger une équipe, créer du contenu, et collaborer avec des influenceurs. J\'ai également pris en charge les commandes, les livraisons, le site internet, ainsi que la sélection des tissus et des matériaux avec l\'usine. Depuis, nous avons été invités à des événements pour vendre nos produits en pop-up, nous continuons à travailler avec des influenceurs, et nous organisons régulièrement des shootings.' },
    { type: 'link', content: "→ Voir la boutique", href: 'https://irea.clothing/' },
    { type: 'image', link: 'img/irea.png', width: "70vw" }
  ],
  'frame2': [
    { first: true, type: 'text', content: 'Passionné par la création de contenu et l\'immobilier, j\'ai pensé à combiner mes deux passions. J\'ai donc fait beaucoup de prospection sur Airbnb, ce qui m\'a permis de travailler pour quelques clients en proposant mes services vidéo. Bien que j\'aie mis cette activité en pause pour le moment, je souhaite la reprendre très bientôt. Je veux développer mes réseaux sociaux car je suis conscient des opportunités que cela peut créer.' },
    { type: 'image', link: 'img/seva.png' }
  ],
  'frame3': [
    { first: true, type: 'text', content: 'Passionné par l\'immobilier, j\'ai toujours envisagé de faire des investissements dans ce domaine après mes études. Cependant, ce projet s\'est concrétisé plus rapidement que prévu. Lors d\'une prestation de vidéos immobilières pour un client, j\'ai rencontré un entrepreneur immobilier qui est devenu un ami. Nous avons maintenu le contact, échangé de nombreux messages, et nous sommes revus à plusieurs reprises. Par la suite, j\'ai eu l\'opportunité de suivre une formation de trois jours à ses côtés sur le terrain. Ces trois jours ont été extrêmement formateurs et passionnants, et grâce à cette expérience, j\'ai pu créer Seva Conciergerie. Cette entreprise s\'occupe de biens immobiliers dans la région lyonnaise et à Mâcon, avec l\'ambition de se développer en Suisse par la suite.' },
    { type: 'image', link: 'img/immo.png' }
  ],
  'note': [
    { first: true, type: 'image', link: 'img/CV.png', width: '50vw' }
  ],
  'poster': [
    { first: true, type: 'text', content: 'Je m\'appelle Ezekiel et j\'ai 19 ans. Les gens disent de moi que je suis sérieux, discipliné et inspirant. Malgré mon jeune âge, j\'ai déjà accumulé beaucoup d\'expérience et je ne compte pas m\'arrêter là, car j\'ai des objectifs très élevés. À 19 ans, j\'ai réussi à créer une marque de vêtements, à me lancer dans l\'immobilier, et à être invité à des conférences et des cours. Ces expériences et mon sérieux me permettent de réaliser toutes les tâches demandées avec rigueur et d\'aller au-delà des attentes.' },
    { type: 'text', content: 'Après avoir obtenu mon bac avec mention, j\'ai intégré l\'ISEG Lyon, l\'une des meilleures écoles de France en marketing et communication. J\'y ai beaucoup appris et j\'ai pu me constituer un solide réseau. Cependant, maintenant que mes projets sont concrets et que j\'ai le réseau nécessaire pour les développer, j\'ai décidé de quitter ce parcours pour optimiser mon avenir. J\'ai choisi de partir en Suisse afin de réinvestir mon salaire dans l\'immobilier.' },
  ],
  'television': [
    {
      first: true,
      type: 'vimeo',
      embed:
        '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/957924761?h=b20651593a&autoplay=1&loop=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>\n'
    }
  ],
  'trophy': [
    { first: true, type: 'text', content: 'Depuis mon plus jeune âge, le sport occupe une place centrale dans ma vie. À quatre ans, j\'ai commencé par la gymnastique tout en pratiquant le tennis en parallèle. Par la suite, j\'ai décidé de me concentrer sur le basket, que j\'ai pratiqué pendant dix ans. Ensuite, je me suis tourné vers la musculation, et maintenant je combine la musculation avec des entraînements de sports de combat. \n' },
    { type: 'text', content: 'Le sport, en général, me permet de m\'évader, de rester dans ma bulle et de me défouler. Il m\'aide à être rigoureux dans mes actions et contribue grandement à la réussite de mes objectifs à long terme. \n' },
  ],
};

@Component({
  selector: 'topic',
  standalone: true,
  imports: [
    NgStyle,
    NgIf,
    NgForOf,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent implements OnInit {
  public topicName: TopicName = 'television';
  public content: typeof content[string] | null = null;
  public title: string | null = null;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  async ngOnInit(): Promise<void> {
    this.route.queryParams
      .subscribe((params: Params): void => {
        this.topicName = params['name'];
        this.title = params['title'];
      });

    this.content = content[this.topicName];
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
