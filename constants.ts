import type { TopicData } from './types';

export const PHARMACOKINETICS_DATA: TopicData = {
  title: 'Farmakokinetik',
  sections: [
    {
      level: 'Vidensniveau',
      description: 'Jeg har brug for at sætte mig ind i stoffet',
      activities: [
        { text: 'Læs litteraturen igen om farmakokinetik' },
        { text: 'Se film fra Promedicin.dk om kinetik', link: 'https://youtu.be/X5q4x8AmzEU?si=jhzhXKJ3Y31gcYfl' },
        { text: 'Se film Opsummering af kinetik', link: 'https://youtu.be/RExxQZW3U3g?si=DcRcvNH5FAK_WZO5' },
        { text: 'Se/hør speaket Pp igen (se ressourcer)' },
        { text: 'Se uddrag fra highlight.dk:', link: 'https://youtu.be/SEv9RlKOe4c?si=kcdfeXnkgKL6wR9-' },
        { text: 'Besvar studiespørgsmål (se ressourcer)' },
        { text: 'Fill in the blank farmakokinetik', link: 'https://ta.padlet.com/fill-in-the-blank/6wK7bQoapJ/play' },
        { text: 'Lav begrebskort/vendekort til hjælp med terminologi og begreber' },
        { text: 'Brug NotebookLM til at øge forståelsen (filer skal sættes ind som PDF)' }
      ],
      purpose: ['Tilegne sig grundlæggende viden og terminologi'],
      workMethod: 'Arbejdet kan foregå individuelt eller i små grupper (to og to)',
    },
    {
      level: 'Anvendelsesniveau',
      description: 'Jeg har brug for at arbejde med stoffet',
      activities: [
        { text: 'Producer quiz til medstuderende om farmakokinetik' },
        { text: 'Lav selv speak til Pp om farmakokinetik' },
        { text: 'Casearbejde', link: 'https://www.thinglink.com/card/1923342242009842532' },
        { text: 'Casearbejde Peter 1. semester', link: 'https://padlet.com/39rzo18rh2/casearbejde-peter-1-semester-j5e97609pvhk7xyn'},
        { text: 'Lav planche eller et digitalt element om farmakokinetik' },
        { text: 'Læg dig ned på gulvet på et stykke papir. Tegn omrids af kroppen. Tegn lægemidlets vej gennem kroppen (farmakokinetik)' },
        { text: 'Læringsaktivitet, du selv finder på, der giver mening for dig.' }
      ],
      purpose: ['Arbejde aktivt med stoffet, anvende viden, skabe produkter.'],
      workMethod: 'Arbejde kan foregå i små grupper med efterfølgende præsentation for holdet.',
    }
  ]
};

export const PHARMACODYNAMICS_DATA: TopicData = {
  title: 'Farmakodynamik',
  sections: [
    {
      level: 'Vidensniveau',
      description: 'Jeg har brug for at sætte mig ind i stoffet',
      activities: [
        { text: 'Læs litteraturen igen om farmakodynamik' },
        { text: 'Se/hør speaket Pp igen' },
        { text: 'Besvar studiespørgsmål' },
        { text: 'Match begreber farmakodynamik', link: 'https://ta.padlet.com/matching/mVraMdVGr1/play' },
        { text: 'Se uddrag fra highlight.dk:', link: 'https://youtu.be/MDoNeze074E?si=WZSpNLHS-9OEEGZM' },
        { text: 'Lav begrebskort/vendekort til hjælp med terminologi og begreber' },
        { text: 'Brug NotebookLM til at øge forståelsen (filer skal sættes ind som PDF)' }
      ],
      purpose: ['Tilegne sig grundlæggende viden og terminologi'],
      workMethod: 'Arbejdet kan foregå individuelt eller i små grupper (to og to)',
    },
    {
      level: 'Anvendelsesniveau',
      description: 'Jeg har brug for at arbejde med stoffet',
      activities: [
        { text: 'Producer quiz til medstuderende om farmakodynamik' },
        { text: 'Lav selv speak til Pp om farmakodynamik' },
        { text: 'Lav planche eller et digitalt element om farmakodynamik. Slå jer løs i studietube' },
        { text: 'Gå i escaperoom' },
        { text: 'Link til intro:', link: 'https://www.studietube.dk/media/9471921/1556421543' },
        { text: 'Link til escaperoom:', link: 'https://www.thinglink.com/scene/1915805587900203494' },
        { text: 'Læringsaktivitet, du selv finder på, der giver mening for dig.' }
      ],
      purpose: ['Arbejde aktivt med stoffet, anvende viden, skabe produkter.'],
      workMethod: 'Arbejde kan foregå i små grupper med efterfølgende præsentation for holdet.',
    }
  ]
};